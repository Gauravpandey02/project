import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import DataFlow from "./components/DataFlow";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="app">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <main>
        <DataFlow />
        <Dashboard />
      </main>
    </div>
  );
}
