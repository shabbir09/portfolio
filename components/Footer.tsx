import Link from "next/link";

export default function Footer() {
  const socials = [
    { href: "mailto:shabbir.ahmad1994@gmail.com", label: "Email" },
    { href: "https://github.com/shabbir09", label: "GitHub" },
    { href: "https://www.linkedin.com/in/shabbir-ahmed09/", label: "LinkedIn" },
  ];

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0a0b0f]/80 backdrop-blur-lg">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 py-8 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Shabbir Ahmed. All Rights Reserved.</p>
        <div className="flex gap-6">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="hover:text-white transition"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
