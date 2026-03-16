// src/pages/Worksheets.jsx
import { useState } from "react";
import { WORKSHEETS } from "../data/plan";

export default function Worksheets({ progress, toggleWorksheet }) {
  const [activeWs, setActiveWs] = useState(1);
  const { completedWorksheet = {} } = progress || {};
  const ws = WORKSHEETS.find(w => w.id === activeWs) || WORKSHEETS[0];

  const done = ws.items.filter(i => completedWorksheet[`ws${ws.id}_${i.id}`]).length;
  const pct = Math.round((done / ws.items.length) * 100);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>📝 Practice Worksheets</h1>
        <p style={styles.sub}>8 worksheets · 32 problems · 4 patterns. Use alongside LeetCode.</p>
      </div>

      {/* WS tabs — scrollable row */}
      <div style={styles.tabsWrap}>
        <div style={styles.tabs}>
          {WORKSHEETS.map(w => {
            const wdone = w.items.filter(i => completedWorksheet[`ws${w.id}_${i.id}`]).length;
            const wpct = Math.round((wdone / w.items.length) * 100);
            const active = activeWs === w.id;
            return (
              <button
                key={w.id}
                onClick={() => setActiveWs(w.id)}
                style={{
                  ...styles.tab,
                  background: active ? w.color : "#FFF",
                  borderColor: active ? "#2D264040" : "#EDE8FF",
                  fontWeight: active ? 700 : 500,
                }}
              >
                <span style={{ fontSize: "18px" }}>{w.emoji}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "11px", color: "#7B6F96" }}>{w.week}</div>
                  <div style={{ fontSize: "12px", color: "#2D2640", fontWeight: active ? 700 : 500 }}>{w.title}</div>
                </div>
                {wpct === 100
                  ? <span style={styles.doneChip}>✓</span>
                  : <span style={{ ...styles.pctChip }}>{wpct}%</span>
                }
              </button>
            );
          })}
        </div>
      </div>

      {/* Sheet content */}
      <div style={{ ...styles.sheet, borderTop: `5px solid ${ws.color}` }}>
        {/* Sheet header */}
        <div style={{ ...styles.sheetHeader, background: ws.color + "66" }}>
          <span style={{ fontSize: "28px" }}>{ws.emoji}</span>
          <div>
            <div style={styles.sheetWeek}>Worksheet {ws.id} · {ws.week}</div>
            <div style={styles.sheetTitle}>{ws.title}</div>
          </div>
          <div style={styles.sheetProgress}>
            <div style={{ fontWeight: 700, fontSize: "20px", color: "#2D2640" }}>{pct}%</div>
            <div style={{ fontSize: "11px", color: "#7B6F96" }}>{done}/{ws.items.length}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${pct}%`, background: `linear-gradient(90deg, ${ws.color}, ${ws.color}bb)` }} />
        </div>

        {/* Checklist */}
        <div style={styles.checklist}>
          <h3 style={styles.checklistTitle}>✅ Checklist</h3>
          {ws.items.map(item => {
            const checked = !!completedWorksheet[`ws${ws.id}_${item.id}`];
            return (
              <div
                key={item.id}
                style={{ ...styles.checkItem, background: checked ? "#F5F2FF" : "#FFF" }}
                onClick={() => toggleWorksheet && toggleWorksheet(ws.id, item.id)}
              >
                <div style={{ ...styles.checkBox, background: checked ? "#A08FD6" : "#FFF", borderColor: checked ? "#A08FD6" : "#D4C5F9" }}>
                  {checked && <span style={{ color: "white", fontSize: "12px", lineHeight: 1 }}>✓</span>}
                </div>
                <span style={{ fontSize: "14px", color: checked ? "#7B6F96" : "#2D2640", textDecoration: checked ? "line-through" : "none" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Code scratch space */}
        <div style={styles.codeSection}>
          <h3 style={styles.codeTitle}>🖊️ Code Scratch Space</h3>
          <p style={styles.codeSub}>Reference code & templates — solve these from memory first!</p>
          <pre style={styles.codeBlock}>{ws.scratchCode}</pre>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 700, color: "#2D2640" },
  sub: { fontSize: "14px", color: "#7B6F96", marginTop: "4px" },
  tabsWrap: { overflowX: "auto", marginBottom: "1.25rem", paddingBottom: "4px" },
  tabs: { display: "flex", gap: "8px", minWidth: "max-content" },
  tab: { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", border: "1.5px solid", cursor: "pointer", transition: "all 0.2s", fontFamily: "'Sora', sans-serif", minWidth: "140px" },
  doneChip: { marginLeft: "auto", fontSize: "12px", fontWeight: 700, color: "#72C9A0", background: "#C2F0DC", padding: "2px 8px", borderRadius: "999px" },
  pctChip: { marginLeft: "auto", fontSize: "12px", fontWeight: 700, color: "#7B6F96", background: "#F5F2FF", padding: "2px 8px", borderRadius: "999px" },
  sheet: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 24px rgba(120,100,200,0.07)" },
  sheetHeader: { padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" },
  sheetWeek: { fontSize: "11px", fontWeight: 700, color: "#7B6F96", textTransform: "uppercase", letterSpacing: "0.06em" },
  sheetTitle: { fontSize: "20px", fontWeight: 700, color: "#2D2640" },
  sheetProgress: { marginLeft: "auto", textAlign: "center" },
  progressBar: { height: "6px", background: "#EDE8FF" },
  progressFill: { height: "100%", transition: "width 0.5s ease", borderRadius: "0 4px 4px 0" },
  checklist: { padding: "1.5rem" },
  checklistTitle: { fontSize: "15px", fontWeight: 700, color: "#2D2640", marginBottom: "0.875rem" },
  checkItem: { display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "10px", marginBottom: "6px", cursor: "pointer", transition: "all 0.15s", border: "1.5px solid #EDE8FF" },
  checkBox: { width: "22px", height: "22px", borderRadius: "6px", border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" },
  codeSection: { padding: "1.5rem", borderTop: "1.5px solid #EDE8FF", background: "#FAF8FF" },
  codeTitle: { fontSize: "15px", fontWeight: 700, color: "#2D2640", marginBottom: "4px" },
  codeSub: { fontSize: "12px", color: "#7B6F96", marginBottom: "1rem" },
  codeBlock: { background: "#2D2640", color: "#D4C5F9", borderRadius: "14px", padding: "1.25rem", fontSize: "12px", lineHeight: 1.7, overflowX: "auto", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-wrap", wordBreak: "break-word" },
};
