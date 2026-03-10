// src/pages/Plan.jsx
import { WEEKS, TWENTY_MIN_RULE, FOUR_QUESTIONS } from "../data/plan";

export default function Plan({ progress }) {
  const { completedProblems = {} } = progress || {};

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>📅 Month 1 — Foundation Plan</h1>
        <p style={styles.sub}>DSA Basics + Portfolio Polish · 8–10 hrs/week · 4 Weeks · 30–40 LeetCode Problems</p>
      </div>

      {/* Philosophy banner */}
      <div style={styles.philosophyCard}>
        <h2 style={styles.philoTitle}>🧠 Pattern-First Philosophy</h2>
        <p style={styles.philoText}>
          The #1 mistake beginners make: solving problems without understanding patterns.
          Your goal in Month 1 is not to solve 40 problems — it's to <strong>recognize 6 patterns</strong>.
          Once you see a HashMap problem, immediately think "frequency count or complement lookup."
          Once you see Two Pointers, think "shrink/expand from both ends."
        </p>
        <div style={styles.philoGrid}>
          {[
            { pattern: "HashMap", trigger: "complement lookup, frequency count", color: "#D4C5F9" },
            { pattern: "Two Pointers", trigger: "sorted array, palindrome", color: "#C2F0DC" },
            { pattern: "Sliding Window", trigger: "contiguous subarray, substring", color: "#C2DEFF" },
            { pattern: "Brute → Optimize", trigger: "O(n²) nested loops → HashMap", color: "#FFD6C2" },
          ].map(p => (
            <div key={p.pattern} style={{ ...styles.patternCard, background: p.color }}>
              <div style={styles.patternName}>{p.pattern}</div>
              <div style={styles.patternTrigger}>When you see: {p.trigger}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily breakdown */}
      <div style={styles.dailyCard}>
        <h3 style={styles.dailyTitle}>⏰ Daily Time Breakdown</h3>
        <p style={styles.dailySub}>8–10 hrs/week = ~80–100 min/day, 6 days</p>
        <div style={styles.dailyGrid}>
          {[
            { time: "30 min", task: "1 LeetCode problem (timed)", color: "#FFD6C2" },
            { time: "20 min", task: "Review yesterday's problem from memory", color: "#D4C5F9" },
            { time: "20 min", task: "CTCI reading (2–3 pages)", color: "#C2F0DC" },
            { time: "10 min", task: "Write Big-O for today's problems", color: "#C2DEFF" },
          ].map(d => (
            <div key={d.time} style={{ ...styles.dailyItem, background: d.color }}>
              <div style={styles.dailyTime}>{d.time}</div>
              <div style={styles.dailyTask}>{d.task}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Week cards */}
      <h2 style={styles.sectionTitle}>📆 Week-by-Week Schedule</h2>
      {WEEKS.map(week => {
        const solved = week.problems.filter(p => completedProblems[`w${week.id}_${p.id}`]).length;
        const pct = Math.round((solved / week.problems.length) * 100);
        return (
          <div key={week.id} style={styles.weekCard}>
            <div style={{ ...styles.weekHeader, background: week.color }}>
              <div style={styles.weekHeaderLeft}>
                <span style={{ fontSize: "28px" }}>{week.emoji}</span>
                <div>
                  <div style={styles.weekNum}>Week {week.id} — {week.targetProblems}</div>
                  <div style={styles.weekTitle}>{week.title}</div>
                  <div style={styles.weekTheme}>{week.theme}</div>
                </div>
              </div>
              <div style={styles.weekStat}>
                <div style={{ fontWeight: 700, fontSize: "22px", color: "#2D2640" }}>{pct}%</div>
                <div style={{ fontSize: "11px", color: "#7B6F96" }}>{solved}/{week.problems.length}</div>
              </div>
            </div>
            <div style={styles.weekBody}>
              {/* Key patterns */}
              <div style={styles.bodySection}>
                <div style={styles.bodyLabel}>🔑 Key Patterns</div>
                <div style={styles.chips}>
                  {week.keyPatterns.map(p => (
                    <span key={p} style={{ ...styles.chip, background: week.color }}>{p}</span>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div style={styles.bodySection}>
                <div style={styles.bodyLabel}>🗂️ Portfolio Task</div>
                <div style={styles.bodyText}>{week.portfolioTask}</div>
              </div>

              {/* Big-O */}
              <div style={styles.bodySection}>
                <div style={styles.bodyLabel}>📊 Big-O Focus</div>
                <div style={styles.bodyText}>{week.bigOFocus}</div>
              </div>

              {/* Problem list compact */}
              <div style={styles.bodySection}>
                <div style={styles.bodyLabel}>💻 Problems ({week.problems.length})</div>
                <div style={styles.compactProblems}>
                  {week.problems.map(p => {
                    const done = !!completedProblems[`w${week.id}_${p.id}`];
                    return (
                      <a
                        key={p.id}
                        href={`https://leetcode.com/problems/${p.id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.compactProblem, background: done ? week.color : "#F5F2FF", textDecoration: "none" }}
                      >
                        <span style={{ fontSize: "12px" }}>{done ? "✅" : "○"}</span>
                        <span style={{ fontWeight: 500, fontSize: "13px", color: "#2D2640" }}>#{p.lc} {p.name}</span>
                        <span style={{ fontSize: "11px", color: "#7B6F96", marginLeft: "auto" }}>{p.diff}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Progress bar */}
              <div style={styles.weekProgressBar}>
                <div style={{ ...styles.weekProgressFill, width: `${pct}%`, background: week.colorDark }} />
              </div>
            </div>
          </div>
        );
      })}

      {/* 20 min rule reference */}
      <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>⏱️ The 20-Minute Rule (Reference)</h2>
      <div style={styles.ruleTable}>
        {TWENTY_MIN_RULE.map((r, i) => (
          <div key={i} style={{ ...styles.ruleRow, borderLeft: `4px solid ${["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF","#FFD6E0"][i]}` }}>
            <div style={styles.ruleStep}>{r.step}</div>
            <div>
              <div style={styles.ruleAction}>{r.action}</div>
              <div style={styles.ruleDetail}>{r.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 700, color: "#2D2640" },
  sub: { fontSize: "14px", color: "#7B6F96", marginTop: "4px" },
  philosophyCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", marginBottom: "1.25rem", boxShadow: "0 4px 24px rgba(120,100,200,0.06)" },
  philoTitle: { fontWeight: 700, fontSize: "18px", color: "#2D2640", marginBottom: "10px" },
  philoText: { fontSize: "14px", color: "#4A3F60", lineHeight: 1.7, marginBottom: "1.25rem" },
  philoGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" },
  patternCard: { borderRadius: "12px", padding: "0.875rem" },
  patternName: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "4px" },
  patternTrigger: { fontSize: "12px", color: "#4A3F60" },
  dailyCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", marginBottom: "2rem" },
  dailyTitle: { fontWeight: 700, fontSize: "16px", color: "#2D2640", marginBottom: "4px" },
  dailySub: { fontSize: "12px", color: "#7B6F96", marginBottom: "1rem" },
  dailyGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" },
  dailyItem: { borderRadius: "12px", padding: "0.875rem" },
  dailyTime: { fontWeight: 700, fontSize: "18px", color: "#2D2640", fontFamily: "'JetBrains Mono', monospace" },
  dailyTask: { fontSize: "12px", color: "#4A3F60", marginTop: "4px" },
  sectionTitle: { fontSize: "18px", fontWeight: 700, color: "#2D2640", marginBottom: "1rem" },
  weekCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", overflow: "hidden", marginBottom: "1.25rem", boxShadow: "0 4px 24px rgba(120,100,200,0.06)" },
  weekHeader: { padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" },
  weekHeaderLeft: { display: "flex", gap: "12px", alignItems: "center" },
  weekNum: { fontSize: "11px", fontWeight: 700, color: "#7B6F96", textTransform: "uppercase" },
  weekTitle: { fontWeight: 700, fontSize: "18px", color: "#2D2640" },
  weekTheme: { fontSize: "12px", color: "#4A3F60" },
  weekStat: { textAlign: "right" },
  weekBody: { padding: "1.25rem 1.5rem" },
  bodySection: { marginBottom: "1rem" },
  bodyLabel: { fontSize: "11px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" },
  chips: { display: "flex", flexWrap: "wrap", gap: "5px" },
  chip: { padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, color: "#2D2640" },
  bodyText: { fontSize: "13px", color: "#4A3F60" },
  compactProblems: { display: "flex", flexDirection: "column", gap: "4px" },
  compactProblem: { display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderRadius: "8px" },
  weekProgressBar: { background: "#EDE8FF", borderRadius: "999px", height: "5px", overflow: "hidden", marginTop: "8px" },
  weekProgressFill: { height: "100%", borderRadius: "999px", transition: "width 0.5s" },
  ruleTable: { display: "flex", flexDirection: "column", gap: "8px" },
  ruleRow: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "12px", padding: "0.875rem 1rem", display: "grid", gridTemplateColumns: "90px 1fr", gap: "0 1rem" },
  ruleStep: { fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 700, color: "#A08FD6", paddingTop: "2px" },
  ruleAction: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "3px" },
  ruleDetail: { fontSize: "12px", color: "#7B6F96" },
};
