"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/teaching", label: "Teaching" },
  { href: "/research", label: "Research" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/reading", label: "Reading" },
  { href: "/watching", label: "Watching" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Shabbir Ahmed</Link>
        <nav className="hidden md:flex gap-5 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={
              "hover:text-brand-accent " + (pathname===n.href ? "text-brand-accent font-medium" : "text-slate-700")
            }>{n.label}</Link>
          ))}
        </nav>
        <Link href="/Shabbir_Ahmed_CV.pdf" className="px-3 py-1.5 rounded-full bg-brand-accent text-white text-sm shadow">Download CV</Link>
      </div>
    </header>
  )
}
