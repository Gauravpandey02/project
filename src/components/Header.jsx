import React from "react";
import "./Header.css";

export default function Header({ dark, toggleTheme }) {
  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <div className="header-content">
        <h1>SmartHome Guardian</h1>
        <p className="tagline">Monitor • Visualize • Control</p>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
