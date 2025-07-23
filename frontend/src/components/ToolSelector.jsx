import React from "react";
export default function ToolSelector({ selectedTool, onSelect }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Select Tool:</label>
      <select
        value={selectedTool}
        onChange={(e) => onSelect(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      >
        <option value="image">Image to Text</option>
        <option value="pdf">PDF to Text</option>
      </select>
    </div>
  );
}