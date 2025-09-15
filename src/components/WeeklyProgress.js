import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function WeeklyProgress({ tasks }) {
  const today = new Date();

  // Last 7 days as Date objects
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    return d;
  }).reverse();

  const data = days.map((day) => {
    const dayStr = day.toISOString().slice(0, 10); // YYYY-MM-DD for filtering
    const count = tasks.filter((task) => task.deadline === dayStr && task.completed).length;
    return {
      day: day.toLocaleDateString("en-US", { weekday: "short" }), // Mon, Tue, ...
      completed: count,
    };
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 max-w-xs mx-auto">
      <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
        <FaRegCalendarAlt className="text-blue-500" />
        <span>Weekly Progress</span>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks completed yet</p>
      ) : (
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data}>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#555" }}
            />
            <YAxis hide /> {/* Hide y-axis for cleaner look */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              formatter={(value) => [`${value} task(s)`, "Completed"]}
            />
            <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
