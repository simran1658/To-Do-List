export default function CompletionOverview({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <h3 className="font-semibold text-gray-700">📊 Completion Overview</h3>
      <p className="text-orange-500 font-bold text-xl">{percent}%</p>
      <p className="text-gray-400 text-sm">{done} of {total} tasks completed</p>
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
