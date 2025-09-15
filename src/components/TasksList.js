// import TaskItem from "./TaskItem";

// export default function TasksList({ tasks, toggleTask, deleteTask }) {
//   return (
//     <div className="space-y-2">
//       {tasks.length === 0 && (
//         <p className="text-gray-400 text-center">No tasks yet ✅</p>
//       )}
//       {tasks.map(task => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           toggleTask={toggleTask}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </div>
//   );
// }
import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function TaskList({ tasks, setTasks }) {
  const priorityColors = {
    High: "border-red-400",
    Medium: "border-yellow-300",
    Low: "border-green-300",
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  const markAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    updatedTasks[index].completedDate = new Date().toLocaleDateString();
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-yellow-50 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <span className="text-yellow-500">⋮</span> Your Tasks
        </h2>
        <span className="text-gray-400 text-sm">Drag to reorder</span>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="space-y-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={index} draggableId={`task-${index}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex flex-col p-4 rounded-lg bg-white border-l-4 ${priorityColors[task.priority]} shadow-sm`}
                    >
                      <div className="flex items-center justify-between">
                        <h3
                          className={`${
                            task.completed ? "line-through text-gray-400" : ""
                          } font-medium`}
                        >
                          {task.title}
                        </h3>
                        <span
                          className={`capitalize text-sm px-2 py-1 rounded-full ${
                            task.priority === "High"
                              ? "bg-red-100 text-red-700"
                              : task.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {task.priority.toLowerCase()}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                        {task.deadline && (
                          <div className="flex items-center gap-1">
                            <span>⏰</span>
                            <span>Due: {task.deadline}</span>
                          </div>
                        )}
                        {task.duration && (
                          <div className="flex items-center gap-1">
                            <span>⏱️</span>
                            <span>{task.duration}</span>
                          </div>
                        )}
                        {task.completed && (
                          <div className="flex items-center gap-1 text-green-600">
                            <span>✅</span>
                            <span>Completed {task.completedDate}</span>
                          </div>
                        )}
                      </div>

                      {/* Done & Delete buttons */}
                      <div className="flex gap-2 mt-2">
                        {!task.completed && (
                          <button
                            onClick={() => markAsDone(index)}
                            className=" text-black px-3 py-1 rounded hover:bg-green-600 border black border-2"
                          >
                            Done✅
                          </button>
                        )}
                        <button
                          onClick={() => deleteTask(index)}
                          className=" text-black px-3 py-1 rounded hover:bg-red-600 border black border-2"
                        >
                          Delete🗑️
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
