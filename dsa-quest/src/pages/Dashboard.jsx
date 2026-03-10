// src/pages/Dashboard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { WEEKS, LEVEL_TITLES, XP_THRESHOLDS, FOUR_QUESTIONS, TWENTY_MIN_RULE } from "../data/plan";

// Determine current week based on progress
function getCurrentWeek(completedProblems) {
  for (const week of WEEKS) {
    const solved = week.problems.filter(p => completedProblems[`w${week.id}_${p.id}`]).length;
    const pct = solved / week.problems.length;
    if (pct < 1) return week;
  }
  return WEEKS[WEEKS.length - 1];
}

// Get next unsolved problem in current week
function getNextProblem(week, completedProblems) {
  return week.problems.find(p => !completedProblems[`w${week.id}_${p.id}`]);
}

export default function Dashboard({ progress, toggleTask }) {
  const [ruleExpanded, setRuleExpanded] = useState(false);
  const [todayDone, setTodayDone] = useState({});

  if (!progress) return (
    <div style={{ padding: "3rem", textAlign: "center", color: "#A89EC0", fontFamily: "'Sora', sans-serif" }}>
      Loading your quest...
    </div>
  );

  const { xp = 0, level = 1, completedProblems = {} } = progress;
  const nextXPThreshold = XP_THRESHOLDS[level] || XP_THRESHOLDS[XP_THRESHOLDS.length - 1];
  const prevXPThreshold = XP_THRESHOLDS[level - 1] || 0;
  const xpPct = Math.min(100, ((xp - prevXPThreshold) / (nextXPThreshold - prevXPThreshold)) * 100);

  const currentWeek = getCurrentWeek(completedProblems);
  const nextProblem = getNextProblem(currentWeek, completedProblems);
  const solvedThisWeek = currentWeek.problems.filter(p => completedProblems[`w${currentWeek.id}_${p.id}`]).length;
  const weekPct = Math.round((solvedThisWeek / currentWeek.problems.length) * 100);

  const totalSolved = Object.values(completedProblems).filter(Boolean).length;
  const totalProblems = WEEKS.reduce((a, w) => a + w.problems.length, 0);

  const todayTasks = [
    { id: "problem", label: nextProblem ? `Solve: #${nextProblem.lc} ${nextProblem.name}` : "All problems done this week! 🎉", icon: "💻", link: "/problems" },
    { id: "review", label: "Re-solve yesterday's problem from memory", icon: "🔁", link: "/problems" },
    { id: "ctci", label: "Read 2–3 pages of CTCI", icon: "📖", link: "/worksheets" },
    { id: "bigO", label: "Write Big-O for today's problem out loud", icon: "📊", link: "/worksheets" },
  ];

  return (
    <div style={styles.page}>

      {/* ── TOP: XP + Level ── */}
      <div style={styles.xpRow}>
        <div style={styles.levelPill}>
          <span style={styles.levelEmoji}>⚔️</span>
          <span style={styles.levelText}>Level {level} · {LEVEL_TITLES[level] || "DSA Legend"}</span>
        </div>
        <div style={styles.xpRight}>
          <span style={styles.xpNum}>{xp} XP</span>
          <div style={styles.xpBarWrap}>
            <div style={{ ...styles.xpBarFill, width: `${xpPct}%` }} />
          </div>
          <span style={styles.xpNext}>{nextXPThreshold} XP</span>
        </div>
      </div>

      {/* ── MAIN: Today's Focus Card ── */}
      <div style={{ ...styles.focusCard, borderTop: `5px solid ${currentWeek.colorDark}` }}>
        <div style={styles.focusHeader}>
          <div>
            <div style={styles.focusEyebrow}>
              {currentWeek.emoji} Week {currentWeek.id} · Month {currentWeek.month}
            </div>
            <h1 style={styles.focusTitle}>Today's Focus</h1>
            <p style={styles.focusTheme}>{currentWeek.theme}</p>
          </div>
          <div style={{ ...styles.weekBadge, background: currentWeek.color }}>
            <div style={styles.weekBadgeNum}>{weekPct}%</div>
            <div style={styles.weekBadgeLabel}>this week</div>
          </div>
        </div>

        {/* Week progress bar */}
        <div style={styles.weekBar}>
          <div style={{ ...styles.weekBarFill, width: `${weekPct}%`, background: currentWeek.colorDark }} />
        </div>
        <div style={styles.weekBarLabel}>{solvedThisWeek}/{currentWeek.problems.length} problems solved this week</div>

        {/* Today's tasks */}
        <div style={styles.taskList}>
          <div style={styles.taskListLabel}>📋 Do these today (80 min):</div>
          {todayTasks.map(task => (
            <div
              key={task.id}
              style={{ ...styles.taskItem, background: todayDone[task.id] ? "#F0FFF8" : "#FAFAFF" }}
              onClick={() => setTodayDone(d => ({ ...d, [task.id]: !d[task.id] }))}
            >
              <div style={{ ...styles.taskCheck, background: todayDone[task.id] ? "#72C9A0" : "#FFF", borderColor: todayDone[task.id] ? "#72C9A0" : "#D4C5F9" }}>
                {todayDone[task.id] && <span style={{ color: "white", fontSize: "12px" }}>✓</span>}
              </div>
              <span style={{ fontSize: "13px", color: todayDone[task.id] ? "#7B6F96" : "#2D2640", textDecoration: todayDone[task.id] ? "line-through" : "none", flex: 1 }}>
                {task.icon} {task.label}
              </span>
              <Link to={task.link} onClick={e => e.stopPropagation()} style={styles.taskArrow}>→</Link>
            </div>
          ))}
        </div>

        {/* Key patterns */}
        <div style={styles.patterns}>
          <span style={styles.patternsLabel}>This week's patterns:</span>
          {currentWeek.keyPatterns.map(p => (
            <span key={p} style={{ ...styles.patternChip, background: currentWeek.color }}>{p}</span>
          ))}
        </div>

        {/* Portfolio task */}
        <div style={styles.portfolioRow}>
          <span>🗂️</span>
          <span style={{ fontSize: "13px", color: "#4A3F60" }}>
            <strong>Portfolio task:</strong> {currentWeek.portfolioTask}
          </span>
        </div>
      </div>

      {/* ── MIDDLE: Quick Stats ── */}
      <div style={styles.statsRow}>
        <div style={{ ...styles.statCard, background: "#D4C5F9" }}>
          <div style={styles.statVal}>{totalSolved}</div>
          <div style={styles.statLabel}>problems<br/>solved</div>
        </div>
        <div style={{ ...styles.statCard, background: "#C2F0DC" }}>
          <div style={styles.statVal}>{totalProblems - totalSolved}</div>
          <div style={styles.statLabel}>problems<br/>remaining</div>
        </div>
        <div style={{ ...styles.statCard, background: "#FFD6C2" }}>
          <div style={styles.statVal}>{currentWeek.id}</div>
          <div style={styles.statLabel}>current<br/>week</div>
        </div>
        <div style={{ ...styles.statCard, background: "#C2DEFF" }}>
          <div style={styles.statVal}>{WEEKS.length}</div>
          <div style={styles.statLabel}>total<br/>weeks</div>
        </div>
      </div>

      {/* ── BOTTOM: 20-min rule (collapsible) ── */}
      <div style={styles.ruleCard}>
        <button style={styles.ruleToggle} onClick={() => setRuleExpanded(!ruleExpanded)}>
          <span>⏱️ The 20-Minute Rule</span>
          <span style={{ transform: ruleExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>▾</span>
        </button>
        {ruleExpanded && (
          <div style={styles.ruleBody}>
            {TWENTY_MIN_RULE.map((r, i) => (
              <div key={i} style={{ ...styles.ruleRow, borderLeft: `3px solid ${["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF","#FFD6E0"][i]}` }}>
                <div style={styles.ruleStep}>{r.step}</div>
                <div>
                  <div style={styles.ruleAction}>{r.action}</div>
                  <div style={styles.ruleDetail}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── After every problem ── */}
      <div style={styles.qCard}>
        <div style={styles.qTitle}>🔍 After every problem, ask yourself:</div>
        <div style={styles.qGrid}>
          {FOUR_QUESTIONS.map((q, i) => (
            <div key={i} style={{ ...styles.qItem, background: ["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF"][i] }}>
              <div style={styles.qQ}>{q.q}</div>
              <div style={styles.qDetail}>{q.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Nav shortcuts ── */}
      <div style={styles.navRow}>
        {[
          { to: "/problems", icon: "💻", label: "Problems" },
          { to: "/worksheets", icon: "📝", label: "Worksheets" },
          { to: "/plan", icon: "📅", label: "Full Plan" },
          { to: "/career", icon: "🚀", label: "Career" },
        ].map(n => (
          <Link key={n.to} to={n.to} style={styles.navBtn}>
            <span>{n.icon}</span>
            <span>{n.label}</span>
          </Link>
        ))}
      </div>

    </div>
  );
}

const styles = {
  page: { maxWidth: "680px", margin: "0 auto", padding: "1.5rem 1.25rem 4rem" },

  // XP row
  xpRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem", flexWrap: "wrap" },
  levelPill: { display: "flex", alignItems: "center", gap: "6px", background: "#EDE8FF", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: 700, color: "#2D2640" },
  levelEmoji: { fontSize: "15px" },
  levelText: {},
  xpRight: { display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: "160px" },
  xpNum: { fontSize: "13px", fontWeight: 700, color: "#A08FD6", whiteSpace: "nowrap" },
  xpBarWrap: { flex: 1, height: "7px", background: "#EDE8FF", borderRadius: "999px", overflow: "hidden" },
  xpBarFill: { height: "100%", background: "linear-gradient(90deg, #D4C5F9, #A08FD6)", borderRadius: "999px", transition: "width 0.6s ease" },
  xpNext: { fontSize: "11px", color: "#A89EC0", whiteSpace: "nowrap" },

  // Focus card
  focusCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", marginBottom: "1rem", boxShadow: "0 4px 32px rgba(120,100,200,0.08)" },
  focusHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" },
  focusEyebrow: { fontSize: "12px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" },
  focusTitle: { fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 700, color: "#2D2640", lineHeight: 1.1, marginBottom: "4px" },
  focusTheme: { fontSize: "13px", color: "#7B6F96" },
  weekBadge: { borderRadius: "14px", padding: "10px 14px", textAlign: "center", flexShrink: 0 },
  weekBadgeNum: { fontWeight: 700, fontSize: "22px", color: "#2D2640" },
  weekBadgeLabel: { fontSize: "10px", color: "#7B6F96", fontWeight: 600 },
  weekBar: { background: "#EDE8FF", borderRadius: "999px", height: "6px", overflow: "hidden", marginBottom: "5px" },
  weekBarFill: { height: "100%", borderRadius: "999px", transition: "width 0.5s" },
  weekBarLabel: { fontSize: "11px", color: "#A89EC0", marginBottom: "1.25rem" },

  // Task list
  taskList: { marginBottom: "1.25rem" },
  taskListLabel: { fontSize: "12px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" },
  taskItem: { display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #EDE8FF", marginBottom: "6px", cursor: "pointer", transition: "all 0.15s" },
  taskCheck: { width: "22px", height: "22px", borderRadius: "6px", border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" },
  taskArrow: { fontSize: "14px", color: "#A08FD6", fontWeight: 700, textDecoration: "none", padding: "2px 6px", flexShrink: 0 },

  // Patterns
  patterns: { display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", marginBottom: "12px" },
  patternsLabel: { fontSize: "11px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase" },
  patternChip: { padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, color: "#2D2640" },

  // Portfolio
  portfolioRow: { display: "flex", gap: "8px", alignItems: "flex-start", background: "#FFF9EE", border: "1.5px solid #F0E0A0", borderRadius: "10px", padding: "8px 12px", fontSize: "13px" },

  // Stats
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "1rem" },
  statCard: { borderRadius: "14px", padding: "1rem 0.75rem", textAlign: "center" },
  statVal: { fontWeight: 700, fontSize: "24px", color: "#2D2640", lineHeight: 1 },
  statLabel: { fontSize: "10px", fontWeight: 600, color: "#7B6F96", marginTop: "4px", lineHeight: 1.3 },

  // 20-min rule
  ruleCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "14px", marginBottom: "1rem", overflow: "hidden" },
  ruleToggle: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "14px", color: "#2D2640" },
  ruleBody: { padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: "8px" },
  ruleRow: { display: "grid", gridTemplateColumns: "80px 1fr", gap: "0 12px", padding: "8px 10px", borderRadius: "8px", background: "#FAFAFF" },
  ruleStep: { fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 700, color: "#A08FD6", paddingTop: "2px" },
  ruleAction: { fontWeight: 700, fontSize: "13px", color: "#2D2640", marginBottom: "2px" },
  ruleDetail: { fontSize: "12px", color: "#7B6F96" },

  // 4 questions
  qCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "14px", padding: "1.25rem", marginBottom: "1rem" },
  qTitle: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "10px" },
  qGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" },
  qItem: { borderRadius: "10px", padding: "10px 12px" },
  qQ: { fontWeight: 700, fontSize: "13px", color: "#2D2640", marginBottom: "3px" },
  qDetail: { fontSize: "11px", color: "#4A3F60", lineHeight: 1.4 },

  // Nav
  navRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" },
  navBtn: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", padding: "12px 8px", borderRadius: "12px", background: "#FFF", border: "1.5px solid #EDE8FF", fontSize: "12px", fontWeight: 600, color: "#2D2640", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" },
};