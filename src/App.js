import React, { useState } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SuggestionsBox from "./components/SuggestionBox";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import AchievementStatus from "./components/AchievementStatus";
import CompletionOverview from "./components/CompletionOverview";
import WeeklyProgress from "./components/WeeklyProgress";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
      setTasks([
        ...tasks,
        {
          ...task,
          id: Date.now(),          // unique id
          completed: false         // default completed state
        },
      ]);
    };


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <StatsBar tasks={tasks} />
          <SuggestionsBox />
          <TaskForm addTask={addTask} />
          <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="space-y-6">
          <AchievementStatus tasks={tasks} />
          <CompletionOverview tasks={tasks} />
          <WeeklyProgress tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
