import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Home(){
  return (
    <main className="gradient">
      <section className="container pt-10 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI Automation • Bots • Webapps</h1>
          <div className="mt-3 text-xl">I build <AnimatedText items={["AI automations","bots","SaaS tools","teaching resources"]}/> that ship.</div>
          <p className="mt-4 text-slate-600">AI Automation Engineer • Educator • Builder of AI-powered Software/Solution</p>
          <div className="mt-6 flex gap-3">
            <Link href="/Shabbir_Ahmed_CV.pdf" className="px-4 py-2 rounded-2xl bg-brand-accent text-white text-sm">Download CV</Link>
            <Link href="#projects" className="px-4 py-2 rounded-2xl border text-sm">See Projects</Link>
          </div>
        </div>
        <div className="justify-self-center">
          <Image src="/profile.jpg" alt="Shabbir Ahmed" width={420} height={520} className="rounded-3xl border"/>
        </div>
      </section>

      <Section title="Featured Projects">
        <div id="projects" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(projects).flat().slice(0,3).map((p:any)=>(
            <ProjectCard key={p.title} {...p}/>
          ))}
        </div>
      </Section>
    </main>
  )
}
