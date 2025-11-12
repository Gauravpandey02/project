export default function Alerts({ alerts }) {
  return (
    <div className="card">
      <h2>Alerts</h2>
      {alerts.map((a) => (
        <div key={a.id} className="alert">{a.text}</div>
      ))}
    </div>
  );
}
