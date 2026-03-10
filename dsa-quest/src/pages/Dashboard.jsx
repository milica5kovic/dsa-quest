// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import { WEEKS, LEVEL_TITLES, XP_THRESHOLDS, FOUR_QUESTIONS, TWENTY_MIN_RULE } from "../data/plan";

export default function Dashboard({ progress }) {
  if (!progress) return <div style={{ padding: "2rem", textAlign: "center" }}>Loading your quest...</div>;

  const { xp = 0, level = 1, completedProblems = {}, completedTasks = {}, completedWorksheet = {} } = progress;
  const nextXP = XP_THRESHOLDS[level] || 600;
  const prevXP = XP_THRESHOLDS[level - 1] || 0;
  const pct = Math.min(100, ((xp - prevXP) / (nextXP - prevXP)) * 100);
  const totalProblems = WEEKS.reduce((a, w) => a + w.problems.length, 0);
  const solvedCount = Object.values(completedProblems).filter(Boolean).length;
  const taskCount = Object.values(completedTasks).filter(Boolean).length;

  return (
    <div style={styles.page}>
      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.greeting}>Welcome back, Mia 👋</div>
          <h1 style={styles.heroTitle}>Your DSA Quest</h1>
          <p style={styles.heroSub}>C# developer → top-tier engineer. One pattern at a time.</p>
          <div style={styles.heroTags}>
            <span style={{ ...styles.tag, background: "#FFD6C2" }}>🧱 Arrays</span>
            <span style={{ ...styles.tag, background: "#D4C5F9" }}>🗺️ HashMaps</span>
            <span style={{ ...styles.tag, background: "#C2F0DC" }}>👆 Two Pointers</span>
            <span style={{ ...styles.tag, background: "#C2DEFF" }}>🪟 Sliding Window</span>
          </div>
        </div>
        <div style={styles.xpCard}>
          <div style={styles.levelBadge}>
            <span style={styles.levelNum}>{level}</span>
            <span style={styles.levelLabel}>LEVEL</span>
          </div>
          <div style={styles.levelTitle}>{LEVEL_TITLES[level]}</div>
          <div style={styles.xpBar}>
            <div style={{ ...styles.xpFill, width: `${pct}%` }} />
          </div>
          <div style={styles.xpText}>{xp} / {nextXP} XP</div>
          <div style={styles.xpHint}>+15 XP per problem solved</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={styles.statsRow}>
        {[
          { label: "Problems Solved", value: `${solvedCount}/${totalProblems}`, color: "#D4C5F9", icon: "💻" },
          { label: "Tasks Done", value: taskCount, color: "#C2F0DC", icon: "✅" },
          { label: "Weeks of Study", value: "4", color: "#FFD6C2", icon: "📅" },
          { label: "Target Companies", value: "5", color: "#C2DEFF", icon: "🎯" },
        ].map(s => (
          <div key={s.label} style={{ ...styles.statCard, background: s.color }}>
            <span style={styles.statIcon}>{s.icon}</span>
            <div style={styles.statVal}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* This week */}
      <section>
        <h2 style={styles.sectionTitle}>📅 Your 4-Week Plan</h2>
        <div style={styles.weekGrid}>
          {WEEKS.map(w => {
            const solved = w.problems.filter(p => completedProblems[`w${w.id}_${p.id}`]).length;
            const pct2 = Math.round((solved / w.problems.length) * 100);
            return (
              <Link to="/problems" key={w.id} style={{ textDecoration: "none" }}>
                <div style={{ ...styles.weekCard, borderColor: w.colorDark + "55" }}>
                  <div style={{ ...styles.weekHeader, background: w.color }}>
                    <span style={styles.weekEmoji}>{w.emoji}</span>
                    <div>
                      <div style={styles.weekNum}>Week {w.id}</div>
                      <div style={styles.weekTitle}>{w.title}</div>
                    </div>
                    <div style={styles.weekPct}>{pct2}%</div>
                  </div>
                  <div style={styles.weekBody}>
                    <p style={styles.weekTheme}>{w.theme}</p>
                    <div style={styles.miniBar}>
                      <div style={{ ...styles.miniBarFill, width: `${pct2}%`, background: w.colorDark }} />
                    </div>
                    <div style={styles.weekSolved}>{solved}/{w.problems.length} problems</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 20 min rule */}
      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={styles.sectionTitle}>⏱️ The 20-Minute Rule</h2>
        <p style={{ color: "#7B6F96", marginBottom: "1rem", fontSize: "14px" }}>Follow this EVERY single time you're stuck.</p>
        <div style={styles.ruleGrid}>
          {TWENTY_MIN_RULE.map((r, i) => (
            <div key={i} style={{ ...styles.ruleCard, borderLeft: `4px solid ${["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF","#FFD6E0"][i]}` }}>
              <div style={styles.ruleStep}>{r.step}</div>
              <div style={styles.ruleAction}>{r.action}</div>
              <div style={styles.ruleDetail}>{r.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 questions */}
      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={styles.sectionTitle}>🔍 After Every Problem — Ask Yourself</h2>
        <div style={styles.qGrid}>
          {FOUR_QUESTIONS.map((q, i) => (
            <div key={i} style={{ ...styles.qCard, background: ["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF"][i] }}>
              <div style={styles.qQ}>{q.q}</div>
              <div style={styles.qDetail}>{q.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick nav */}
      <div style={styles.quickNav}>
        {[
          { to: "/plan", icon: "📅", label: "View Full Plan" },
          { to: "/worksheets", icon: "📝", label: "Open Worksheets" },
          { to: "/problems", icon: "💻", label: "Solve Problems" },
          { to: "/career", icon: "🚀", label: "Career Roadmap" },
        ].map(n => (
          <Link key={n.to} to={n.to} style={styles.quickBtn}>
            {n.icon} {n.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: "900px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  hero: { display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "2rem" },
  heroLeft: { flex: "1", minWidth: "260px" },
  greeting: { fontSize: "13px", fontWeight: 600, color: "#A08FD6", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" },
  heroTitle: { fontSize: "clamp(28px, 6vw, 42px)", fontWeight: 700, color: "#2D2640", lineHeight: 1.15, marginBottom: "10px" },
  heroSub: { fontSize: "15px", color: "#7B6F96", marginBottom: "1.25rem" },
  heroTags: { display: "flex", flexWrap: "wrap", gap: "6px" },
  tag: { padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, color: "#2D2640" },
  xpCard: { background: "#FFFFFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", minWidth: "200px", textAlign: "center", boxShadow: "0 4px 24px rgba(120,100,200,0.08)" },
  levelBadge: { display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(135deg, #D4C5F9, #A08FD6)", borderRadius: "16px", padding: "12px", marginBottom: "10px", width: "70px", margin: "0 auto 12px" },
  levelNum: { fontSize: "32px", fontWeight: 700, color: "white", lineHeight: 1 },
  levelLabel: { fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" },
  levelTitle: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "12px" },
  xpBar: { background: "#EDE8FF", borderRadius: "999px", height: "8px", overflow: "hidden", marginBottom: "6px" },
  xpFill: { height: "100%", background: "linear-gradient(90deg, #D4C5F9, #A08FD6)", borderRadius: "999px", transition: "width 0.6s ease" },
  xpText: { fontSize: "13px", fontWeight: 600, color: "#2D2640" },
  xpHint: { fontSize: "11px", color: "#A89EC0", marginTop: "4px" },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "2.5rem" },
  statCard: { borderRadius: "16px", padding: "1.25rem 1rem", textAlign: "center" },
  statIcon: { fontSize: "22px", display: "block", marginBottom: "6px" },
  statVal: { fontSize: "28px", fontWeight: 700, color: "#2D2640", lineHeight: 1 },
  statLabel: { fontSize: "11px", fontWeight: 600, color: "#7B6F96", marginTop: "4px" },
  sectionTitle: { fontSize: "18px", fontWeight: 700, color: "#2D2640", marginBottom: "1rem" },
  weekGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" },
  weekCard: { background: "#FFF", borderRadius: "16px", border: "1.5px solid", overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" },
  weekHeader: { padding: "1rem", display: "flex", alignItems: "center", gap: "10px" },
  weekEmoji: { fontSize: "24px" },
  weekNum: { fontSize: "10px", fontWeight: 700, textTransform: "uppercase", color: "#7B6F96" },
  weekTitle: { fontWeight: 700, color: "#2D2640", fontSize: "14px" },
  weekPct: { marginLeft: "auto", fontWeight: 700, fontSize: "18px", color: "#2D2640" },
  weekBody: { padding: "0.75rem 1rem 1rem" },
  weekTheme: { fontSize: "12px", color: "#7B6F96", marginBottom: "8px" },
  miniBar: { background: "#EDE8FF", borderRadius: "999px", height: "5px", overflow: "hidden", marginBottom: "6px" },
  miniBarFill: { height: "100%", borderRadius: "999px", transition: "width 0.5s" },
  weekSolved: { fontSize: "12px", fontWeight: 600, color: "#A89EC0" },
  ruleGrid: { display: "flex", flexDirection: "column", gap: "8px" },
  ruleCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "12px", padding: "0.875rem 1rem", display: "grid", gridTemplateColumns: "80px 1fr", gap: "0 1rem", alignItems: "start" },
  ruleStep: { fontSize: "11px", fontWeight: 700, color: "#A08FD6", fontFamily: "'JetBrains Mono', monospace" },
  ruleAction: { fontWeight: 700, fontSize: "14px", color: "#2D2640" },
  ruleDetail: { gridColumn: "2", fontSize: "13px", color: "#7B6F96", marginTop: "2px" },
  qGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" },
  qCard: { borderRadius: "14px", padding: "1rem" },
  qQ: { fontWeight: 700, fontSize: "15px", color: "#2D2640", marginBottom: "4px" },
  qDetail: { fontSize: "12px", color: "#4A3F60" },
  quickNav: { display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "2.5rem", justifyContent: "center" },
  quickBtn: { display: "flex", alignItems: "center", gap: "6px", padding: "10px 18px", borderRadius: "10px", background: "#FFF", border: "1.5px solid #EDE8FF", fontSize: "14px", fontWeight: 600, color: "#2D2640", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" },
};
