export default function AchievementStatus({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;
  const points = completed * 10;
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-gray-700">🏆 Achievement Status</h3>
      <p className="text-orange-500 font-bold">{points} pts</p>
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          className="h-2 bg-orange-500 rounded"
          style={{ width: `${Math.min(points/50*100,100)}%` }}
        />
      </div>
      <p className="text-sm text-gray-400 mt-1">
        Progress to next level: {points}/50
      </p>
    </div>
  );
}
