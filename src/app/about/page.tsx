"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";


export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-end gap-10 mb-16">
          <div className="relative shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl border border-neon-green/20 overflow-hidden shadow-[0_0_60px_-10px_rgba(57,255,20,0.15)]">
            <img src={assetPath("/me.jpeg")} alt="Lucas and his dog" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-neon-green text-sm font-mono">cat ~/about.md</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">about me</h1>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Hey I'm Lucas Fiorini a Machine Learning Scientist that messes around with some weird tech side projects.
              I spend a lot of time learning the guts of computers, hardware and sometimes I go down some rabbit holes (like split keyboards).  
            </p>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-slate-400 leading-relaxed">
            This site is my corner of the internet, a place to share what I'm working on
            and what I'm learning.
          </p>
        </div>

        <div className="bg-dark-700/30 border border-neon-green/10 rounded-lg p-8">
          <h2 className="text-lg font-bold text-white mb-4">get in touch</h2>
          <p className="text-slate-400 text-sm mb-6">
            Always open to interesting conversations, collaborations, or just a chat about tech.
          </p>
          <a
            href="https://www.linkedin.com/in/lucas-fiorini-braga-97b231186/?locale=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/40 hover:border-[#0A66C2] text-[#0A66C2] px-4 py-2 rounded text-sm font-medium transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            linkedin
          </a>
        </div>
      </motion.div>
    </div>
  );
}
