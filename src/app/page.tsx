import PaymentWidget from "@/components/PaymentWidget";
export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#060b18",position:"relative",fontFamily:"'League Spartan',sans-serif",display:"flex",flexDirection:"column"}}>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      <img src="/arc-logo.png" alt="" aria-hidden="true" style={{position:"fixed",top:"-20px",right:"-60px",width:"420px",height:"420px",opacity:0.06,filter:"grayscale(100%) brightness(1.5)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"fixed",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(79,142,255,0.06) 0%,transparent 70%)",top:"-150px",left:"-150px",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"fixed",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,212,170,0.04) 0%,transparent 70%)",bottom:"-100px",right:"200px",pointerEvents:"none",zIndex:0}}/>

      <div style={{position:"relative",zIndex:1,maxWidth:"900px",margin:"0 auto",padding:"48px 32px",width:"100%"}}>

        <div style={{marginBottom:"32px"}}>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"clamp(80px,14vw,130px)",fontWeight:900,letterSpacing:"-4px",color:"#4f8eff",display:"block",lineHeight:0.85}}>ARC</span>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"clamp(80px,14vw,130px)",fontWeight:300,letterSpacing:"-4px",color:"rgba(232,238,255,0.12)",display:"block",lineHeight:0.85}}>USDC</span>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"12px",fontWeight:400,letterSpacing:"0.2em",color:"rgba(232,238,255,0.25)",textTransform:"uppercase" as const,display:"block",marginTop:"16px"}}>Payment Widget · Testnet · Chain 5042002</span>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:"32px",alignItems:"start",marginBottom:"32px"}}>
          <div>
            <div style={{borderRadius:"16px",position:"relative",transform:"rotateX(6deg) rotateY(-8deg)",transformStyle:"preserve-3d" as const,background:"linear-gradient(135deg,#0d1829 0%,#0a1220 40%,#0d1f35 100%)",border:"1px solid rgba(79,142,255,0.2)",boxShadow:"0 30px 60px rgba(0,0,0,0.5),15px 15px 30px rgba(0,0,0,0.3)",padding:"0",height:"180px",marginBottom:"24px",overflow:"hidden"}}>
              <div style={{position:"absolute",top:"24px",left:0,right:0,height:"36px",background:"#111"}}/>
              <div style={{position:"absolute",bottom:"24px",left:"20px",right:"20px"}}>
                <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"7px",letterSpacing:"0.25em",color:"rgba(79,142,255,0.2)",textTransform:"uppercase" as const,display:"block"}}>powered by circle internet group</span>
                <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",color:"rgba(232,238,255,0.1)",textTransform:"uppercase" as const,display:"block",marginTop:"3px"}}>Arc USDC Payment Widget</span>
              </div>
              <div style={{position:"absolute",bottom:"20px",right:"20px",width:"28px",height:"28px",borderRadius:"50%",background:"#2775ca",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#2775CA"/><path d="M10.75 13.8V14.75H9.25V13.82C8.08 13.61 7.17 12.97 7.1 11.82H8.18C8.24 12.43 8.72 12.87 10.01 12.87C11.38 12.87 11.76 12.23 11.76 11.79C11.76 11.18 11.38 10.93 10.06 10.61C8.58 10.25 7.25 9.78 7.25 8.29C7.25 7.08 8.19 6.38 9.25 6.19V5.25H10.75V6.21C11.88 6.44 12.63 7.16 12.68 8.21H11.6C11.55 7.57 11.15 7.13 10.01 7.13C8.95 7.13 8.44 7.64 8.44 8.27C8.44 8.84 8.86 9.07 10.23 9.41C11.6 9.75 12.95 10.19 12.95 11.77C12.95 12.98 12.03 13.61 10.75 13.8Z" fill="white"/></svg>
              </div>
            </div>
            <PaymentWidget/>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"20px",paddingTop:"8px"}}>
            <div style={{borderLeft:"2px solid rgba(79,142,255,0.25)",paddingLeft:"16px"}}>
              <div style={{fontSize:"32px",fontWeight:700,letterSpacing:"-1px",color:"#4f8eff",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>$0.009</div>
              <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.15em",textTransform:"uppercase" as const,marginTop:"5px"}}>gas per transaction</div>
            </div>
            <div style={{borderLeft:"2px solid rgba(0,212,170,0.25)",paddingLeft:"16px"}}>
              <div style={{fontSize:"32px",fontWeight:700,color:"#00d4aa",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>USDC</div>
              <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.15em",textTransform:"uppercase" as const,marginTop:"5px"}}>native gas token</div>
            </div>
            <div style={{borderLeft:"2px solid rgba(255,255,255,0.1)",paddingLeft:"16px"}}>
              <div style={{fontSize:"22px",fontWeight:700,color:"rgba(232,238,255,0.3)",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>5042002</div>
              <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.15em",textTransform:"uppercase" as const,marginTop:"5px"}}>chain id · testnet</div>
            </div>
            <div style={{borderLeft:"2px solid rgba(255,255,255,0.1)",paddingLeft:"16px"}}>
              <div style={{fontSize:"22px",fontWeight:700,color:"rgba(232,238,255,0.3)",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>&lt;1s</div>
              <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"10px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.15em",textTransform:"uppercase" as const,marginTop:"5px"}}>finality</div>
            </div>
          </div>
        </div>

        <div style={{height:"1px",background:"linear-gradient(90deg,transparent,rgba(79,142,255,0.15),transparent)",marginBottom:"20px"}}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.12em",textTransform:"uppercase" as const}}>built by <a href="https://twitter.com/Gr1mmJ4w" target="_blank" rel="noopener noreferrer" style={{color:"#4f8eff",textDecoration:"none"}}>@Gr1mmJ4w</a></span>
          <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"#4f8eff",letterSpacing:"0.05em"}}>arc-usdc-widget.vercel.app</span>
        </div>
      </div>
    </main>
  );
}
