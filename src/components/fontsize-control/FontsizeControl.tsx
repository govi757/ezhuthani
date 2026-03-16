"use client";

import { useState, useEffect } from "react";

export default function FontSizeControl() {
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    const content = document.getElementById("reading-content");
    if (content) {
      content.style.fontSize = fontSize + "px";
    }
  }, [fontSize]);

  return (
    <div className="flex items-center gap-2 text-gray-600">
      <button
        onClick={() => setFontSize((f) => Math.max(f - 2, 14))}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        A-
      </button>

      <button
        onClick={() => setFontSize((f) => Math.min(f + 2, 26))}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        A+
      </button>
    </div>
  );
}