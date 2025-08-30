import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Page(){
  return (
    <main>
      <Section title="Projects / Showcase">
        {Object.entries(projects).map(([cat, items]) => (
          <div key={cat} className="mt-6">
            <div className="text-sm font-semibold">{cat}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
              {(items as any[]).map((p) => <ProjectCard key={p.title} {...p} />)}
            </div>
          </div>
        ))}
      </Section>
    </main>
  )
}
