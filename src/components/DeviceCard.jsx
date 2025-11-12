import React from "react";
import "./DeviceCard.css";

export default function DeviceCard({ device, onToggle }) {
  return (
    <div className="device-card">
      <h3>{device.name}</h3>
      <div className="data-toggles">
        {Object.entries(device.dataTypes).map(([key, value]) => (
          <label key={key}>
            <input
              type="checkbox"
              checked={value}
              onChange={() => onToggle(device.id, key)}
            />
            {key}
          </label>
        ))}
      </div>
      <p className="timestamp">
        Last transmission: {new Date(device.lastTransmission).toLocaleTimeString()}
      </p>
    </div>
  );
}
