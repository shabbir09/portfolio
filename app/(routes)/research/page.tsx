import Section from "@/components/Section";
import { research } from "@/content/research";

export default function Page(){
  return (
    <main>
      <Section title="Research">
        <div className="text-sm text-slate-700">Interests: {research.interests.join(", ")}.</div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {research.highlights.map(h => (
            <div key={h.title} className="card p-4">
              <div className="font-medium">{h.title}</div>
              <div className="text-xs text-slate-500">{h.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="font-semibold mb-2">Publications</div>
          <ul className="list-disc pl-5 text-sm">
            {research.publications.map(p => <li key={p.title}>{p.title} — <span className="text-slate-500">{p.venue}</span></li>)}
          </ul>
        </div>
      </Section>
    </main>
  )
}
