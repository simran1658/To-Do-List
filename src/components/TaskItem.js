export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`flex justify-between items-center bg-white rounded-xl shadow p-3 ${task.completed && "opacity-70 line-through"}`}>
      <div>
        <div className="font-semibold">{task.title}</div>
        <div className="text-sm text-gray-500">
          {task.time && <>⏳ {task.time} | </>} 
          {task.deadline && <>📅 {task.deadline}</>} 
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100">{task.priority}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          ❌
        </button>
      </div>
    </div>
  );
}
