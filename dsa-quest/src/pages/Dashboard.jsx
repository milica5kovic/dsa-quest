// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WEEKS, LEVEL_TITLES, XP_THRESHOLDS, FOUR_QUESTIONS, TWENTY_MIN_RULE } from "../data/plan";
import DailyCalendar from "../components/DailyCalendar";
import { localDateKey } from "../utils/date";

function getCurrentWeek(completedProblems) {
  for (const week of WEEKS) {
    const solved = week.problems.filter(p => completedProblems[`w${week.id}_${p.id}`]).length;
    if (solved / week.problems.length < 1) return week;
  }
  return WEEKS[WEEKS.length - 1];
}

function getNextProblem(week, completedProblems) {
  return week.problems.find(p => !completedProblems[`w${week.id}_${p.id}`]);
}

const TODAY_TASK_IDS = ["problem", "review", "ctci", "bigO"];

export default function Dashboard({ progress, toggleTask, logDay, clearDay }) {
  const [ruleExpanded, setRuleExpanded] = useState(false);
  const today = localDateKey();

  // Extract early so useEffect can reference them (hooks must run before any early return)
  const completedTasks = progress?.completedTasks || {};
  const dailyLog = progress?.dailyLog || {};
  const allTasksDone = TODAY_TASK_IDS.every(id => completedTasks[`${today}_${id}`]);
  const todayLogged = !!dailyLog[today]?.done;

  useEffect(() => {
    if (allTasksDone && !todayLogged && logDay) {
      logDay(today, { done: true, note: "All daily tasks completed ✨" });
    }
  }, [allTasksDone]); // eslint-disable-line

  if (!progress) return (
    <div style={{ padding: "3rem", textAlign: "center", color: "#A89EC0", fontFamily: "'Sora', sans-serif" }}>
      Loading your quest...
    </div>
  );

  const { xp = 0, level = 1, streak = 0, completedProblems = {} } = progress;
  const nextXP = XP_THRESHOLDS[level] || XP_THRESHOLDS[XP_THRESHOLDS.length - 1];
  const prevXP = XP_THRESHOLDS[level - 1] || 0;
  const xpPct = Math.min(100, ((xp - prevXP) / (nextXP - prevXP)) * 100);

  const currentWeek = getCurrentWeek(completedProblems);
  const nextProblem = getNextProblem(currentWeek, completedProblems);
  const solvedThisWeek = currentWeek.problems.filter(p => completedProblems[`w${currentWeek.id}_${p.id}`]).length;
  const weekPct = Math.round((solvedThisWeek / currentWeek.problems.length) * 100);
  const totalSolved = Object.values(completedProblems).filter(Boolean).length;
  const totalProblems = WEEKS.reduce((a, w) => a + w.problems.length, 0);

  const todayTasks = [
    { id: "problem", label: nextProblem ? `Solve: #${nextProblem.lc} ${nextProblem.name}` : "All problems done! 🎉", icon: "💻", link: "/problems" },
    { id: "review", label: "Re-solve yesterday's problem from memory", icon: "🔁", link: "/problems" },
    { id: "ctci", label: "Read 2–3 pages of CTCI", icon: "📖", link: "/worksheets" },
    { id: "bigO", label: "Write Big-O for today's problem out loud", icon: "📊", link: "/worksheets" },
  ];

  return (
    <div style={styles.page}>

      {/* XP bar */}
      <div style={styles.xpRow}>
        <div style={styles.levelPill}>
          <span>⚔️</span>
          <span>Level {level} · {LEVEL_TITLES[level] || "DSA Legend"}</span>
        </div>
        <div style={styles.xpRight}>
          <span style={styles.xpNum}>{xp} XP</span>
          <div style={styles.xpBarWrap}>
            <div style={{ ...styles.xpBarFill, width: `${xpPct}%` }} />
          </div>
          <span style={styles.xpNext}>{nextXP} XP</span>
        </div>
      </div>

      {/* Main two-column layout */}
      <div style={styles.columns}>

        {/* LEFT: Focus card */}
        <div style={styles.leftCol}>
          <div style={{ ...styles.focusCard, borderTop: `5px solid ${currentWeek.colorDark}` }}>
            <div style={styles.focusHeader}>
              <div>
                <div style={styles.focusEyebrow}>{currentWeek.emoji} Week {currentWeek.id} · Month {currentWeek.month}</div>
                <h1 style={styles.focusTitle}>Today's Focus</h1>
                <p style={styles.focusTheme}>{currentWeek.theme}</p>
              </div>
              <div style={{ ...styles.weekBadge, background: currentWeek.color }}>
                <div style={styles.weekBadgeNum}>{weekPct}%</div>
                <div style={styles.weekBadgeLabel}>this week</div>
              </div>
            </div>

            <div style={styles.weekBar}>
              <div style={{ ...styles.weekBarFill, width: `${weekPct}%`, background: currentWeek.colorDark }} />
            </div>
            <div style={styles.weekBarLabel}>{solvedThisWeek}/{currentWeek.problems.length} problems solved this week</div>

            {/* Tasks — or Day Complete banner */}
            {todayLogged ? (
              <div style={styles.dayDone}>
                <div style={styles.dayDoneIcon}>🎉</div>
                <div>
                  <div style={styles.dayDoneTitle}>Day complete!</div>
                  <div style={styles.dayDoneSub}>All tasks done · Day logged · Streak: {streak}🔥</div>
                </div>
                <button
                  style={styles.dayDoneUndo}
                  onClick={() => clearDay && clearDay(today)}
                >
                  Undo
                </button>
              </div>
            ) : (
              <div style={styles.taskList}>
                <div style={styles.taskListLabel}>📋 Do these today (80 min):</div>
                {todayTasks.map(task => {
                  const key = `${today}_${task.id}`;
                  const done = !!completedTasks[key];
                  return (
                    <div
                      key={task.id}
                      style={{ ...styles.taskItem, background: done ? "#F0FFF8" : "#FAFAFF" }}
                      onClick={() => toggleTask && toggleTask(key)}
                    >
                      <div style={{ ...styles.taskCheck, background: done ? "#72C9A0" : "#FFF", borderColor: done ? "#72C9A0" : "#D4C5F9" }}>
                        {done && <span style={{ color: "white", fontSize: "11px" }}>✓</span>}
                      </div>
                      <span style={{ fontSize: "13px", color: done ? "#7B6F96" : "#2D2640", textDecoration: done ? "line-through" : "none", flex: 1 }}>
                        {task.icon} {task.label}
                      </span>
                      <Link to={task.link} onClick={e => e.stopPropagation()} style={styles.taskArrow}>→</Link>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Patterns */}
            <div style={styles.patterns}>
              <span style={styles.patternsLabel}>Patterns:</span>
              {currentWeek.keyPatterns.map(p => (
                <span key={p} style={{ ...styles.patternChip, background: currentWeek.color }}>{p}</span>
              ))}
            </div>

            {/* Portfolio */}
            <div style={styles.portfolioRow}>
              <span>🗂️</span>
              <span style={{ fontSize: "13px", color: "#4A3F60" }}>
                <strong>Portfolio:</strong> {currentWeek.portfolioTask}
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div style={styles.statsRow}>
            {[
              { val: totalSolved, label: "solved", color: "#D4C5F9" },
              { val: totalProblems - totalSolved, label: "remaining", color: "#FFD6C2" },
              { val: `W${currentWeek.id}`, label: "current week", color: "#C2F0DC" },
              { val: `${streak}🔥`, label: "day streak", color: "#FFD6C2" },
            ].map((s, i) => (
              <div key={i} style={{ ...styles.statCard, background: s.color }}>
                <div style={styles.statVal}>{s.val}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* 20-min rule collapsible */}
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

          {/* 4 questions */}
          <div style={styles.qCard}>
            <div style={styles.qTitle}>🔍 After every problem:</div>
            <div style={styles.qGrid}>
              {FOUR_QUESTIONS.map((q, i) => (
                <div key={i} style={{ ...styles.qItem, background: ["#FFD6C2","#D4C5F9","#C2F0DC","#C2DEFF"][i] }}>
                  <div style={styles.qQ}>{q.q}</div>
                  <div style={styles.qDetail}>{q.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav shortcuts */}
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

        {/* RIGHT: Calendar sidebar */}
        <div style={styles.rightCol}>
          <DailyCalendar
            dailyLog={dailyLog}
            logDay={logDay}
            clearDay={clearDay}
            streak={streak}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { maxWidth: "980px", margin: "0 auto", padding: "1.5rem 1.25rem 4rem" },

  xpRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem", flexWrap: "wrap" },
  levelPill: { display: "flex", alignItems: "center", gap: "6px", background: "#EDE8FF", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: 700, color: "#2D2640" },
  xpRight: { display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: "160px" },
  xpNum: { fontSize: "13px", fontWeight: 700, color: "#A08FD6", whiteSpace: "nowrap" },
  xpBarWrap: { flex: 1, height: "7px", background: "#EDE8FF", borderRadius: "999px", overflow: "hidden" },
  xpBarFill: { height: "100%", background: "linear-gradient(90deg, #D4C5F9, #A08FD6)", borderRadius: "999px", transition: "width 0.6s ease" },
  xpNext: { fontSize: "11px", color: "#A89EC0", whiteSpace: "nowrap" },

  columns: { display: "flex", gap: "1.25rem", alignItems: "flex-start", flexWrap: "wrap" },
  leftCol: { flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "1rem" },
  rightCol: { flexShrink: 0 },

  focusCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 4px 32px rgba(120,100,200,0.08)" },
  focusHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" },
  focusEyebrow: { fontSize: "11px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" },
  focusTitle: { fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 700, color: "#2D2640", lineHeight: 1.1, marginBottom: "4px" },
  focusTheme: { fontSize: "12px", color: "#7B6F96" },
  weekBadge: { borderRadius: "14px", padding: "10px 12px", textAlign: "center", flexShrink: 0 },
  weekBadgeNum: { fontWeight: 700, fontSize: "20px", color: "#2D2640" },
  weekBadgeLabel: { fontSize: "10px", color: "#7B6F96", fontWeight: 600 },
  weekBar: { background: "#EDE8FF", borderRadius: "999px", height: "6px", overflow: "hidden", marginBottom: "5px" },
  weekBarFill: { height: "100%", borderRadius: "999px", transition: "width 0.5s" },
  weekBarLabel: { fontSize: "11px", color: "#A89EC0", marginBottom: "1.25rem" },

  dayDone: { display: "flex", alignItems: "center", gap: "12px", background: "linear-gradient(135deg, #C2F0DC, #A8E8C8)", border: "1.5px solid #72C9A0", borderRadius: "14px", padding: "14px 16px", marginBottom: "1rem" },
  dayDoneIcon: { fontSize: "28px", lineHeight: 1, flexShrink: 0 },
  dayDoneTitle: { fontWeight: 700, fontSize: "15px", color: "#1A5C3A" },
  dayDoneSub: { fontSize: "12px", color: "#2D7A50", marginTop: "2px" },
  dayDoneUndo: { marginLeft: "auto", background: "rgba(255,255,255,0.6)", border: "1px solid #72C9A0", borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: 600, color: "#2D7A50", cursor: "pointer", flexShrink: 0, fontFamily: "'Sora', sans-serif" },

  taskList: { marginBottom: "1rem" },
  taskListLabel: { fontSize: "11px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" },
  taskItem: { display: "flex", alignItems: "center", gap: "10px", padding: "9px 11px", borderRadius: "10px", border: "1.5px solid #EDE8FF", marginBottom: "5px", cursor: "pointer", transition: "all 0.15s" },
  taskCheck: { width: "20px", height: "20px", borderRadius: "6px", border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" },
  taskArrow: { fontSize: "13px", color: "#A08FD6", fontWeight: 700, textDecoration: "none", flexShrink: 0 },

  patterns: { display: "flex", flexWrap: "wrap", gap: "5px", alignItems: "center", marginBottom: "10px" },
  patternsLabel: { fontSize: "10px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase" },
  patternChip: { padding: "2px 9px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, color: "#2D2640" },
  portfolioRow: { display: "flex", gap: "7px", alignItems: "flex-start", background: "#FFF9EE", border: "1.5px solid #F0E0A0", borderRadius: "10px", padding: "8px 11px" },

  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" },
  statCard: { borderRadius: "12px", padding: "0.875rem 0.5rem", textAlign: "center" },
  statVal: { fontWeight: 700, fontSize: "20px", color: "#2D2640", lineHeight: 1 },
  statLabel: { fontSize: "10px", fontWeight: 600, color: "#7B6F96", marginTop: "3px" },

  ruleCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "14px", overflow: "hidden" },
  ruleToggle: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "13px", color: "#2D2640" },
  ruleBody: { padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: "7px" },
  ruleRow: { display: "grid", gridTemplateColumns: "75px 1fr", gap: "0 10px", padding: "7px 10px", borderRadius: "8px", background: "#FAFAFF" },
  ruleStep: { fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: 700, color: "#A08FD6", paddingTop: "2px" },
  ruleAction: { fontWeight: 700, fontSize: "12px", color: "#2D2640", marginBottom: "2px" },
  ruleDetail: { fontSize: "11px", color: "#7B6F96" },

  qCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "14px", padding: "1.125rem" },
  qTitle: { fontWeight: 700, fontSize: "13px", color: "#2D2640", marginBottom: "9px" },
  qGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "7px" },
  qItem: { borderRadius: "10px", padding: "9px 11px" },
  qQ: { fontWeight: 700, fontSize: "12px", color: "#2D2640", marginBottom: "3px" },
  qDetail: { fontSize: "11px", color: "#4A3F60", lineHeight: 1.4 },

  navRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "7px" },
  navBtn: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", padding: "11px 6px", borderRadius: "12px", background: "#FFF", border: "1.5px solid #EDE8FF", fontSize: "11px", fontWeight: 600, color: "#2D2640", textDecoration: "none", transition: "all 0.2s" },
};