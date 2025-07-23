import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import ToolSelector from "../components/ToolSelector";
import OutputViewer from "../components/OutputViewer";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState("image");
  const [extractedText, setExtractedText] = useState("");

  const handleFileSelect = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const endpoint = selectedTool === "image" ? "/ocr/image" : "/ocr/pdf";

    const res = await fetch(`https://ocr-backend-mpmb.onrender.com${endpoint}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setExtractedText(data.text || "No text found.");
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <ToolSelector selectedTool={selectedTool} onSelect={setSelectedTool} />
      <FileUploader onFileSelect={handleFileSelect} />
      <OutputViewer text={extractedText} />
    </div>
  );
}
