import Section from "@/components/Section";
import { teaching } from "@/content/teaching";
import Link from "next/link";

export default function Page(){
  return (
    <main>
      <Section title="Teaching">
        <p className="text-slate-700 text-sm">Lab Instructor experience: North South University — C programming, Data Structures, DBMS (labs, grading, mentoring).</p>
        <div className="mt-6 space-y-6">
          {teaching.map(term => (
            <div key={term.term} className="card p-4">
              <div className="font-semibold">{term.term}</div>
              <ul className="mt-3 grid md:grid-cols-2 gap-3">
                {term.items.map((i:any) => (
                  <li key={i.title} className="rounded-xl border p-3">
                    <div className="text-sm font-medium">{i.title}</div>
                    <div className="text-xs text-slate-500">{i.note}</div>
                    <Link href={i.link} className="text-xs text-brand-accent">Materials</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
