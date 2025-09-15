import { useState, useRef } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [time, setTime] = useState("");
  const recognitionRef = useRef(null);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, priority, deadline, time });
    setTitle(""); setPriority("Medium"); setDeadline(""); setTime("");
  };

  // Voice input function
  const startVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input not supported in this browser.");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTitle((prev) => prev + " " + spokenText);
    };

    recognitionRef.current.start();
  };

  return (
    <div className="bg-orange-50 p-6 rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-orange-500 text-xl">✨</span> Create New Task
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <div className="relative md:col-span-2">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
  type="button"
  onClick={startVoiceInput}
  className="absolute right-2 top-2 text-orange-500 hover:text-orange-700 p-1 rounded-full hover:bg-orange-100 transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1.5a3 3 0 00-3 3v6a3 3 0 006 0V4.5a3 3 0 00-3-3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12a7.5 7.5 0 01-15 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-4"
    />
  </svg>
</button>


        </div>

        <select
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔴 High Priority</option>
          <option value="Medium">🟡 Medium Priority</option>
          <option value="Low">🟢 Low Priority</option>
        </select>

        <input
          type="date"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <input
          type="time"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          type="submit"
          className="md:col-span-2 bg-orange-400 text-white p-3 rounded-lg font-semibold hover:bg-orange-500 transition-all"
        >
          + Add Task
        </button>
      </form>
    </div>
  );
}
