import Section from "@/components/Section";
import { watching } from "@/content/watching";
import Link from "next/link";

export default function Page(){
  return (
    <main>
      <Section title="Watching">
        <ul className="space-y-3">
          {watching.map(w => (
            <li key={w.title} className="card p-4">
              <div className="font-medium">{w.title}</div>
              <div className="text-xs text-slate-500">{w.note}</div>
              <Link href={w.link} className="text-xs text-brand-accent">Open</Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
