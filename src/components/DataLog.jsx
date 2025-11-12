import React from "react";
import "./DataLog.css";

export default function DataLog({ logs }) {
  return (
    <div className="data-log">
      <h2>📜 Data Activity Log</h2>
      <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>Data Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.device}</td>
              <td>{log.type}</td>
              <td>{new Date(log.time).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
