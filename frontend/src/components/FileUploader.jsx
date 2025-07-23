import React, { useRef } from "react";
export default function FileUploader({ onFileSelect }) {
  const fileInputRef = useRef();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileSelect(file);
  };
  return (
    <div className="mb-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.pdf"
        className="block w-full text-sm text-gray-700"
      />
    </div>
  );
}