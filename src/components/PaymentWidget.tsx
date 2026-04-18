"use client";
import { useState, useCallback } from "react";
import styles from "./PaymentWidget.module.css";

type TxState =
  | { status: "idle" }
  | { status: "connecting" }
  | { status: "connected"; address: string }
  | { status: "sending" }
  | { status: "success"; txHash: string; explorerUrl: string }
  | { status: "error"; message: string };

const ARC_TESTNET = {
  chainId: "0x4CC442",
  chainName: "Arc Testnet",
  nativeCurrency: { name: "USD Coin", symbol: "USDC", decimals: 6 },
  rpcUrls: ["https://rpc.arc.network/testnet"],
  blockExplorerUrls: ["https://testnet.arcscan.app"],
};

const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

function shortenAddress(addr: string) {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

function USDCIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#2775CA"/>
      <path d="M10.75 13.8V14.75H9.25V13.82C8.08 13.61 7.17 12.97 7.1 11.82H8.18C8.24 12.43 8.72 12.87 10.01 12.87C11.38 12.87 11.76 12.23 11.76 11.79C11.76 11.18 11.38 10.93 10.06 10.61C8.58 10.25 7.25 9.78 7.25 8.29C7.25 7.08 8.19 6.38 9.25 6.19V5.25H10.75V6.21C11.88 6.44 12.63 7.16 12.68 8.21H11.6C11.55 7.57 11.15 7.13 10.01 7.13C8.95 7.13 8.44 7.64 8.44 8.27C8.44 8.84 8.86 9.07 10.23 9.41C11.6 9.75 12.95 10.19 12.95 11.77C12.95 12.98 12.03 13.61 10.75 13.8Z" fill="white"/>
    </svg>
  );
}

export default function PaymentWidget() {
  const [txState, setTxState] = useState<TxState>({ status: "idle" });
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [recipientError, setRecipientError] = useState("");

  const connectWallet = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      setTxState({ status: "error", message: "No wallet found. Install Rabby, MetaMask or any EVM wallet." });
      return;
    }
    setTxState({ status: "connecting" });
    try {
      const accounts = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[];
      try {
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: ARC_TESTNET.chainId }] });
      } catch (switchError: unknown) {
        if ((switchError as { code: number }).code === 4902) {
          await window.ethereum.request({ method: "wallet_addEthereumChain", params: [ARC_TESTNET] });
        } else { throw switchError; }
      }
      setTxState({ status: "connected", address: accounts[0] });
    } catch {
      setTxState({ status: "error", message: "Failed to connect. Try Rabby or MetaMask." });
    }
  }, []);

  const sendUSDC = useCallback(async () => {
    if (txState.status !== "connected") return;
    if (!recipient.match(/^0x[a-fA-F0-9]{40}$/)) { setRecipientError("Invalid address"); return; }
    const numAmount = parseFloat(amount);
    if (!amount || isNaN(numAmount) || numAmount <= 0) return;
    setRecipientError("");
    setTxState({ status: "sending" });
    try {
      const amountInMicro = BigInt(Math.round(numAmount * 1_000_000));
      const data = "0xa9059cbb" + recipient.slice(2).padStart(64, "0") + amountInMicro.toString(16).padStart(64, "0");
      const txHash = (await window.ethereum!.request({
        method: "eth_sendTransaction",
        params: [{ from: txState.address, to: USDC_ADDRESS, data, gas: "0x186A0" }],
      })) as string;
      setTxState({ status: "success", txHash, explorerUrl: `https://testnet.arcscan.app/tx/${txHash}` });
    } catch (err: unknown) {
      const e = err as { code?: number; message?: string };
      if (e.code === 4001) { setTxState({ status: "connected", address: (txState as { address: string }).address }); }
      else { setTxState({ status: "error", message: e.message || "Transaction failed." }); }
    }
  }, [txState, recipient, amount]);

  const reset = () => { setTxState({ status: "idle" }); setRecipient(""); setAmount(""); setRecipientError(""); };
  const connectedAddress = txState.status === "connected" ? txState.address : null;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.tokenBadge}><USDCIcon/><span>USDC</span></div>
        {connectedAddress && (
          <div className={styles.addressBadge}><span className={styles.dot}/>{shortenAddress(connectedAddress)}</div>
        )}
      </div>
      {txState.status === "idle" && (
        <div className={styles.idleState}>
          <p className={styles.hint}>Connect your wallet to send USDC on Arc Testnet</p>
          <button className={styles.btnPrimary} onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}
      {txState.status === "connecting" && (
        <div className={styles.loadingState}><div className={styles.spinner}/><p>Connecting wallet...</p></div>
      )}
      {txState.status === "connected" && (
        <div className={styles.formState}>
          <div className={styles.field}>
            <label className={styles.label}>Recipient Address</label>
            <input className={`${styles.input} ${recipientError ? styles.inputError : ""}`} type="text" placeholder="0x..." value={recipient} onChange={(e) => { setRecipient(e.target.value); setRecipientError(""); }} spellCheck={false}/>
            {recipientError && <span className={styles.errorMsg}>{recipientError}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Amount (USDC)</label>
            <div className={styles.amountWrap}>
              <input className={styles.input} type="number" placeholder="0.00" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}/>
              <div className={styles.amountSuffix}><USDCIcon/></div>
            </div>
          </div>
          <div className={styles.gasNote}><span className={styles.gasDot}/><span>~$0.009 gas · paid in USDC · Arc Testnet</span></div>
          <button className={styles.btnPrimary} onClick={sendUSDC} disabled={!recipient || !amount || parseFloat(amount) <= 0}>Send USDC</button>
        </div>
      )}
      {txState.status === "sending" && (
        <div className={styles.loadingState}><div className={styles.spinner}/><p>Broadcasting transaction...</p><span className={styles.subtext}>Confirm in MetaMask</span></div>
      )}
      {txState.status === "success" && (
        <div className={styles.successState}>
          <div className={styles.successIcon}>✓</div>
          <p className={styles.successTitle}>Transaction Sent</p>
          <p className={styles.txHash}>{txState.txHash.slice(0,20)}...{txState.txHash.slice(-8)}</p>
          <a href={txState.explorerUrl} target="_blank" rel="noopener noreferrer" className={styles.explorerLink}>View on ArcScan ↗</a>
          <button className={styles.btnSecondary} onClick={reset}>New Transaction</button>
        </div>
      )}
      {txState.status === "error" && (
        <div className={styles.errorState}>
          <p className={styles.errorTitle}>Something went wrong</p>
          <p className={styles.errorMsg}>{txState.message}</p>
          <button className={styles.btnSecondary} onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
