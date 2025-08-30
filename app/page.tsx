"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import ParticlesBG from "@/components/ParticlesBG";
import Magnetic from "@/components/Magnetic";
import Section from "@/components/Section";
import ProjectCarousel from "@/components/ProjectCarousel";
// import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main className="relative min-h-[100svh] overflow-clip bg-[#0a0b0f] text-white">
      {/* Dynamic Background */}
      <ParticlesBG />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_30%,rgba(124,58,237,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_20%_at_80%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(20%_10%_at_20%_80%,rgba(34,197,94,0.14),transparent_60%)]" />

      {/* HERO */}
      <section className="relative z-10 container grid min-h-[92svh] items-center gap-10 pt-20 md:grid-cols-2 md:gap-12">
        {/* Left: intro */}
        <div className="flex flex-col justify-center gap-6">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-balance text-4xl font-bold leading-tight md:text-6xl"
          >
            Building <span className="text-gradient">AI automations</span>,{" "}
            <span className="text-gradient">bots</span> &{" "}
            <span className="text-gradient">webapps</span> that ship.
          </motion.h1>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
            className="text-lg"
          >
            I build{" "}
            <AnimatedText
              items={[
                "AI automations",
                "sales & support agents",
                "SaaS / SWaaS tools",
                "teaching resources",
              ]}
              interval={1600}
            />{" "}
            you can deploy today.
          </motion.div>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.14, duration: 0.6, ease: "easeOut" }}
            className="max-w-xl text-slate-300"
          >
            <span className="font-medium text-slate-200">Shabbir Ahmed</span> — AI
            Automation Engineer, Educator, and Founder of Orion AI. I ship practical,
            production-ready agents and automations that create real value.
          </motion.p>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mt-2 flex flex-wrap gap-4"
          >
            <Magnetic>
              <Link
                href="/Shabbir_Ahmed_CV.pdf"
                className="btn-primary"
                aria-label="Download CV"
              >
                Download CV
              </Link>
            </Magnetic>

            <Magnetic>
              <Link href="/work" className="btn-ghost" aria-label="Know me more">
                Know me more
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right: oval portrait with subtle zoom */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-full border-4 border-violet-500/40 shadow-2xl"
          >
            <Image
              src="/profile.jpg"
              alt="Shabbir Ahmed"
              width={420}
              height={520}
              className="h-[420px] w-[320px] rounded-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects: glassmorphism carousel */}
      <Section title="Projects">
        <div className="flex w-full justify-center">
          <ProjectCarousel />
        </div>
      </Section>
    </main>
  );
}
