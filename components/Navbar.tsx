"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import TypingLogo from "./TypingLogo";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/teaching", label: "Teaching" },
  { href: "/research", label: "Research" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/watching", label: "Watching" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
          <Link href="/" className="flex items-center">
                <TypingLogo />
          </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-200">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-1 hover:text-white transition"
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-brand-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CV button */}
        <Link
          href="/Shabbir_Ahmed_CV.pdf"
          className="hidden md:inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-accent to-cyan-500 text-white text-sm font-medium shadow hover:scale-105 transition"
        >
          Download CV
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md p-2 text-slate-200 hover:bg-white/10"
        >
          <span className="sr-only">Toggle Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-col items-center gap-4 py-6 md:hidden text-slate-200 border-t border-white/10"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-2 text-lg ${
                pathname === item.href ? "text-brand-accent font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Shabbir_Ahmed_CV.pdf"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent to-cyan-500 text-white font-medium"
          >
            Download CV
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
