export default function StatsBar({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;
  const highPriority = tasks.filter(t => t.priority === "High").length;
  const pending = tasks.length - completed;
  const points = completed * 10 + highPriority * 5;

  const stats = [
    { label: "Points", value: points, color: "text-orange-500" },
    { label: "Completed", value: completed, color: "text-green-500" },
    { label: "Pending", value: pending, color: "text-blue-500" },
    { label: "High Priority", value: highPriority, color: "text-red-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-white shadow p-4 flex flex-col items-center"
        >
          <span className={`text-2xl font-bold ${s.color}`}>{s.value}</span>
          <span className="text-gray-500 text-sm">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
