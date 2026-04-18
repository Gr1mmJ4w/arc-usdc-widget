import PaymentWidget from "@/components/PaymentWidget";
export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#060b18",overflow:"hidden",position:"relative",fontFamily:"'League Spartan',sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      <img src="/arc-logo.png" alt="" aria-hidden="true" style={{position:"absolute",top:"-20px",right:"-30px",width:"500px",height:"500px",opacity:0.07,filter:"grayscale(100%) brightness(2)",mixBlendMode:"lighten",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(79,142,255,0.07) 0%,transparent 70%)",top:"-100px",left:"-100px",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,212,170,0.04) 0%,transparent 70%)",bottom:"-80px",right:"-80px",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:1,padding:"48px 40px 0"}}>
        <div style={{lineHeight:1}}>
          <span style={{fontSize:"clamp(72px,12vw,120px)",fontWeight:900,letterSpacing:"-6px",color:"#4f8eff",display:"block",lineHeight:0.9,fontFamily:"'League Spartan',sans-serif"}}>ARC</span>
          <span style={{fontSize:"clamp(72px,12vw,120px)",fontWeight:300,letterSpacing:"-6px",color:"rgba(232,238,255,0.15)",display:"block",lineHeight:0.9,fontFamily:"'League Spartan',sans-serif"}}>USDC</span>
        </div>
        <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"13px",fontWeight:400,letterSpacing:"0.18em",color:"rgba(232,238,255,0.3)",textTransform:"uppercase" as const,marginTop:"20px",display:"block"}}>Payment Widget · Testnet · Chain 5042002</span>
      </div>
      <div style={{position:"relative",zIndex:1,margin:"40px auto 0",width:"340px",height:"210px",perspective:"1000px"}}>
        <div style={{width:"100%",height:"100%",borderRadius:"16px",position:"relative",transform:"rotateX(8deg) rotateY(-12deg) rotateZ(2deg)",background:"linear-gradient(135deg,#0d1829 0%,#0a1220 40%,#0d1f35 100%)",border:"1px solid rgba(79,142,255,0.2)",boxShadow:"0 40px 80px rgba(0,0,0,0.6),20px 20px 40px rgba(0,0,0,0.4)"}}>
          <div style={{position:"absolute",top:"28px",left:0,right:0,height:"40px",background:"linear-gradient(180deg,#1a1a1a 0%,#111 50%,#1a1a1a 100%)"}}/>
          <div style={{position:"absolute",bottom:"72px",left:"24px",right:"80px",height:"28px",background:"repeating-linear-gradient(0deg,#f5f5f0 0px,#f5f5f0 2px,#e8e8e2 2px,#e8e8e2 4px)",borderRadius:"2px",opacity:0.06}}/>
          <div style={{position:"absolute",bottom:"32px",left:"24px",right:"24px"}}>
            <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"8px",fontWeight:400,letterSpacing:"0.25em",color:"rgba(79,142,255,0.25)",textTransform:"uppercase" as const,display:"block",lineHeight:1.8}}>powered by circle internet group</span>
            <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"13px",fontWeight:600,letterSpacing:"0.1em",color:"rgba(232,238,255,0.12)",textTransform:"uppercase" as const,display:"block",marginTop:"4px"}}>Arc USDC Payment Widget</span>
          </div>
          <div style={{position:"absolute",bottom:"28px",right:"24px"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"#2775ca",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#2775CA"/><path d="M10.75 13.8V14.75H9.25V13.82C8.08 13.61 7.17 12.97 7.1 11.82H8.18C8.24 12.43 8.72 12.87 10.01 12.87C11.38 12.87 11.76 12.23 11.76 11.79C11.76 11.18 11.38 10.93 10.06 10.61C8.58 10.25 7.25 9.78 7.25 8.29C7.25 7.08 8.19 6.38 9.25 6.19V5.25H10.75V6.21C11.88 6.44 12.63 7.16 12.68 8.21H11.6C11.55 7.57 11.15 7.13 10.01 7.13C8.95 7.13 8.44 7.64 8.44 8.27C8.44 8.84 8.86 9.07 10.23 9.41C11.6 9.75 12.95 10.19 12.95 11.77C12.95 12.98 12.03 13.61 10.75 13.8Z" fill="white"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:"relative",zIndex:1,padding:"40px 40px 48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",alignItems:"start"}}>
        <PaymentWidget/>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{borderLeft:"2px solid rgba(79,142,255,0.2)",paddingLeft:"14px"}}>
            <div style={{fontSize:"28px",fontWeight:700,letterSpacing:"-1px",color:"#4f8eff",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>$0.009</div>
            <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"rgba(232,238,255,0.25)",letterSpacing:"0.12em",textTransform:"uppercase" as const,marginTop:"4px"}}>gas per transaction</div>
          </div>
          <div style={{borderLeft:"2px solid rgba(79,142,255,0.2)",paddingLeft:"14px"}}>
            <div style={{fontSize:"28px",fontWeight:700,letterSpacing:"-1px",color:"#00d4aa",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>USDC</div>
            <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"rgba(232,238,255,0.25)",letterSpacing:"0.12em",textTransform:"uppercase" as const,marginTop:"4px"}}>native gas token</div>
          </div>
          <div style={{borderLeft:"2px solid rgba(79,142,255,0.2)",paddingLeft:"14px"}}>
            <div style={{fontSize:"20px",fontWeight:700,color:"rgba(232,238,255,0.4)",lineHeight:1,fontFamily:"'League Spartan',sans-serif"}}>5042002</div>
            <div style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"rgba(232,238,255,0.25)",letterSpacing:"0.12em",textTransform:"uppercase" as const,marginTop:"4px"}}>chain id · testnet</div>
          </div>
        </div>
      </div>
      <div style={{height:"1px",background:"linear-gradient(90deg,transparent,rgba(79,142,255,0.15),transparent)",margin:"0 40px",position:"relative",zIndex:1}}/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 40px",position:"relative",zIndex:1}}>
        <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"11px",color:"rgba(232,238,255,0.2)",letterSpacing:"0.15em",textTransform:"uppercase" as const}}>built by <a href="https://twitter.com/Gr1mmJ4w" target="_blank" rel="noopener noreferrer" style={{color:"#4f8eff",textDecoration:"none"}}>@Gr1mmJ4w</a></span>
        <span style={{fontFamily:"'League Spartan',sans-serif",fontSize:"12px",fontWeight:500,color:"#4f8eff",letterSpacing:"0.05em"}}>arc-usdc-widget.vercel.app</span>
      </div>
    </main>
  );
}
