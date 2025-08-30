import Section from "@/components/Section";

export default function Page(){
  const services = [
    { title: "AI Chatbots & Assistants", detail: "Sales/support bots with retrieval, tools and actions." },
    { title: "AI SaaS / SWaaS", detail: "From prototype to deployable MVP with auth, billing, dashboards." },
    { title: "Automation", detail: "n8n/Zapier-style pipelines integrated with your stack." }
  ];
  const cases = [
    { title: "Orion AI — Lead Qualifier", detail: "Website widget that captures leads and syncs to CRM." },
    { title: "Orion AI — Content Agent", detail: "Automates metadata, scheduling, and comment triage." }
  ];
  return (
    <main>
      <Section title="Work — Orion AI (Founder)">
        <p className="text-sm text-slate-700">I help teams ship practical AI automations and SWaaS products.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {services.map(s => (
            <div key={s.title} className="card p-4">
              <div className="font-medium">{s.title}</div>
              <div className="text-xs text-slate-500">{s.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="font-semibold mb-2">Sample Case Studies</div>
          <div className="grid md:grid-cols-2 gap-4">
            {cases.map(c => (
              <div key={c.title} className="card p-4">
                <div className="font-medium">{c.title}</div>
                <div className="text-xs text-slate-500">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
