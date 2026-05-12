"use client";

import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = text.length * 3;

      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iterations / 3) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iterations++;
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayed(text);
          setIsGlitching(false);
        }
      }, 30);
    };

    triggerGlitch();
    const loop = setInterval(triggerGlitch, 5000);
    return () => clearInterval(loop);
  }, [text]);

  return (
    <span className={`font-mono ${isGlitching ? "animate-pulse" : ""} ${className}`}>
      {displayed}
    </span>
  );
}
