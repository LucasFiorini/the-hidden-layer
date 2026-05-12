"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { assetPath } from "@/lib/assetPath";

const projects = [
  {
    title: "Corne v3 Build",
    description: "Hand-wired Corne v3 split keyboard with MX switches and custom ZMK firmware.",
    tech: ["QMK", "ZMK"],
    github: "https://github.com",
    slug: "corne",
    status: "active" as const,
    image: assetPath("/images/left.png"),
    imageRotate: "-90" as const,
  },
  {
    title: "My Neovim Configuration",
    description: "All the plugins and configurations of my Neovim setup.",
    tech: ["Lua", "Neovim"],
    status: "wip" as const,
    image: assetPath("/images/nvim.svg"),
  },
  {
    title: "Bayesian A/B Testing",
    description: "Determine if CTA click-through rate increased enough to justify shipping it.",
    tech: ["Stats", "Python"],
    status: "wip" as const,
    image: assetPath("/images/abtesting.png"),
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-green text-sm font-mono">ls ~/projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">projects</h1>
          <p className="text-slate-400 max-w-xl">
            Things I&apos;ve built, am building, or abandoned mid-way because I got a better idea.
          </p>
        </div>

        <div className="flex gap-3 mb-10 text-sm">
          {["all", "active", "wip", "archived"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1.5 rounded border transition-all ${
                filter === "all"
                  ? "bg-neon-green/10 border-neon-green/40 text-neon-green"
                  : "border-slate-700 text-slate-500 hover:border-neon-green/20 hover:text-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
