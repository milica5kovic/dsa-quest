// src/components/DailyCalendar.jsx
import { useState } from "react";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function toKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // convert to Mon-start
  const startOffset = (firstDay + 6) % 7;
  return { startOffset, daysInMonth };
}

export default function DailyCalendar({ dailyLog = {}, logDay, clearDay }) {
  const today = new Date();
  const todayKey = toKey(today);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(null); // "2026-03-11"
  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { startOffset, daysInMonth } = getMonthDays(viewYear, viewMonth);

  const monthName = new Date(viewYear, viewMonth, 1).toLocaleString("default", { month: "long", year: "numeric" });

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const openDay = (dayNum) => {
    const d = new Date(viewYear, viewMonth, dayNum);
    if (d > today) return; // can't log future
    const key = toKey(d);
    setSelectedDay(key);
    setNote(dailyLog[key]?.note || "");
    setShowModal(true);
  };

  const handleDone = async () => {
    if (!selectedDay) return;
    await logDay(selectedDay, { done: true, note });
    setShowModal(false);
  };

  const handleClear = async () => {
    if (!selectedDay) return;
    await clearDay(selectedDay);
    setShowModal(false);
  };

  const handleMissed = async () => {
    if (!selectedDay) return;
    await logDay(selectedDay, { done: false, note });
    setShowModal(false);
  };

  // streak calc
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const k = toKey(d);
    if (dailyLog[k]?.done) streak++;
    else break;
  }

  const doneCount = Object.values(dailyLog).filter(d => d.done).length;

  return (
    <>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.title}>📅 Daily Log</div>
          <div style={styles.streakRow}>
            <span style={styles.streakFire}>🔥</span>
            <span style={styles.streakNum}>{streak}</span>
            <span style={styles.streakLabel}>day streak</span>
          </div>
          <div style={styles.doneTotal}>{doneCount} days logged</div>
        </div>

        {/* Month nav */}
        <div style={styles.monthNav}>
          <button style={styles.navBtn} onClick={prevMonth}>‹</button>
          <span style={styles.monthLabel}>{monthName}</span>
          <button style={styles.navBtn} onClick={nextMonth}>›</button>
        </div>

        {/* Day headers */}
        <div style={styles.dayHeaders}>
          {DAYS.map((d, i) => (
            <div key={i} style={styles.dayHeader}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={styles.grid}>
          {/* empty offset cells */}
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {/* day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const d = new Date(viewYear, viewMonth, dayNum);
            const key = toKey(d);
            const isFuture = d > today;
            const isToday = key === todayKey;
            const logEntry = dailyLog[key];
            const isDone = logEntry?.done === true;
            const isMissed = logEntry?.done === false;
            const hasNote = !!logEntry?.note;

            return (
              <button
                key={dayNum}
                onClick={() => !isFuture && openDay(dayNum)}
                style={{
                  ...styles.dayCell,
                  background: isDone ? "#C2F0DC" : isMissed ? "#FFE0E0" : isToday ? "#EDE8FF" : "#FAFAFF",
                  border: isToday ? "2px solid #A08FD6" : "1.5px solid #EDE8FF",
                  color: isFuture ? "#D0C8E8" : "#2D2640",
                  cursor: isFuture ? "default" : "pointer",
                  position: "relative",
                }}
                disabled={isFuture}
              >
                <span style={{ fontSize: "12px", fontWeight: isToday ? 700 : 400 }}>{dayNum}</span>
                {isDone && <span style={styles.dot("green")} />}
                {isMissed && <span style={styles.dot("red")} />}
                {hasNote && <span style={styles.noteDot} />}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div style={styles.legend}>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: "#72C9A0" }} />done</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: "#F09090" }} />missed</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: "#A08FD6" }} />today</span>
        </div>

        {/* Today quick log button */}
        {!dailyLog[todayKey] && (
          <button style={styles.logTodayBtn} onClick={() => openDay(today.getDate())}>
            ✅ Log today
          </button>
        )}
        {dailyLog[todayKey]?.done && (
          <div style={styles.todayDone}>🎉 Today logged!</div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.overlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <div style={styles.modalTitle}>
              {selectedDay === todayKey ? "📅 Log Today" : `📅 ${selectedDay}`}
            </div>

            <textarea
              style={styles.textarea}
              placeholder="What did you solve? Any notes? (optional)"
              value={note}
              onChange={e => setNote(e.target.value)}
              rows={3}
            />

            <div style={styles.modalBtns}>
              <button style={styles.btnDone} onClick={handleDone}>✅ Done</button>
              <button style={styles.btnMissed} onClick={handleMissed}>😔 Missed</button>
              {dailyLog[selectedDay] && (
                <button style={styles.btnClear} onClick={handleClear}>🗑️ Clear</button>
              )}
            </div>
            <button style={styles.btnClose} onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  card: {
    background: "#FFF",
    border: "1.5px solid #EDE8FF",
    borderRadius: "20px",
    padding: "1.25rem",
    boxShadow: "0 4px 24px rgba(120,100,200,0.07)",
    minWidth: "240px",
    maxWidth: "280px",
    height: "fit-content",
  },
  header: { marginBottom: "1rem" },
  title: { fontWeight: 700, fontSize: "15px", color: "#2D2640", marginBottom: "6px" },
  streakRow: { display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" },
  streakFire: { fontSize: "16px" },
  streakNum: { fontWeight: 700, fontSize: "20px", color: "#2D2640" },
  streakLabel: { fontSize: "11px", color: "#7B6F96", fontWeight: 500 },
  doneTotal: { fontSize: "11px", color: "#A89EC0" },

  monthNav: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" },
  navBtn: { background: "#F5F2FF", border: "none", borderRadius: "8px", width: "28px", height: "28px", cursor: "pointer", fontSize: "16px", color: "#7B6F96", display: "flex", alignItems: "center", justifyContent: "center" },
  monthLabel: { fontSize: "12px", fontWeight: 700, color: "#2D2640" },

  dayHeaders: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: "4px" },
  dayHeader: { textAlign: "center", fontSize: "10px", fontWeight: 700, color: "#A89EC0", padding: "2px 0" },

  grid: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px", marginBottom: "10px" },
  dayCell: {
    aspectRatio: "1",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Sora', sans-serif",
    transition: "all 0.15s",
    flexDirection: "column",
    gap: "1px",
    padding: 0,
  },
  dot: (color) => ({
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: color === "green" ? "#52B080" : "#E05050",
    display: "block",
  }),
  noteDot: {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "#A08FD6",
    display: "block",
  },

  legend: { display: "flex", gap: "10px", justifyContent: "center", marginBottom: "10px" },
  legendItem: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", color: "#7B6F96" },
  legendDot: { width: "8px", height: "8px", borderRadius: "50%", display: "inline-block" },

  logTodayBtn: {
    width: "100%",
    padding: "9px",
    background: "linear-gradient(135deg, #D4C5F9, #A08FD6)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: "13px",
    cursor: "pointer",
  },
  todayDone: {
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 700,
    color: "#52B080",
    padding: "8px",
    background: "#C2F0DC",
    borderRadius: "10px",
  },

  // Modal
  overlay: {
    position: "fixed", inset: 0,
    background: "rgba(45, 38, 64, 0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 200,
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "1rem",
  },
  modal: {
    background: "#FFF",
    borderRadius: "20px",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "360px",
    boxShadow: "0 20px 60px rgba(120,100,200,0.2)",
  },
  modalTitle: { fontWeight: 700, fontSize: "17px", color: "#2D2640", marginBottom: "1rem" },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1.5px solid #EDE8FF",
    fontFamily: "'Sora', sans-serif",
    fontSize: "13px",
    color: "#2D2640",
    resize: "vertical",
    marginBottom: "1rem",
    background: "#FAFAFF",
  },
  modalBtns: { display: "flex", gap: "8px", marginBottom: "8px" },
  btnDone: { flex: 1, padding: "10px", background: "#C2F0DC", border: "none", borderRadius: "10px", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "13px", color: "#2D2640", cursor: "pointer" },
  btnMissed: { flex: 1, padding: "10px", background: "#FFE0E0", border: "none", borderRadius: "10px", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "13px", color: "#2D2640", cursor: "pointer" },
  btnClear: { padding: "10px 14px", background: "#F5F2FF", border: "none", borderRadius: "10px", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "13px", color: "#7B6F96", cursor: "pointer" },
  btnClose: { width: "100%", padding: "9px", background: "none", border: "1.5px solid #EDE8FF", borderRadius: "10px", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "13px", color: "#7B6F96", cursor: "pointer" },
};