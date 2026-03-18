// src/pages/Career.jsx
import { CAREER_PHASES, TARGETS } from "../data/plan";

const MASTER_TOPICS = [
  "Discrete Mathematics (sets, logic, proofs, combinatorics)",
  "Linear Algebra basics (matrices, vectors for ML/AI)",
  "Database Theory (normalization, transactions, indexing)",
  "Computer Networks (TCP/IP, HTTP/2, REST vs gRPC)",
  "Software Architecture (Clean Architecture, CQRS, DDD)",
  "Operating Systems (processes, threads, memory management)",
  "Read 1–2 IEEE/ACM papers per week",
];

const STRENGTHS = [
  { icon: "🔷", item: "C# + .NET (ASP.NET, ADO.NET) — primary language, great for Microsoft" },
  { icon: "🌐", item: "Full-stack: wildlife project (React/TypeScript + .NET)" },
  { icon: "🏫", item: "Teaching background — rare in devs, massive communication edge" },
  { icon: "🎮", item: "Game development interest (Unity, Godot) — strong fit for Nordeus" },
  { icon: "🐍", item: "Python automation (PCB scripting, Arduino)" },
  { icon: "🌍", item: "Open to relocation globally — maximizes opportunities" },
  { icon: "📚", item: "BSc from RAF + upcoming Master's — strong academic foundation" },
  { icon: "⚡", item: "15 GitHub repos showing consistent project work" },
];

const STAR_TOPICS = [
  "A challenge you overcame",
  "Your biggest mistake and what you learned",
  "Why you want to work here",
  "A time you worked in a team",
  "Tell me about yourself",
];

export default function Career() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>🚀 Career Roadmap</h1>
        <p style={styles.sub}>Software Engineer at Microsoft · Nordeus · JetBrains · Google · RAF Master's</p>
      </div>

      {/* Strengths */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💪 Your Genuine Strengths</h2>
        <div style={styles.strengthGrid}>
          {STRENGTHS.map((s, i) => (
            <div key={i} style={styles.strengthCard}>
              <span style={{ fontSize: "20px" }}>{s.icon}</span>
              <span style={styles.strengthText}>{s.item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Target companies */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Target Companies</h2>
        <div style={styles.targetGrid}>
          {TARGETS.map(t => (
            <div key={t.company} style={styles.targetCard}>
              <div style={styles.targetIcon}>{t.icon}</div>
              <div style={styles.targetCompany}>{t.company}</div>
              <div style={styles.targetFit}>{t.fit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-month roadmap */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🗺️ 6-Month Preparation Roadmap</h2>
        <div style={styles.phases}>
          {CAREER_PHASES.map((phase, i) => (
            <div key={i} style={styles.phaseCard}>
              <div style={{ ...styles.phaseHeader, background: phase.color }}>
                <div style={styles.phaseNum}>{phase.phase}</div>
                <div style={styles.phaseTitle}>{phase.title}</div>
                <div style={styles.phaseHours}>{phase.hours}</div>
              </div>
              <ul style={styles.phaseGoals}>
                {phase.goals.map((g, j) => (
                  <li key={j} style={styles.phaseGoal}>
                    <span style={{ color: phase.color === "#C2F0DC" ? "#72C9A0" : "#A08FD6" }}>▸</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RAF Master's prep */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎓 RAF Master's Preparation</h2>
        <div style={styles.masterCard}>
          <p style={styles.masterIntro}>
            RAF Master's in IT will push deeper into theory, research, and advanced engineering.
            Strengthen these topics over the next 3–6 months before September:
          </p>
          <div style={styles.topicGrid}>
            {MASTER_TOPICS.map((t, i) => (
              <div key={i} style={styles.topicChip}>
                <span style={{ color: "#A08FD6" }}>◆</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div style={styles.masterProjects}>
            <h3 style={styles.masterProjectsTitle}>📁 Projects That Align With Master's</h3>
            {[
              "Refactor wildlife project with Clean Architecture patterns",
              "Add unit + integration tests to existing C# projects",
              "Build something using gRPC or SignalR (real-time systems)",
              "Experiment with Docker — containerize one web app",
              "Read professors' published papers to align with their research",
              "Start a technical blog or notes repo",
            ].map((p, i) => (
              <div key={i} style={styles.masterProject}>✦ {p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Behavioral / STAR */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎤 Behavioral Interview — S.T.A.R. Method</h2>
        <div style={styles.starCard}>
          <div style={styles.starGrid}>
            {[
              { letter: "S", label: "Situation", desc: "Set the scene and context", color: "#FFD6C2" },
              { letter: "T", label: "Task", desc: "What was your responsibility?", color: "#D4C5F9" },
              { letter: "A", label: "Action", desc: "What did YOU specifically do?", color: "#C2F0DC" },
              { letter: "R", label: "Result", desc: "Quantify the outcome if possible", color: "#C2DEFF" },
            ].map(s => (
              <div key={s.letter} style={{ ...styles.starItem, background: s.color }}>
                <div style={styles.starLetter}>{s.letter}</div>
                <div style={styles.starLabel}>{s.label}</div>
                <div style={styles.starDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={styles.topicsSection}>
            <div style={styles.topicsLabel}>Prepare answers for:</div>
            {STAR_TOPICS.map((t, i) => (
              <div key={i} style={styles.topicRow}>
                <span style={styles.topicNum}>{i + 1}</span>
                <span style={{ fontSize: "13px", color: "#4A3F60" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { maxWidth: "860px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 700, color: "#2D2640" },
  sub: { fontSize: "14px", color: "#7B6F96", marginTop: "4px" },
  section: { marginBottom: "2.5rem" },
  sectionTitle: { fontSize: "18px", fontWeight: 700, color: "#2D2640", marginBottom: "1rem" },
  strengthGrid: { display: "flex", flexDirection: "column", gap: "6px" },
  strengthCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "12px", padding: "0.75rem 1rem", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", color: "#4A3F60" },
  strengthText: { lineHeight: 1.5 },
  targetGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" },
  targetCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "16px", padding: "1.25rem", textAlign: "center", boxShadow: "0 2px 12px rgba(120,100,200,0.04)" },
  targetIcon: { fontSize: "28px", marginBottom: "6px" },
  targetCompany: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "4px" },
  targetFit: { fontSize: "11px", color: "#7B6F96", lineHeight: 1.4 },
  phases: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" },
  phaseCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "16px", overflow: "hidden" },
  phaseHeader: { padding: "1rem" },
  phaseNum: { fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#7B6F96" },
  phaseTitle: { fontWeight: 700, fontSize: "16px", color: "#2D2640" },
  phaseHours: { fontSize: "12px", color: "#4A3F60", marginTop: "2px" },
  phaseGoals: { padding: "0.875rem 1rem", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" },
  phaseGoal: { display: "flex", gap: "6px", fontSize: "12px", color: "#4A3F60", lineHeight: 1.4 },
  masterCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem" },
  masterIntro: { fontSize: "14px", color: "#4A3F60", marginBottom: "1.25rem", lineHeight: 1.6 },
  topicGrid: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1.5rem" },
  topicChip: { display: "flex", gap: "8px", fontSize: "13px", color: "#4A3F60", alignItems: "flex-start" },
  masterProjects: { borderTop: "1.5px solid #EDE8FF", paddingTop: "1.25rem" },
  masterProjectsTitle: { fontWeight: 700, fontSize: "14px", color: "#2D2640", marginBottom: "10px" },
  masterProject: { fontSize: "13px", color: "#4A3F60", padding: "4px 0", borderBottom: "1px solid #F5F2FF" },
  starCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem" },
  starGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "1.5rem" },
  starItem: { borderRadius: "14px", padding: "1rem", textAlign: "center" },
  starLetter: { fontWeight: 700, fontSize: "28px", color: "#2D2640", lineHeight: 1 },
  starLabel: { fontWeight: 700, fontSize: "13px", color: "#2D2640", marginTop: "4px" },
  starDesc: { fontSize: "11px", color: "#4A3F60", marginTop: "4px", lineHeight: 1.4 },
  topicsSection: { borderTop: "1.5px solid #EDE8FF", paddingTop: "1.25rem" },
  topicsLabel: { fontWeight: 700, fontSize: "13px", color: "#2D2640", marginBottom: "8px" },
  topicRow: { display: "flex", gap: "10px", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #F5F2FF" },
  topicNum: { background: "#D4C5F9", color: "#5040A0", fontWeight: 700, fontSize: "11px", width: "20px", height: "20px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
};
