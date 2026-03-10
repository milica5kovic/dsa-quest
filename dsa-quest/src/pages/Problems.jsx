// src/pages/Problems.jsx
import { useState } from "react";
import { WEEKS } from "../data/plan";

const DIFF_COLORS = { Easy: "#C2F0DC", Medium: "#D4C5F9", Hard: "#FFD6E0" };
const DIFF_TEXT = { Easy: "#4A8F72", Medium: "#7060C0", Hard: "#C05080" };

export default function Problems({ progress, toggleProblem }) {
  const [activeWeek, setActiveWeek] = useState(1);
  const { completedProblems = {} } = progress || {};
  const week = WEEKS.find(w => w.id === activeWeek);

  const solved = week.problems.filter(p => completedProblems[`w${week.id}_${p.id}`]).length;
  const pct = Math.round((solved / week.problems.length) * 100);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>💻 LeetCode Problems</h1>
        <p style={styles.sub}>Track your solutions and earn XP. +15 XP per problem.</p>
      </div>

      {/* Week tabs */}
      <div style={styles.tabs}>
        {WEEKS.map(w => {
          const wsolved = w.problems.filter(p => completedProblems[`w${w.id}_${p.id}`]).length;
          const wpct = Math.round((wsolved / w.problems.length) * 100);
          return (
            <button
              key={w.id}
              onClick={() => setActiveWeek(w.id)}
              style={{
                ...styles.tab,
                background: activeWeek === w.id ? w.color : "#FFF",
                borderColor: activeWeek === w.id ? w.colorDark : "#EDE8FF",
                fontWeight: activeWeek === w.id ? 700 : 500,
              }}
            >
              <span>{w.emoji}</span>
              <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
                <span style={{ fontSize: "13px", color: "#2D2640" }}>Week {w.id}</span>
                <span style={{ fontSize: "11px", color: "#7B6F96" }}>{w.title}</span>
              </span>
              <span style={{ marginLeft: "auto", fontSize: "12px", fontWeight: 700, color: w.colorDark }}>{wpct}%</span>
            </button>
          );
        })}
      </div>

      {/* Week header */}
      <div style={{ ...styles.weekBanner, background: week.color }}>
        <div>
          <div style={styles.weekLabel}>Week {week.id} · {week.title}</div>
          <div style={styles.weekTheme}>{week.theme}</div>
          <div style={styles.weekPatterns}>
            {week.keyPatterns.map(p => (
              <span key={p} style={styles.patternChip}>{p}</span>
            ))}
          </div>
        </div>
        <div style={styles.weekProgress}>
          <div style={styles.progressCircle}>
            <svg width="70" height="70" viewBox="0 0 70 70">
              <circle cx="35" cy="35" r="28" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
              <circle
                cx="35" cy="35" r="28" fill="none"
                stroke="white" strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - pct / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 35 35)"
                style={{ transition: "stroke-dashoffset 0.6s ease" }}
              />
            </svg>
            <div style={styles.circleText}>{pct}%</div>
          </div>
          <div style={{ textAlign: "center", color: "#2D2640" }}>
            <div style={{ fontWeight: 700, fontSize: "16px" }}>{solved}/{week.problems.length}</div>
            <div style={{ fontSize: "11px", opacity: 0.7 }}>solved</div>
          </div>
        </div>
      </div>

      {/* Portfolio task */}
      <div style={styles.portfolioTask}>
        <span>🗂️</span>
        <div>
          <strong>Portfolio task this week:</strong> {week.portfolioTask}
        </div>
      </div>

      {/* Big-O focus */}
      <div style={styles.bigOCard}>
        <span style={{ fontSize: "16px" }}>📊</span>
        <div>
          <strong>Big-O focus:</strong> {week.bigOFocus}
        </div>
      </div>

      {/* Problem list */}
      <div style={styles.problemList}>
        {week.problems.map(p => {
          const key = `w${week.id}_${p.id}`;
          const done = !!completedProblems[key];
          return (
            <div
              key={p.id}
              style={{ ...styles.problemCard, opacity: done ? 0.7 : 1 }}
              onClick={() => toggleProblem && toggleProblem(week.id, p.id)}
            >
              <div style={{ ...styles.checkbox, background: done ? "#A08FD6" : "#FFF", borderColor: done ? "#A08FD6" : "#EDE8FF" }}>
                {done && <span style={{ color: "white", fontSize: "13px" }}>✓</span>}
              </div>
              <div style={styles.problemInfo}>
                <div style={styles.problemName}>
                  <span style={styles.lcNum}>#{p.lc}</span>
                  <span style={{ textDecoration: done ? "line-through" : "none" }}>{p.name}</span>
                </div>
                <div style={styles.problemMeta}>
                  <span style={{ ...styles.diffBadge, background: DIFF_COLORS[p.diff], color: DIFF_TEXT[p.diff] }}>
                    {p.diff}
                  </span>
                  <span style={styles.metaChip}>⏱ {p.time}</span>
                  <span style={styles.metaChip}>💾 {p.space}</span>
                </div>
                <div style={styles.hint}>💡 {p.hint}</div>
              </div>
              <div style={styles.problemRight}>
                <a
                  href={`https://leetcode.com/problems/${p.id.replace(/-/g, '-')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={styles.lcLink}
                >
                  LC →
                </a>
                {done && <span style={styles.xpBadge}>+15 XP</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 700, color: "#2D2640" },
  sub: { fontSize: "14px", color: "#7B6F96", marginTop: "4px" },
  tabs: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", marginBottom: "1.25rem" },
  tab: { display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "12px", border: "1.5px solid", cursor: "pointer", textAlign: "left", transition: "all 0.2s", fontFamily: "'Sora', sans-serif" },
  weekBanner: { borderRadius: "18px", padding: "1.5rem", marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" },
  weekLabel: { fontWeight: 700, fontSize: "18px", color: "#2D2640", marginBottom: "4px" },
  weekTheme: { fontSize: "13px", color: "#4A3F60", marginBottom: "10px" },
  weekPatterns: { display: "flex", flexWrap: "wrap", gap: "6px" },
  patternChip: { background: "rgba(255,255,255,0.6)", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, color: "#2D2640" },
  weekProgress: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" },
  progressCircle: { position: "relative", width: "70px", height: "70px" },
  circleText: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "15px", color: "#2D2640" },
  portfolioTask: { background: "#FFF3C2", border: "1.5px solid #E8D088", borderRadius: "12px", padding: "0.875rem 1rem", marginBottom: "8px", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#4A3F20" },
  bigOCard: { background: "#E8D5FF", border: "1.5px solid #C8A8FF", borderRadius: "12px", padding: "0.875rem 1rem", marginBottom: "1.5rem", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#3D2A60" },
  problemList: { display: "flex", flexDirection: "column", gap: "8px" },
  problemCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "14px", padding: "1rem", display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", transition: "all 0.15s", boxShadow: "0 2px 12px rgba(120,100,200,0.04)" },
  checkbox: { width: "24px", height: "24px", borderRadius: "7px", border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", transition: "all 0.2s" },
  problemInfo: { flex: 1 },
  problemName: { display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, fontSize: "14px", color: "#2D2640", marginBottom: "6px" },
  lcNum: { fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#A89EC0", background: "#F5F2FF", padding: "2px 6px", borderRadius: "5px" },
  problemMeta: { display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "5px" },
  diffBadge: { padding: "2px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: 700 },
  metaChip: { background: "#F5F2FF", color: "#7B6F96", padding: "2px 8px", borderRadius: "999px", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" },
  hint: { fontSize: "12px", color: "#7B6F96", fontStyle: "italic" },
  problemRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px", flexShrink: 0 },
  lcLink: { fontSize: "12px", fontWeight: 700, color: "#A08FD6", background: "#EDE8FF", padding: "4px 10px", borderRadius: "7px", textDecoration: "none" },
  xpBadge: { fontSize: "11px", fontWeight: 700, color: "#72C9A0", background: "#C2F0DC", padding: "2px 8px", borderRadius: "999px" },
};
