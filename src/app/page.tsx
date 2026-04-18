"use client";
import { useState, useEffect } from "react";
import PaymentWidget from "@/components/PaymentWidget";

const MOCK_TXS = [
  {addr:"0x4f8e...ff2a → 0x742d...c4fb", amount:"1.00", time:"2s ago"},
  {addr:"0x9a2b...e31c → 0x1f4d...a8e2", amount:"50.00", time:"18s ago"},
  {addr:"0x3c7f...b29a → 0x8e5c...d14f", amount:"5.50", time:"1m ago"},
  {addr:"0x7d1a...cc3e → 0x2b9f...e47d", amount:"12.00", time:"2m ago"},
];

export default function Home() {
  const [txs, setTxs] = useState(MOCK_TXS.slice(0,3));
  useEffect(() => {
    const interval = setInterval(() => {
      const newTx = {
        addr: `0x${Math.random().toString(16).slice(2,6)}...${Math.random().toString(16).slice(2,6)} → 0x${Math.random().toString(16).slice(2,6)}...${Math.random().toString(16).slice(2,6)}`,
        amount: (Math.random()*100).toFixed(2),
        time: "just now"
      };
      setTxs(prev => [newTx, ...prev.slice(0,2)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{minHeight:"100vh",background:"#060b18",fontFamily:"'League Spartan',sans-serif",position:"relative",overflow:"hidden"}}>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
        @keyframes slideIn{from{transform:translateX(8px);opacity:0;}to{transform:translateX(0);opacity:1;}}
        .live-dot{animation:pulse 1.5s infinite;}
        .tx-row{animation:slideIn 0.4s ease;}
        .send-btn:hover{opacity:0.88;transform:translateY(-1px);}
        .send-btn{transition:all 0.15s;}
      `}</style>

      <div style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(79,142,255,0.06) 0%,transparent 70%)",top:"-200px",left:"-200px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,212,170,0.04) 0%,transparent 70%)",bottom:"-100px",right:"-100px",pointerEvents:"none"}}/>

      <div style={{maxWidth:"960px",margin:"0 auto",padding:"40px 32px"}}>

        <div style={{marginBottom:"28px"}}>
          <span style={{fontSize:"clamp(72px,11vw,110px)",fontWeight:900,letterSpacing:"-5px",color:"#4f8eff",display:"block",lineHeight:0.85}}>ARC</span>
          <span style={{fontSize:"clamp(72px,11vw,110px)",fontWeight:300,letterSpacing:"-5px",color:"rgba(232,238,255,0.1)",display:"block",lineHeight:0.85}}>USDC</span>
          <span style={{fontSize:"11px",fontWeight:400,letterSpacing:"0.2em",color:"rgba(232,238,255,0.2)",textTransform:"uppercase" as const,marginTop:"14px",display:"block"}}>Payment Widget · Testnet · Chain 5042002</span>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 200px",gap:"24px",alignItems:"start"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>

            <div style={{perspective:"1200px"}}>
              <div style={{height:"185px",borderRadius:"18px",position:"relative",transform:"rotateX(10deg) rotateY(-14deg) rotateZ(1deg)",background:"linear-gradient(135deg,#0d1f3c 0%,#081018 45%,#0a1a2e 100%)",border:"1px solid rgba(79,142,255,0.25)",boxShadow:"0 50px 100px rgba(0,0,0,0.7),24px 24px 48px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.02) inset",overflow:"hidden"}}>
                <div style={{position:"absolute",top:"30px",left:0,right:0,height:"40px",background:"linear-gradient(180deg,#141414 0%,#090909 50%,#141414 100%)"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(110deg,transparent 30%,rgba(255,255,255,0.02) 48%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.02) 52%,transparent 70%)"}}/>
                <div style={{position:"absolute",top:"86px",left:"20px",width:"36px",height:"28px",borderRadius:"5px",background:"linear-gradient(135deg,#c8a84b,#e8c870,#b8981e)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"3px",padding:"5px"}}>
                  <div style={{width:"22px",height:"1.5px",background:"rgba(0,0,0,0.3)",borderRadius:"1px"}}/>
                  <div style={{width:"22px",height:"1.5px",background:"rgba(0,0,0,0.3)",borderRadius:"1px"}}/>
                  <div style={{width:"14px",height:"1.5px",background:"rgba(0,0,0,0.3)",borderRadius:"1px"}}/>
                </div>
                <div style={{position:"absolute",top:"84px",right:"20px",width:"32px",height:"32px",borderRadius:"50%",background:"conic-gradient(#4f8eff,#00d4aa,#ff6b9d,#ffd700,#4f8eff)",opacity:0.55}}/>
                <div style={{position:"absolute",bottom:"50px",left:"20px",right:"90px",height:"20px",background:"repeating-linear-gradient(0deg,#f0f0ea 0px,#f0f0ea 2px,#e5e5df 2px,#e5e5df 4px)",borderRadius:"2px",opacity:0.04}}/>
                <div style={{position:"absolute",bottom:"14px",left:"20px",right:"20px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                  <div>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"7px",letterSpacing:"0.25em",color:"rgba(79,142,255,0.2)",textTransform:"uppercase" as const}}>powered by circle</div>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",fontWeight:600,letterSpacing:"0.08em",color:"rgba(232,238,255,0.1)",textTransform:"uppercase" as const,marginTop:"2px"}}>Arc USDC Widget</div>
                    <div style={{fontFamily:"'Space Mono',monospace",fontSize:"8px",color:"rgba(232,238,255,0.07)",letterSpacing:"0.15em",marginTop:"3px"}}>**** **** **** 5042</div>
                  </div>
                  <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"#2775ca",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#2775CA"/><path d="M10.75 13.8V14.75H9.25V13.82C8.08 13.61 7.17 12.97 7.1 11.82H8.18C8.24 12.43 8.72 12.87 10.01 12.87C11.38 12.87 11.76 12.23 11.76 11.79C11.76 11.18 11.38 10.93 10.06 10.61C8.58 10.25 7.25 9.78 7.25 8.29C7.25 7.08 8.19 6.38 9.25 6.19V5.25H10.75V6.21C11.88 6.44 12.63 7.16 12.68 8.21H11.6C11.55 7.57 11.15 7.13 10.01 7.13C8.95 7.13 8.44 7.64 8.44 8.27C8.44 8.84 8.86 9.07 10.23 9.41C11.6 9.75 12.95 10.19 12.95 11.77C12.95 12.98 12.03 13.61 10.75 13.8Z" fill="white"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <PaymentWidget/>

            <div style={{background:"rgba(10,18,32,0.85)",border:"1px solid rgba(79,142,255,0.12)",borderRadius:"16px",padding:"16px"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"}}>
                <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",fontWeight:600,color:"rgba(232,238,255,0.4)",letterSpacing:"0.1em",textTransform:"uppercase" as const}}>Live TX Feed</span>
                <div style={{display:"flex",alignItems:"center",gap:"5px",fontFamily:"'League Spartan',sans-serif",fontSize:"9px",color:"#00d4aa",letterSpacing:"0.08em"}}>
                  <div className="live-dot" style={{width:"5px",height:"5px",borderRadius:"50%",background:"#00d4aa"}}/>
                  LIVE
                </div>
              </div>
              {txs.map((tx,i) => (
                <div key={i} className="tx-row" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:i<txs.length-1?"1px solid rgba(255,255,255,0.04)":"none"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"26px",height:"26px",borderRadius:"50%",background:"rgba(79,142,255,0.1)",border:"1px solid rgba(79,142,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Space Mono',monospace",fontSize:"8px",color:"#4f8eff",fontWeight:700}}>TX</div>
                    <div>
                      <div style={{fontFamily:"'Space Mono',monospace",fontSize:"9px",color:"rgba(232,238,255,0.35)"}}>{tx.addr}</div>
                      <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"8px",color:"rgba(232,238,255,0.18)",marginTop:"1px"}}>{tx.time} · arcscan.app</div>
                    </div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"12px",fontWeight:600,color:"#00d4aa"}}>+{tx.amount} USDC</div>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"8px",color:"rgba(232,238,255,0.18)"}}>gas: $0.009</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
              <div style={{width:"155px",height:"310px",borderRadius:"30px",background:"#0a0f1a",border:"5px solid #1a2035",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.6),inset 0 0 0 1px rgba(255,255,255,0.05)"}}>
                <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"55px",height:"18px",background:"#0a0f1a",borderRadius:"0 0 12px 12px",zIndex:2}}/>
                <div style={{position:"absolute",inset:"3px",borderRadius:"25px",background:"#060b18",overflow:"hidden"}}>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"10px 10px 4px",fontFamily:"'Space Mono',monospace",fontSize:"7px",color:"rgba(232,238,255,0.25)"}}>
                    <span>9:41</span><span>● ●</span>
                  </div>
                  <div style={{padding:"4px 10px 6px",borderBottom:"1px solid rgba(79,142,255,0.1)"}}>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",fontWeight:700,color:"#4f8eff"}}>ARC PAY</div>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"7px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.08em",textTransform:"uppercase" as const}}>Testnet · USDC</div>
                  </div>
                  <div style={{margin:"8px",height:"64px",borderRadius:"10px",background:"linear-gradient(135deg,#0d1f3c,#081018)",border:"1px solid rgba(79,142,255,0.2)",position:"relative",overflow:"hidden"}}>
                    <div style={{position:"absolute",top:"14px",left:0,right:0,height:"15px",background:"#0a0a0a"}}/>
                    <div style={{position:"absolute",bottom:"7px",left:"8px",fontFamily:"'League Spartan',sans-serif",fontSize:"6px",fontWeight:600,letterSpacing:"0.08em",color:"rgba(232,238,255,0.12)",textTransform:"uppercase" as const}}>Arc USDC Widget</div>
                    <div style={{position:"absolute",bottom:"5px",right:"8px",width:"15px",height:"15px",borderRadius:"50%",background:"#2775ca",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'League Spartan',sans-serif",fontSize:"8px",color:"white",fontWeight:700}}>$</div>
                  </div>
                  <div style={{margin:"0 8px 6px",background:"rgba(79,142,255,0.06)",border:"1px solid rgba(79,142,255,0.1)",borderRadius:"8px",padding:"6px 8px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"7px",color:"rgba(232,238,255,0.25)",textTransform:"uppercase" as const,letterSpacing:"0.1em"}}>Balance</div>
                      <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"13px",fontWeight:700,color:"#00d4aa"}}>42.50</div>
                    </div>
                    <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"7px",color:"rgba(0,212,170,0.4)",letterSpacing:"0.05em"}}>USDC</div>
                  </div>
                  <div style={{margin:"0 8px 6px",background:"#4f8eff",borderRadius:"8px",padding:"7px",textAlign:"center",fontFamily:"'League Spartan',sans-serif",fontSize:"9px",fontWeight:700,color:"#fff",letterSpacing:"0.05em"}}>SEND USDC</div>
                  <div style={{margin:"0 8px",display:"flex",flexDirection:"column",gap:"3px"}}>
                    {txs.slice(0,3).map((tx,i) => (
                      <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,255,255,0.02)",borderRadius:"5px",padding:"4px 6px"}}>
                        <div style={{fontFamily:"'Space Mono',monospace",fontSize:"6px",color:"rgba(232,238,255,0.25)"}}>{tx.addr.split("→")[1]?.trim() || "0x..."}</div>
                        <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"8px",fontWeight:600,color:"#00d4aa"}}>+{tx.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              {[{val:"$0.009",label:"gas per tx",color:"#4f8eff"},{val:"USDC",label:"native gas",color:"#00d4aa"},{val:"<1s",label:"finality",color:"rgba(232,238,255,0.3)"},{val:"EVM",label:"compatible",color:"rgba(232,238,255,0.3)"}].map((s,i) => (
                <div key={i} style={{borderLeft:"2px solid rgba(79,142,255,0.2)",paddingLeft:"12px"}}>
                  <div style={{fontSize:"22px",fontWeight:700,letterSpacing:"-1px",color:s.color,lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>{s.val}</div>
                  <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"9px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.12em",textTransform:"uppercase" as const,marginTop:"3px"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{height:"1px",background:"linear-gradient(90deg,transparent,rgba(79,142,255,0.12),transparent)",margin:"20px 0"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"rgba(232,238,255,0.18)",letterSpacing:"0.12em",textTransform:"uppercase" as const}}>built by <a href="https://twitter.com/Gr1mmJ4w" target="_blank" rel="noopener noreferrer" style={{color:"#4f8eff",textDecoration:"none"}}>@Gr1mmJ4w</a></span>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"#4f8eff",letterSpacing:"0.05em"}}>arc-usdc-widget.vercel.app</span>
        </div>
      </div>
    </main>
  );
}
