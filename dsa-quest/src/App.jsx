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
  const { progress, loading, toggleProblem, toggleTask, toggleWorksheet, logDay, clearDay } = useProgress();

  if (loading) {
    return (
      <div style={loadingStyle}>
        <div style={spinnerStyle} />
        <p style={{ color: "#A89EC0", fontFamily: "'Sora', sans-serif", fontSize: "14px", marginTop: "1rem" }}>
          Loading your quest...
        </p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Nav xp={progress?.xp || 0} level={progress?.level || 1} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard progress={progress} logDay={logDay} clearDay={clearDay} />} />
          <Route path="/plan" element={<Plan progress={progress} />} />
          <Route path="/worksheets" element={<Worksheets progress={progress} toggleWorksheet={toggleWorksheet} />} />
          <Route path="/problems" element={<Problems progress={progress} toggleProblem={toggleProblem} />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const loadingStyle = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#FAF8FF" };
const spinnerStyle = { width: "40px", height: "40px", border: "3px solid #EDE8FF", borderTopColor: "#A08FD6", borderRadius: "50%", animation: "spin 0.8s linear infinite" };
const st = document.createElement("style");
st.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(st);