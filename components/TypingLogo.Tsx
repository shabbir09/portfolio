"use client";
import { useState, useEffect } from "react";

export default function TypingLogo() {
  const [text, setText] = useState("");
  const fullText = "Shabbir Ahmed";
  const speed = 120;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
      {text}
    </span>
  );
}
