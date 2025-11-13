import React, { useState, useEffect } from "react";
import DeviceCard from "./DeviceCard";
import DataLog from "./DataLog";
import "./Dashboard.css";

export default function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error("Error fetching devices:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/api/devices")
        .then(res => res.json())
        .then(data => setDevices(data))
        .catch(err => console.error("Error updating devices:", err));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (id, key) => {
    const updated = devices.map((d) => {
      if (d.id === id) {
        const newVal = !d.dataTypes[key];
        setLogs(prev => [
          ...prev,
          { device: d.name, type: key, time: new Date().toISOString() },
        ]);
        return {
          ...d,
          dataTypes: { ...d.dataTypes, [key]: newVal },
        };
      }
      return d;
    });
    setDevices(updated);
  };

  return (
    <div className="dashboard">
      <h2>Device Overview</h2>
      <div className="device-grid">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} onToggle={handleToggle} />
        ))}
      </div>
      <DataLog logs={logs} />
    </div>
  );
}
