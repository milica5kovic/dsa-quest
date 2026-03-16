// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Plan from "./pages/Plan";
import Worksheets from "./pages/Worksheets";
import Problems from "./pages/Problems";
import Visualizer from "./pages/Visualizer";
import Career from "./pages/Career";
import { useProgress } from "./hooks/useProgress";

export default function App() {
  const { progress, loading, firebaseOk, toggleProblem, toggleTask, toggleWorksheet, logDay, clearDay } = useProgress();

  if (loading) {
    return (
      <div style={splashStyle}>
        <div style={splashCard}>
          <div style={splashLogo}>⚔️</div>
          <div style={splashTitle}>DSA<span style={{ color: "#A08FD6" }}>Quest</span></div>
          <div style={splashSub}>Your 4-month DSA preparation journey</div>
          <div style={splashFeatures}>
            {[
              { icon: "💻", text: "LeetCode problems tracked" },
              { icon: "📊", text: "XP & level system" },
              { icon: "🔥", text: "Daily streak" },
              { icon: "🎬", text: "Algorithm visualizer" },
            ].map(f => (
              <div key={f.text} style={splashFeature}>
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div style={splashSpinnerRow}>
            <div style={spinnerStyle} />
            <span style={splashLoading}>Loading your quest...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Nav xp={progress?.xp || 0} level={progress?.level || 1} streak={progress?.streak || 0} />
      {!firebaseOk && (
        <div style={warnStyle}>
          ⚠️ Supabase nije povezan — podaci se čuvaju samo lokalno i mogu nestati. Provjeri konzolu (F12).
        </div>
      )}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard progress={progress} toggleTask={toggleTask} logDay={logDay} clearDay={clearDay} />} />
          <Route path="/plan" element={<Plan progress={progress} />} />
          <Route path="/worksheets" element={<Worksheets progress={progress} toggleWorksheet={toggleWorksheet} />} />
          <Route path="/problems" element={<Problems progress={progress} toggleProblem={toggleProblem} toggleTask={toggleTask} />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const warnStyle = { background: "#FFF3C2", borderBottom: "1.5px solid #E8C840", padding: "8px 1.5rem", fontSize: "12px", fontWeight: 600, color: "#7A5800", fontFamily: "'Sora', sans-serif" };

const splashStyle = { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "linear-gradient(135deg, #FAF8FF 0%, #EDE8FF 100%)", fontFamily: "'Sora', sans-serif", padding: "1rem" };
const splashCard = { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", border: "1.5px solid #EDE8FF", borderRadius: "28px", padding: "2.5rem 2rem", maxWidth: "380px", width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(120,100,200,0.15)" };
const splashLogo = { fontSize: "52px", lineHeight: 1, marginBottom: "10px" };
const splashTitle = { fontSize: "32px", fontWeight: 700, color: "#2D2640", letterSpacing: "-0.5px", marginBottom: "6px" };
const splashSub = { fontSize: "13px", color: "#7B6F96", marginBottom: "1.75rem" };
const splashFeatures = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "2rem" };
const splashFeature = { display: "flex", alignItems: "center", gap: "7px", background: "#F5F2FF", borderRadius: "10px", padding: "9px 11px", fontSize: "12px", color: "#4A3F60", textAlign: "left", fontWeight: 500 };
const splashSpinnerRow = { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" };
const spinnerStyle = { width: "20px", height: "20px", border: "2.5px solid #EDE8FF", borderTopColor: "#A08FD6", borderRadius: "50%", animation: "spin 0.8s linear infinite", flexShrink: 0 };
const splashLoading = { fontSize: "13px", color: "#A89EC0" };

const st = document.createElement("style");
st.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(st);