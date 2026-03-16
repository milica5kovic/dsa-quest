// src/components/Nav.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: "⚡" },
  { to: "/plan", label: "Plan", icon: "📅" },
  { to: "/worksheets", label: "Worksheets", icon: "📝" },
  { to: "/problems", label: "Problems", icon: "💻" },
  { to: "/visualizer", label: "Visualizer", icon: "🎬" },
  { to: "/career", label: "Career", icon: "🚀" },
];

export default function Nav({ xp, level }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>
          <span>⚔️</span>
          <span>DSA<span style={{ color: "#A08FD6" }}>Quest</span></span>
        </Link>

        <div style={styles.links}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ ...styles.link, ...(location.pathname === l.to ? styles.linkActive : {}) }}>
              <span>{l.icon}</span> {l.label}
            </Link>
          ))}
        </div>

        <div style={styles.xpPill}>
          <span>⭐</span>
          <span style={{ color: "#A08FD6" }}>{xp} XP</span>
          <span style={{ color: "#7B6F96" }}>Lv.{level}</span>
        </div>

        <button style={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ ...styles.mobileLink, ...(location.pathname === l.to ? styles.mobileLinkActive : {}) }} onClick={() => setMenuOpen(false)}>
              {l.icon} {l.label}
            </Link>
          ))}
          <div style={{ ...styles.xpPill, margin: "1rem auto 0", width: "fit-content" }}>
            ⭐ {xp} XP · Lv.{level}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          nav > div:nth-child(2) { display: none !important; }
          nav > button { display: flex !important; align-items: center; }
          nav > div:nth-child(3) { display: none !important; }
        }
      `}</style>
    </>
  );
}

const styles = {
  nav: { position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,255,0.85)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #EDE8FF", display: "flex", alignItems: "center", gap: "1rem", padding: "0 1.5rem", height: "60px" },
  logo: { display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "18px", color: "#2D2640", textDecoration: "none", marginRight: "0.5rem", whiteSpace: "nowrap" },
  links: { display: "flex", gap: "2px", flex: 1, flexWrap: "wrap" },
  link: { display: "flex", alignItems: "center", gap: "5px", padding: "6px 10px", borderRadius: "8px", fontSize: "12px", fontWeight: 500, color: "#7B6F96", textDecoration: "none", transition: "all 0.15s", whiteSpace: "nowrap" },
  linkActive: { background: "#EDE8FF", color: "#2D2640", fontWeight: 600 },
  xpPill: { display: "flex", alignItems: "center", gap: "5px", background: "#EDE8FF", border: "1.5px solid #D4C5F9", borderRadius: "999px", padding: "4px 12px", fontSize: "12px", fontWeight: 600, color: "#2D2640", whiteSpace: "nowrap" },
  burger: { display: "none", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#2D2640", padding: "4px" },
  mobileMenu: { position: "fixed", top: "60px", left: 0, right: 0, background: "rgba(250,248,255,0.97)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #EDE8FF", padding: "1rem", display: "flex", flexDirection: "column", gap: "4px", zIndex: 99 },
  mobileLink: { display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "10px", fontSize: "15px", fontWeight: 500, color: "#7B6F96", textDecoration: "none" },
  mobileLinkActive: { background: "#EDE8FF", color: "#2D2640", fontWeight: 600 },
};