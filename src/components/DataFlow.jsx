import React, { useEffect, useState } from "react";
import { mockDevices } from "../data/mockDevices";
import "./DataFlow.css";

export default function DataFlow() {
  const [activeDevice, setActiveDevice] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDevice =
        mockDevices[Math.floor(Math.random() * mockDevices.length)];
      setActiveDevice(randomDevice.id);
      setTimeout(() => setActiveDevice(null), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dataflow">
      <h2>🌐 Real-Time Data Flow</h2>
      <div className="flow-container">
        {mockDevices.map((device) => (
          <div
            key={device.id}
            className={`device-node ${
              activeDevice === device.id ? "active" : ""
            }`}
          >
            <div className="device-icon">📡</div>
            <p>{device.name}</p>
            <div className="arrow">➡️</div>
            <div className="cloud-node">☁️ Cloud</div>
          </div>
        ))}
      </div>
    </div>
  );
}
