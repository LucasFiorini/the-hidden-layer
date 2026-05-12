"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "~/home" },
  { href: "/projects", label: "~/projects" },
  { href: "/about", label: "~/about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-900/90 backdrop-blur-md border-b border-neon-green/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-neon-green font-mono text-lg font-bold tracking-tight">
            <span className="text-slate-500">[</span>
            the hidden layer
            <span className="text-slate-500">]</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-all duration-200 hover:text-neon-green ${
                  pathname === href ? "text-neon-green" : "text-slate-400"
                }`}
              >
                {pathname === href && (
                  <span className="text-neon-green mr-1">›</span>
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-400 hover:text-neon-green transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-neon-green/10"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm block transition-colors hover:text-neon-green ${
                      pathname === href ? "text-neon-green" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
