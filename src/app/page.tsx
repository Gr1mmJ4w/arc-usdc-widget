import PaymentWidget from "@/components/PaymentWidget";
export default function Home() {
  return (
    <main style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1rem",gap:"2rem"}}>
      <header style={{textAlign:"center"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(79,142,255,0.08)",border:"1px solid rgba(79,142,255,0.2)",borderRadius:"100px",padding:"6px 14px",marginBottom:"20px"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#00d4aa",boxShadow:"0 0 8px #00d4aa",display:"inline-block"}}/>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"rgba(232,238,255,0.6)",letterSpacing:"0.08em",textTransform:"uppercase"}}>Arc Testnet · Chain ID 5042002</span>
        </div>
        <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:300,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:"10px"}}>
          USDC Payment<span style={{fontWeight:600,color:"var(--arc-blue)"}}> Widget</span>
        </h1>
        <p style={{color:"var(--arc-text-secondary)",fontSize:"15px",fontWeight:300}}>Send USDC on Arc — gas paid in USDC, ~$0.009 per tx</p>
      </header>
      <PaymentWidget/>
      <footer style={{textAlign:"center",color:"var(--arc-text-dim)",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:"0.05em"}}>
        built by <a href="https://twitter.com/Gr1mmJ4w" target="_blank" rel="noopener noreferrer" style={{color:"var(--arc-blue)",textDecoration:"none"}}>@Gr1mmJ4w</a> · powered by <a href="https://arc.network" target="_blank" rel="noopener noreferrer" style={{color:"var(--arc-blue)",textDecoration:"none"}}>Arc Network</a>
      </footer>
    </main>
  );
}
