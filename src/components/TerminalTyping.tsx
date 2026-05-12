"use client";

import { useState, useEffect } from "react";

interface TerminalTypingProps {
  lines: string[];
  className?: string;
}

export default function TerminalTyping({ lines, className = "" }: TerminalTypingProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] || "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      {displayed.slice(0, currentLine).map((line, i) => (
        <div key={i} className="flex items-start gap-2 mb-1">
          <span className="text-neon-green select-none">›</span>
          <span className="text-slate-400">{line}</span>
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="flex items-start gap-2 mb-1">
          <span className="text-neon-green select-none">›</span>
          <span className="text-slate-400">
            {displayed[currentLine] || ""}
            <span className="text-neon-green animate-[blink_1s_step-end_infinite]">█</span>
          </span>
        </div>
      )}
    </div>
  );
}
