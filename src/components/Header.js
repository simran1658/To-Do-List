export default function Header() {
  return (
    <header className="text-center py-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 tracking-wide drop-shadow-md">
        TaskMaster Pro
      </h1>
      <p className="text-gray-700 mt-2 text-lg md:text-xl">
        Organize, prioritize, and track your tasks effortlessly for maximum productivity
      </p>
      <div className="mt-4 flex justify-center gap-6 flex-wrap text-gray-600 text-sm md:text-base">
        <span className="px-3 py-1 bg-gray-100 rounded-full shadow-sm">Task Prioritization</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full shadow-sm">Deadline Tracking</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full shadow-sm">Progress Overview</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full shadow-sm">Smart Insights</span>
      </div>
    </header>
  );
}
