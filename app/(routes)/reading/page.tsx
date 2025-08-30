import Section from "@/components/Section";
import { reading } from "@/content/reading";
import Link from "next/link";

export default function Page(){
  return (
    <main>
      <Section title="Reading">
        <ul className="space-y-3">
          {reading.map(r => (
            <li key={r.title} className="card p-4">
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-slate-500">{r.note}</div>
              <Link href={r.link} className="text-xs text-brand-accent">Open</Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
