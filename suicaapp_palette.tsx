import { useState } from "react";

const steps =    [950, 900, 700, 500, 400, 300, 200, 100, 50, 25];
const neutSteps = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 25];

const primitives = [
  { name: "Brand green", family: "brand-green", steps: steps, stops: {
    950:"#001A0D", 900:"#002E16", 700:"#005C2B", 500:"#00833E",
    400:"#34A86A", 300:"#7DCBA0", 200:"#B8E5CE", 100:"#D9F0E5", 50:"#E6F4ED", 25:"#F3FAF6"
  }},
  { name: "Red", family: "red", steps: steps, stops: {
    950:"#4A0A0A", 900:"#7B1111", 700:"#A62628", 500:"#D93134",
    400:"#E15B5D", 300:"#EE9092", 200:"#F5BFC0", 100:"#F9DADA", 50:"#FBEAE8", 25:"#FDF4F4"
  }},
  { name: "Orange", family: "orange", steps: steps, stops: {
    950:"#3D1200", 900:"#6B2100", 700:"#A33A05", 500:"#D34D07",
    400:"#F17A25", 300:"#F9AA72", 200:"#FCC9A8", 100:"#FDE3D1", 50:"#FEF2EA", 25:"#FFF8F5"
  }},
  { name: "Yellow", family: "yellow", steps: steps, stops: {
    950:"#2E1F00", 900:"#503800", 700:"#9A7505", 500:"#D8A807",
    400:"#F1C328", 300:"#F7DA7A", 200:"#FAEAB6", 100:"#FCF3D5", 50:"#FEFACE", 25:"#FFFDF5"
  }},
  { name: "Green", family: "green", steps: steps, stops: {
    950:"#0D2206", 900:"#1A3D0A", 700:"#3A7018", 500:"#5AA82D",
    400:"#7CCB4F", 300:"#AADД82", 200:"#CCEAB0", 100:"#E2F5D2", 50:"#F2FAED", 25:"#F8FDF5"
  }},
  { name: "Emerald", family: "emerald", steps: steps, stops: {
    950:"#062420", 900:"#0D3D38", 700:"#0F6B5E", 500:"#29A093",
    400:"#60CCC1", 300:"#96DDD8", 200:"#C0ECEB", 100:"#DDF5F3", 50:"#EFFAF9", 25:"#F6FDFC"
  }},
  { name: "Blue", family: "blue", steps: steps, stops: {
    950:"#041836", 900:"#082D62", 700:"#1250A8", 500:"#1B60D6",
    400:"#4D88F0", 300:"#8DB3F5", 200:"#BCCFFA", 100:"#DAE8FC", 50:"#ECF3FF", 25:"#F5F8FF"
  }},
  { name: "Purple", family: "purple", steps: steps, stops: {
    950:"#1A0840", 900:"#2E1270", 700:"#5B0EAD", 500:"#7B35E0",
    400:"#9B6CF3", 300:"#BFA0F7", 200:"#D8C8FB", 100:"#EBE2FD", 50:"#F2EDFE", 25:"#F8F5FF"
  }},
  { name: "Pink", family: "pink", steps: steps, stops: {
    950:"#2E0420", 900:"#560A3C", 700:"#8C0E60", 500:"#BA1380",
    400:"#D855A8", 300:"#E896CC", 200:"#F2BFE2", 100:"#F8DCF1", 50:"#FCF1F8", 25:"#FEF7FC"
  }},
  { name: "Neutral", family: "neutral", steps: neutSteps, stops: {
    950:"#121210", 900:"#1F1E1B", 800:"#2E2D29", 700:"#454440",
    600:"#5E5D58", 500:"#797872", 400:"#9B9A94", 300:"#C0BEB8",
    200:"#D8D7D2", 100:"#EBEAE6", 50:"#F5F4F1", 25:"#FAFAF8"
  }},
];

const semanticGroups = [
  { group: "Brand", tokens: [
    { token: "brand/default",    hex: "#00833E", source: "Brand green/500", usage: "Primary CTAs, active nav, links" },
    { token: "brand/strong",     hex: "#005C2B", source: "Brand green/700", usage: "Pressed state, hover on dark bg" },
    { token: "brand/subtle",     hex: "#E6F4ED", source: "Brand green/50",  usage: "Selected bg, tinted surfaces" },
    { token: "brand/on-default", hex: "#FFFFFF", source: "White",           usage: "Text/icon on brand/default" },
  ]},
  { group: "Neutral — text", tokens: [
    { token: "text/primary",   hex: "#1F1E1B", source: "Neutral/900", usage: "Headings, body text" },
    { token: "text/secondary", hex: "#5E5D58", source: "Neutral/600", usage: "Labels, captions" },
    { token: "text/tertiary",  hex: "#9B9A94", source: "Neutral/400", usage: "Placeholders, hints" },
    { token: "text/disabled",  hex: "#C0BEB8", source: "Neutral/300", usage: "Disabled text" },
    { token: "text/inverse",   hex: "#FAFAF8", source: "Neutral/25",  usage: "Text on dark surfaces" },
  ]},
  { group: "Neutral — surface", tokens: [
    { token: "surface/page",    hex: "#F5F4F1", source: "Neutral/50",  usage: "App/page background" },
    { token: "surface/default", hex: "#FFFFFF", source: "White",       usage: "Card, sheet, modal bg" },
    { token: "surface/raised",  hex: "#EBEAE6", source: "Neutral/100", usage: "Elevated surface, grouped bg" },
    { token: "border/default",  hex: "#D8D7D2", source: "Neutral/200", usage: "Dividers, input borders" },
    { token: "border/strong",   hex: "#C0BEB8", source: "Neutral/300", usage: "Focused input border" },
  ]},
  { group: "Danger", tokens: [
    { token: "danger/default", hex: "#A62628", source: "Red/700",  usage: "Destructive actions, error icons" },
    { token: "danger/subtle",  hex: "#FBEAE8", source: "Red/50",   usage: "Error banner bg" },
    { token: "danger/text",    hex: "#7B1111", source: "Red/900",  usage: "Error text on light bg" },
  ]},
  { group: "Warning", tokens: [
    { token: "warning/default", hex: "#9A7505", source: "Yellow/700", usage: "Warning icons, alert borders" },
    { token: "warning/subtle",  hex: "#FEFACE", source: "Yellow/50",  usage: "Warning banner bg" },
    { token: "warning/text",    hex: "#503800", source: "Yellow/900", usage: "Warning text on light bg" },
  ]},
  { group: "Success", tokens: [
    { token: "success/default", hex: "#3A7018", source: "Green/700", usage: "Success icons, confirmed states" },
    { token: "success/subtle",  hex: "#F2FAED", source: "Green/50",  usage: "Success banner bg" },
    { token: "success/text",    hex: "#1A3D0A", source: "Green/900", usage: "Success text on light bg" },
  ]},
  { group: "Info", tokens: [
    { token: "info/default", hex: "#1250A8", source: "Blue/700", usage: "Info icons, tooltip borders" },
    { token: "info/subtle",  hex: "#ECF3FF", source: "Blue/50",  usage: "Info banner bg" },
    { token: "info/text",    hex: "#082D62", source: "Blue/900", usage: "Info text on light bg" },
  ]},
  { group: "Interactive states", tokens: [
    { token: "state/focus",    hex: "#00833E", source: "Brand green/500", usage: "3px focus ring on all controls" },
    { token: "state/disabled-fill",   hex: "#EBEAE6", source: "Neutral/100", usage: "Disabled control background" },
    { token: "state/disabled-text",   hex: "#C0BEB8", source: "Neutral/300", usage: "Disabled control text" },
  ]},
];

function lum(hex) {
  let r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
  return .2126*[r,g,b].map(c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))[0]
       + .7152*[r,g,b].map(c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))[1]
       + .0722*[r,g,b].map(c=>c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))[2];
}
function cr(h1,h2="#ffffff"){const l1=lum(h1),l2=lum(h2);return(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);}
function textOn(hex){return cr("#ffffff",hex)>=cr("#1F1E1B",hex)?"#ffffff":"#1F1E1B";}

function Badge({hex,bg="#ffffff"}){
  const r=cr(hex,bg),pass=r>=4.5,large=r>=3&&r<4.5;
  return <span style={{fontSize:9,fontWeight:500,padding:"1px 5px",borderRadius:3,whiteSpace:"nowrap",
    background:pass?"#dcfce7":large?"#fef3c7":"#fde8e8",
    color:pass?"#166534":large?"#854d0e":"#991f1f"}}>{r.toFixed(1)}:1</span>;
}

export default function App() {
  const [tab, setTab] = useState("primitive");
  const [copied, setCopied] = useState(null);

  function copy(hex){ navigator.clipboard?.writeText(hex); setCopied(hex); setTimeout(()=>setCopied(null),900); }

  const tabBtn = (t) => ({
    padding:"6px 18px", borderRadius:6, fontSize:13, fontWeight:500, cursor:"pointer", border:"0.5px solid",
    borderColor: tab===t?"#00833E":"#e0e0e0",
    background: tab===t?"#00833E":"transparent",
    color: tab===t?"#fff":"#555",
  });

  return (
    <div style={{fontFamily:"system-ui,sans-serif",padding:"1.5rem 1rem",maxWidth:760,margin:"0 auto"}}>
      <div style={{marginBottom:"1.25rem"}}>
        <div style={{fontSize:18,fontWeight:500,color:"#1a1a1a"}}>JRE POINT color tokens</div>
        <div style={{fontSize:12,color:"#888",marginTop:3}}>10-step primitives · semantic UI layer · cross-platform ready</div>
      </div>
      <div style={{display:"flex",gap:8,marginBottom:"1.5rem"}}>
        <button style={tabBtn("primitive")} onClick={()=>setTab("primitive")}>Primitive</button>
        <button style={tabBtn("semantic")} onClick={()=>setTab("semantic")}>Semantic</button>
      </div>

      {tab==="primitive" && (
        <div>
          <div style={{fontSize:12,color:"#888",marginBottom:12,lineHeight:1.6}}>
            10 color families. 9 hues × 10 steps + Neutral × 12 steps = 102 total primitive tokens. Reference these only through semantic tokens in components.
          </div>
          <div style={{background:"#f0f9f4",border:"0.5px solid #a8dbbe",borderRadius:8,padding:"10px 14px",marginBottom:"1.5rem",fontSize:12,color:"#1a5c34",lineHeight:1.6}}>
            <span style={{fontWeight:500}}>Step logic:</span> Dark end (950–700) for text & pressed states. Midpoint (500) is the default/primary stop. Light end (300–25) for backgrounds, fills, disabled. Neutral has 12 steps — extra resolution at both ends for text hierarchy and surface layering.
          </div>
          {primitives.map(fam=>(
            <div key={fam.name} style={{marginBottom:"1.5rem"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                <span style={{fontSize:13,fontWeight:500,color:"#1a1a1a"}}>{fam.name}</span>
                <span style={{fontSize:10,color:"#aaa"}}>{fam.steps.length} steps</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${fam.steps.length},1fr)`,gap:3}}>
                {fam.steps.map(s=>{
                  const hex=fam.stops[s];
                  const fg=textOn(hex);
                  const isMid=s===500;
                  return (
                    <div key={s} onClick={()=>copy(hex)} style={{cursor:"pointer",borderRadius:5,overflow:"hidden",border: isMid?"1.5px solid #00833E":"0.5px solid rgba(0,0,0,0.07)"}}>
                      <div style={{background:hex,height:36,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span style={{fontSize:9,fontWeight:500,color:fg,opacity:.85}}>{copied===hex?"✓":s}</span>
                      </div>
                      <div style={{background:"#fff",padding:"2px 3px",textAlign:"center"}}>
                        <div style={{fontSize:8,fontFamily:"monospace",color:"#aaa",marginBottom:1}}>{hex}</div>
                        <Badge hex={hex}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab==="semantic" && (
        <div>
          <div style={{fontSize:12,color:"#888",marginBottom:"1.5rem",lineHeight:1.6}}>
            32 semantic tokens. Components reference only these — never a primitive directly. Maps to iOS <code style={{fontSize:11}}>UIColor</code> semantic roles and Android Material color scheme.
          </div>
          {semanticGroups.map(g=>(
            <div key={g.group} style={{marginBottom:"1.75rem"}}>
              <div style={{fontSize:12,fontWeight:500,color:"#1a1a1a",marginBottom:6,paddingBottom:4,borderBottom:"0.5px solid #eee"}}>{g.group}</div>
              <div style={{display:"flex",flexDirection:"column",gap:5}}>
                {g.tokens.map(t=>{
                  const fg=textOn(t.hex);
                  return (
                    <div key={t.token} onClick={()=>copy(t.hex)} style={{cursor:"pointer",display:"grid",gridTemplateColumns:"32px 180px 1fr 60px",gap:10,alignItems:"center",padding:"7px 10px",borderRadius:7,border:"0.5px solid #ebebeb",background:"#fff"}}>
                      <div style={{width:32,height:32,borderRadius:5,background:t.hex,border:"0.5px solid rgba(0,0,0,0.08)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {copied===t.hex&&<span style={{fontSize:12,color:fg}}>✓</span>}
                      </div>
                      <div>
                        <div style={{fontSize:11,fontWeight:500,color:"#1a1a1a",fontFamily:"monospace"}}>{t.token}</div>
                        <div style={{fontSize:10,color:"#bbb",marginTop:1}}>← {t.source}</div>
                      </div>
                      <div style={{fontSize:11,color:"#777",lineHeight:1.5}}>{t.usage}</div>
                      <div style={{textAlign:"right"}}><Badge hex={t.hex}/></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{fontSize:10,color:"#ccc",marginTop:"1rem"}}>Click any swatch to copy hex · green outline = 500 (default) stop</div>
    </div>
  );
}
