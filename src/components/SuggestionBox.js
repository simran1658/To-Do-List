import { useState } from "react";

export default function SuggestionsBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-50 rounded-xl shadow p-4">
      <button
        className="w-full text-left font-semibold text-blue-600"
        onClick={() => setOpen(!open)}
      >
        💡 AI Smart Suggestions {open ? "▲" : "▼"}
      </button>
      {open && (
        <ul className="mt-2 text-gray-600 text-sm list-disc pl-5 space-y-1">
          <li>Finish high priority tasks first.</li>
          <li>Break down big tasks into small chunks.</li>
          <li>Plan your day in advance.</li>
        </ul>
      )}
    </div>
  );
}
