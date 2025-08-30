import Link from "next/link";

export default function Footer(){
  const socials = [
    { href: "mailto:shabbir.ahmad1994@gmail.com", label: "Email" },
    { href: "https://github.com/shabbir09", label: "GitHub" },
    { href: "https://www.linkedin.com/in/shabbir-ahmed09/", label: "LinkedIn" }
  ];
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center md:justify-between gap-3">
        <div>© {new Date().getFullYear()} Shabbir Ahmed — Dhaka, Bangladesh</div>
        <div className="flex gap-4 flex-wrap">
          {socials.map(s => <Link key={s.href} href={s.href} className="hover:text-brand-accent">{s.label}</Link>)}
        </div>
      </div>
    </footer>
  )
}
