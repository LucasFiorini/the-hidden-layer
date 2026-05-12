"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  slug?: string;
  status?: "active" | "archived" | "wip";
  index: number;
  image?: string;
  imageFlipX?: boolean;
  imageRotate?: "-90" | "90";
}

const statusColors = {
  active: "text-neon-green border-neon-green/30",
  wip: "text-yellow-400 border-yellow-400/30",
  archived: "text-slate-500 border-slate-500/30",
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  slug,
  status = "active",
  index,
  image,
  imageFlipX,
  imageRotate,
}: ProjectCardProps) {
  const externalHref = live || github;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative bg-dark-700/50 neon-border rounded-lg overflow-hidden transition-all duration-300 hover:bg-dark-700/80 cursor-pointer block h-full"
    >
      {image && (
        <div className="relative w-full h-32 overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className={`transition-all duration-500${imageRotate ? ` ${imageRotate === "-90" ? "-rotate-90" : "rotate-90"} w-[45%] h-auto` : " w-full h-full object-cover group-hover:scale-105"}${imageFlipX ? " -scale-x-100" : ""}`}
          />
        </div>
      )}

      <div className="p-6">
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
          <div className="absolute top-0 right-0 w-px h-8 bg-neon-green" />
          <div className="absolute top-0 right-0 w-8 h-px bg-neon-green" />
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
          <div className="absolute bottom-0 left-0 w-px h-8 bg-neon-cyan" />
          <div className="absolute bottom-0 left-0 w-8 h-px bg-neon-cyan" />
        </div>

        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-neon-green font-bold text-lg group-hover:text-neon-cyan transition-colors">
              {title}
            </span>
          </div>
          {status && (
            <span className={`text-xs border rounded px-2 py-0.5 ${statusColors[status]}`}>
              {status}
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-dark-800/80 text-neon-cyan/70 border border-neon-cyan/20 rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-xs">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-neon-green transition-colors flex items-center gap-1"
            >
              <span>⎇</span> source
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 hover:text-neon-cyan transition-colors flex items-center gap-1"
            >
              <span>↗</span> live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (slug) {
    return <Link href={`/projects/${slug}`} className="block">{card}</Link>;
  }

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return <div className="block">{card}</div>;
}
