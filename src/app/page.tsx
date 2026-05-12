import dynamic from "next/dynamic";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), { ssr: false });
const GlitchText = dynamic(() => import("@/components/GlitchText"), {
  ssr: false,
  loading: () => <span className="font-mono text-white text-5xl md:text-7xl font-bold">hello, world.</span>,
});
const TerminalTyping = dynamic(() => import("@/components/TerminalTyping"), { ssr: false });

const featuredProjects = [
  {
    title: "Corne v3 Split Keyboard Build",
    description: "Building a 3x6 corne split keyboard from soldering to firmware",
    tech: ["Soldering", "ZMK"],
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

const terminalLines = [
  "whoami",
  "lucas fiorini — senior machine learning scientist",
  "cat interests.txt",
  "modeling, ML, open source, statistics",
  "ls projects/",
  "corne v3/  neovim config/  ...",
];

export default function Home() {
  return (
    <>
      <ParticleCanvas />

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-slate-500 font-mono text-sm mb-6 tracking-widest uppercase">lucas fiorini — ml scientist</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <GlitchText text="experiments," className="text-white text-5xl md:text-7xl font-bold" />
            <br />
            <span className="text-neon-green">builds & notes.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Machine learning, data experiments, the occasional keyboard build —{" "}
            <span className="text-neon-cyan">things worth documenting.</span>
          </p>

          <div className="bg-dark-800/80 backdrop-blur-sm border border-neon-green/20 rounded-lg overflow-hidden mb-12 max-w-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neon-green/10 bg-dark-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-slate-600">terminal</span>
            </div>
            <div className="p-4">
              <TerminalTyping lines={terminalLines} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group bg-neon-green/10 hover:bg-neon-green/20 border border-neon-green/40 hover:border-neon-green text-neon-green px-6 py-3 rounded text-sm font-medium transition-all duration-200"
            >
              view projects <span className="group-hover:ml-1 transition-all">→</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neon-green/40 to-transparent animate-pulse" />
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-neon-green font-mono text-sm">01.</span>
          <h2 className="text-2xl font-bold text-white">featured projects</h2>
          <div className="flex-1 h-px bg-neon-green/10" />
          <Link href="/projects" className="text-sm text-slate-500 hover:text-neon-green transition-colors">
            view all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-neon-green/10 py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-neon-green font-mono text-sm">02.</span>
            <h2 className="text-2xl font-bold text-white">stack</h2>
            <div className="flex-1 h-px bg-neon-green/10" />
          </div>
          <div className="flex flex-wrap gap-3">
            {["Python", "Machine Learning", "MLFlow", "Kedro", "Databricks", "Azure", "SQL", "PySpark", "A/B Testing"].map((skill) => (
              <span
                key={skill}
                className="text-sm bg-dark-700/50 border border-neon-green/10 hover:border-neon-green/30 hover:text-neon-green text-slate-400 rounded px-3 py-1.5 cursor-default transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
