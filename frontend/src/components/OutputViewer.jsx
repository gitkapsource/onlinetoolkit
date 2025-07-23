import React from "react";
export default function OutputViewer({ text }) {
  return (
    <div className="mt-4">
      <label className="block mb-1 font-medium">Extracted Text:</label>
      <textarea
        value={text}
        readOnly
        rows={10}
        className="w-full border rounded p-2 text-sm bg-gray-100"
      />
    </div>
  );
}