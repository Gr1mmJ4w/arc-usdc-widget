import PaymentWidget from "@/components/PaymentWidget";
export default function Home() {
  return (
    <main style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1rem",gap:"2rem",position:"relative",overflow:"hidden",background:"#060b18"}}>
      <img src="/arc-logo.png" alt="" aria-hidden="true" style={{position:"absolute",top:"-30px",right:"-40px",width:"500px",height:"500px",opacity:0.07,filter:"grayscale(100%) brightness(2)",mixBlendMode:"lighten",pointerEvents:"none",zIndex:0,userSelect:"none"}}/>
      <div style={{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(79,142,255,0.07) 0%,transparent 70%)",top:"-100px",left:"-100px",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,212,170,0.04) 0%,transparent 70%)",bottom:"-80px",right:"-80px",pointerEvents:"none",zIndex:0}}/>
      <header style={{textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(79,142,255,0.08)",border:"1px solid rgba(79,142,255,0.2)",borderRadius:"100px",padding:"6px 14px",marginBottom:"20px"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#00d4aa",boxShadow:"0 0 8px #00d4aa",display:"inline-block"}}/>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"11px",color:"rgba(232,238,255,0.6)",letterSpacing:"0.08em",textTransform:"uppercase" as const}}>Arc Testnet · Chain ID 5042002</span>
        </div>
        <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:300,letterSpacing:"-0.03em",lineHeight:1.1,marginBottom:"10px",color:"#e8eeff"}}>
          USDC Payment<span style={{fontWeight:600,color:"#4f8eff"}}> Widget</span>
        </h1>
        <p style={{color:"rgba(232,238,255,0.5)",fontSize:"15px",fontWeight:300}}>Send USDC on Arc — gas paid in USDC, ~$0.009 per tx</p>
      </header>
      <div style={{position:"relative",zIndex:1,width:"100%",display:"flex",justifyContent:"center"}}>
        <PaymentWidget/>
      </div>
      <footer style={{textAlign:"center",color:"rgba(232,238,255,0.25)",fontFamily:"'Space Mono',monospace",fontSize:"11px",letterSpacing:"0.05em",position:"relative",zIndex:1}}>
        built by <a href="https://twitter.com/Gr1mmJ4w" target="_blank" rel="noopener noreferrer" style={{color:"#4f8eff",textDecoration:"none"}}>@Gr1mmJ4w</a> · powered by <a href="https://arc.network" target="_blank" rel="noopener noreferrer" style={{color:"#4f8eff",textDecoration:"none"}}>Arc Network</a>
      </footer>
    </main>
  );
}
