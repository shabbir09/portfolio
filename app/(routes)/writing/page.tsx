import Section from "@/components/Section";
import { posts } from "@/content/writing";
import Image from "next/image";

export default function Page(){
  return (
    <main>
      <Section title="Writing">
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map(p => (
            <article key={p.title} className="card overflow-hidden">
              <div className="relative h-40 w-full bg-slate-100"><Image src={p.image} alt="" fill className="object-cover"/></div>
              <div className="p-4">
                <div className="font-medium">{p.title}</div>
                <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
