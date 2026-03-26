import { useState } from "react";

const scale = [
  {
    token: "display/balance",
    size: 40, weight: 700, lineHeight: 46, letterSpacing: -1,
    fontNote: "SF Pro — numerals only",
    ios: "largeTitle, SF Pro Display", android: "displaySmall, tabular",
    usage: "IC card balance — the most prominent number in the app",
    example: "¥3,240", isNumeric: true,
  },
  {
    token: "display/large",
    size: 34, weight: 700, lineHeight: 41, letterSpacing: -0.5,
    fontNote: "Hiragino Sans W7",
    ios: "largeTitle", android: "displaySmall",
    usage: "Hero section titles, onboarding headlines",
    example: "Suicaで、どこへでも。", isNumeric: false,
  },
  {
    token: "display/small",
    size: 28, weight: 700, lineHeight: 36, letterSpacing: -0.3,
    fontNote: "Hiragino Sans W7",
    ios: "title1", android: "headlineLarge",
    usage: "Modal hero text, campaign headers",
    example: "チャージ完了", isNumeric: false,
  },
  {
    token: "heading/large",
    size: 22, weight: 600, lineHeight: 30, letterSpacing: -0.2,
    fontNote: "Hiragino Sans W6",
    ios: "title2", android: "headlineMedium",
    usage: "Page titles, sheet headers",
    example: "利用履歴", isNumeric: false,
  },
  {
    token: "heading/medium",
    size: 18, weight: 600, lineHeight: 26, letterSpacing: -0.1,
    fontNote: "Hiragino Sans W6",
    ios: "title3", android: "headlineSmall",
    usage: "Card titles, section headers",
    example: "定期券情報", isNumeric: false,
  },
  {
    token: "heading/small",
    size: 15, weight: 600, lineHeight: 22, letterSpacing: 0,
    fontNote: "Hiragino Sans W6",
    ios: "headline", android: "titleMedium",
    usage: "List row titles, grouped section headers",
    example: "品川 → 新宿", isNumeric: false,
  },
  {
    token: "body/large",
    size: 17, weight: 400, lineHeight: 28, letterSpacing: 0,
    fontNote: "Hiragino Sans W3",
    ios: "body", android: "bodyLarge",
    usage: "Primary reading text, station descriptions",
    example: "Suicaはご利用の交通機関でチャージできます。",
    isNumeric: false,
  },
  {
    token: "body/medium",
    size: 15, weight: 400, lineHeight: 24, letterSpacing: 0,
    fontNote: "Hiragino Sans W3",
    ios: "subheadline", android: "bodyMedium",
    usage: "Secondary text, list row subtitles",
    example: "2024年3月26日 08:42",
    isNumeric: false,
  },
  {
    token: "body/small",
    size: 13, weight: 400, lineHeight: 20, letterSpacing: 0,
    fontNote: "Hiragino Sans W3",
    ios: "footnote", android: "bodySmall",
    usage: "Supporting info, timestamps, station codes",
    example: "有効期限：2026年3月31日",
    isNumeric: false,
  },
  {
    token: "label/large",
    size: 15, weight: 500, lineHeight: 20, letterSpacing: 0,
    fontNote: "Hiragino Sans W5",
    ios: "subheadline W5", android: "labelLarge",
    usage: "Button text, tab bar labels, primary actions",
    example: "チャージする", isNumeric: false,
  },
  {
    token: "label/medium",
    size: 13, weight: 500, lineHeight: 18, letterSpacing: 0.1,
    fontNote: "Hiragino Sans W5",
    ios: "footnote W5", android: "labelMedium",
    usage: "Badges, status chips, tags",
    example: "定期券", isNumeric: false,
  },
  {
    token: "label/small",
    size: 11, weight: 500, lineHeight: 14, letterSpacing: 0.3,
    fontNote: "Hiragino Sans W5",
    ios: "caption1 W5", android: "labelSmall",
    usage: "Overlines, category labels, step indicators",
    example: "残高", isNumeric: false,
  },
  {
    token: "caption/default",
    size: 11, weight: 400, lineHeight: 14, letterSpacing: 0,
    fontNote: "Hiragino Sans W3",
    ios: "caption1", android: "bodySmall",
    usage: "Fine print, legal text, image captions",
    example: "※ご利用には条件があります", isNumeric: false,
  },
  {
    token: "numeric/fare",
    size: 22, weight: 700, lineHeight: 28, letterSpacing: -0.2,
    fontNote: "SF Pro Display — tabular figures",
    ios: "title2, SF Pro, tabular", android: "headlineMedium, tabular",
    usage: "Fare amounts, transaction prices",
    example: "¥198", isNumeric: true,
  },
  {
    token: "numeric/medium",
    size: 17, weight: 600, lineHeight: 22, letterSpacing: 0,
    fontNote: "SF Pro Text — tabular figures",
    ios: "body W6, SF Pro, tabular", android: "bodyLarge W600, tabular",
    usage: "Inline amounts, point values in lists",
    example: "¥1,080 → ¥882", isNumeric: true,
  },
  {
    token: "numeric/small",
    size: 13, weight: 500, lineHeight: 18, letterSpacing: 0,
    fontNote: "SF Pro Text — tabular figures",
    ios: "footnote W5, SF Pro, tabular", android: "bodySmall W500, tabular",
    usage: "Small amounts, timestamps with seconds",
    example: "08:42:33", isNumeric: true,
  },
];

const fontStack = {
  jp: `"Hiragino Sans", "ヒラギノ角ゴシック", "Noto Sans JP", sans-serif`,
  num: `"SF Pro Display", "SF Pro Text", -apple-system, system-ui, sans-serif`,
};

export default function App() {
  const [tab, setTab] = useState("preview");

  const tabBtn = (t) => ({
    padding: "6px 16px", borderRadius: 6, fontSize: 13, fontWeight: 500,
    cursor: "pointer", border: "0.5px solid",
    borderColor: tab===t ? "#00833E" : "#e0e0e0",
    background: tab===t ? "#00833E" : "transparent",
    color: tab===t ? "#fff" : "#555",
  });

  const groups = [
    { label: "Display", items: scale.filter(s => s.token.startsWith("display")) },
    { label: "Heading", items: scale.filter(s => s.token.startsWith("heading")) },
    { label: "Body", items: scale.filter(s => s.token.startsWith("body")) },
    { label: "Label", items: scale.filter(s => s.token.startsWith("label")) },
    { label: "Caption", items: scale.filter(s => s.token.startsWith("caption")) },
    {
      label: "Numeric",
      items: scale.filter(s => s.token.startsWith("numeric")),
      note: "SF Pro only — applied to numerals and currency symbols. Mix with Hiragino for mixed JP/number strings by wrapping digits in a separate span with the numeric font stack."
    },
  ];

  return (
    <div style={{fontFamily: fontStack.jp, padding:"1.5rem 1rem", maxWidth:760, margin:"0 auto"}}>

      <div style={{marginBottom:"1.25rem"}}>
        <div style={{fontSize:18, fontWeight:600, color:"#1a1a1a"}}>Suica — text styles</div>
        <div style={{fontSize:12, color:"#888", marginTop:3}}>
          16 tokens · Hiragino Sans (JP) · SF Pro (numerals) · cross-platform mapped
        </div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:"1.5rem"}}>
        <div style={{background:"#f5f4f1", borderRadius:8, padding:"10px 14px", fontSize:12}}>
          <div style={{fontWeight:600, color:"#1a1a1a", marginBottom:3}}>Japanese text</div>
          <div style={{fontFamily:"monospace", fontSize:10, color:"#666"}}>Hiragino Sans W3/W5/W6/W7</div>
          <div style={{color:"#777", marginTop:4}}>All kana, kanji, and mixed JP/Latin body text</div>
        </div>
        <div style={{background:"#f5f4f1", borderRadius:8, padding:"10px 14px", fontSize:12}}>
          <div style={{fontWeight:600, color:"#1a1a1a", marginBottom:3}}>Numerals & currency</div>
          <div style={{fontFamily:"monospace", fontSize:10, color:"#666"}}>SF Pro Display / Text, tabular</div>
          <div style={{color:"#777", marginTop:4}}>All digits, ¥ symbol, time, fares, balances</div>
        </div>
      </div>

      <div style={{display:"flex", gap:8, marginBottom:"1.5rem"}}>
        {["preview","tokens","platform"].map(t =>
          <button key={t} style={tabBtn(t)} onClick={()=>setTab(t)}>{t}</button>
        )}
      </div>

      {tab === "preview" && (
        <div>
          {groups.map(g => (
            <div key={g.label} style={{marginBottom:"2rem"}}>
              <div style={{fontSize:11, fontWeight:500, color:"#aaa", letterSpacing:".06em", textTransform:"uppercase", marginBottom:10, paddingBottom:6, borderBottom:"0.5px solid #eee"}}>{g.label}</div>
              {g.note && (
                <div style={{fontSize:11, color:"#7a5010", background:"#fef9e7", border:"0.5px solid #f0d870", borderRadius:6, padding:"7px 10px", marginBottom:12, lineHeight:1.6}}>{g.note}</div>
              )}
              {g.items.map(s => (
                <div key={s.token} style={{display:"flex", alignItems:"flex-start", gap:20, marginBottom:20, flexWrap:"wrap"}}>
                  <div style={{minWidth:200, maxWidth:320}}>
                    <div style={{
                      fontFamily: s.isNumeric ? fontStack.num : fontStack.jp,
                      fontSize: s.size,
                      fontWeight: s.weight,
                      lineHeight: s.lineHeight/s.size,
                      letterSpacing: s.letterSpacing,
                      color: "#1F1E1B",
                      fontVariantNumeric: s.isNumeric ? "tabular-nums" : "normal",
                    }}>{s.example}</div>
                  </div>
                  <div style={{paddingTop:4}}>
                    <div style={{fontSize:11, fontFamily:"monospace", color:"#00833E", fontWeight:600}}>{s.token}</div>
                    <div style={{fontSize:10, color:"#bbb", marginTop:2}}>{s.size}px · W{s.weight} · lh {s.lineHeight}px</div>
                    <div style={{fontSize:10, color:"#aaa", marginTop:1}}>{s.fontNote}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === "tokens" && (
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%", borderCollapse:"collapse", fontSize:11}}>
            <thead>
              <tr style={{borderBottom:"0.5px solid #e0e0e0"}}>
                {["Token","Font","Size","Weight","Line ht","Tracking","Usage"].map(h => (
                  <th key={h} style={{textAlign:"left", padding:"6px 8px", color:"#888", fontWeight:500, whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scale.map((s,i) => (
                <tr key={s.token} style={{borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa"}}>
                  <td style={{padding:"7px 8px", fontFamily:"monospace", color:"#00833E", fontWeight:600, whiteSpace:"nowrap", fontSize:11}}>{s.token}</td>
                  <td style={{padding:"7px 8px", color:"#555", fontSize:10, whiteSpace:"nowrap"}}>{s.isNumeric ? "SF Pro" : "Hiragino"}</td>
                  <td style={{padding:"7px 8px", color:"#1a1a1a"}}>{s.size}px</td>
                  <td style={{padding:"7px 8px", color:"#1a1a1a"}}>W{s.weight}</td>
                  <td style={{padding:"7px 8px", color:"#1a1a1a"}}>{s.lineHeight}px</td>
                  <td style={{padding:"7px 8px", color:"#1a1a1a"}}>{s.letterSpacing === 0 ? "—" : `${s.letterSpacing}px`}</td>
                  <td style={{padding:"7px 8px", color:"#555", fontSize:10}}>{s.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "platform" && (
        <div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:"1.5rem"}}>
            <div style={{background:"#f0f9f4", border:"0.5px solid #a8dbbe", borderRadius:8, padding:"12px 14px", fontSize:12, lineHeight:1.7}}>
              <div style={{fontWeight:600, color:"#1a1a1a", marginBottom:6}}>iOS implementation</div>
              <div style={{color:"#444"}}>Use <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>UIFont(name: "HiraginoSans-W3", size:)</code> for body. For numerals, apply <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>.monospacedDigitSystemFont</code> or SF Pro explicitly. Always set <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>adjustsFontForContentSizeCategory = true</code>.</div>
            </div>
            <div style={{background:"#f0f9f4", border:"0.5px solid #a8dbbe", borderRadius:8, padding:"12px 14px", fontSize:12, lineHeight:1.7}}>
              <div style={{fontWeight:600, color:"#1a1a1a", marginBottom:6}}>Android implementation</div>
              <div style={{color:"#444"}}>Use <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>Noto Sans JP</code> as the Hiragino equivalent (closest match on Android). For numerals use <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>Roboto</code> with <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>fontFeatureSettings = "tnum"</code>. Always use <code style={{fontSize:10, background:"#e6f4ed", padding:"1px 4px", borderRadius:3}}>sp</code> units.</div>
            </div>
          </div>

          <div style={{background:"#fef9e7", border:"0.5px solid #f0d870", borderRadius:8, padding:"10px 14px", marginBottom:"1.5rem", fontSize:12, color:"#7a5010", lineHeight:1.6}}>
            <span style={{fontWeight:600}}>Mixed font rendering — the key pattern:</span> For strings like "残高 ¥3,240" wrap the numeral portion in a separate text element with the SF Pro / Roboto stack. In SwiftUI use <code style={{fontSize:10}}>Text("残高 ") + Text("¥3,240").font(.custom("SFProDisplay-Bold", size: 22))</code>. Never apply SF Pro to the whole string — Hiragino kanji rendered in SF Pro falls back incorrectly.
          </div>

          <table style={{width:"100%", borderCollapse:"collapse", fontSize:11}}>
            <thead>
              <tr style={{borderBottom:"0.5px solid #e0e0e0"}}>
                {["Token","iOS","Android"].map(h => (
                  <th key={h} style={{textAlign:"left", padding:"6px 8px", color:"#888", fontWeight:500}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scale.map((s,i) => (
                <tr key={s.token} style={{borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa"}}>
                  <td style={{padding:"7px 8px", fontFamily:"monospace", color:"#00833E", fontWeight:600, whiteSpace:"nowrap"}}>{s.token}</td>
                  <td style={{padding:"7px 8px", color:"#444", fontFamily:"monospace", fontSize:10}}>{s.ios}</td>
                  <td style={{padding:"7px 8px", color:"#444", fontFamily:"monospace", fontSize:10}}>{s.android}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
