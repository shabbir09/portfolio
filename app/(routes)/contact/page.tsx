"use client";
import Section from "@/components/Section";
import { useState } from "react";

export default function Page(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:shabbir.ahmad1994@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <Section title="Contact">
        <p className="text-sm text-slate-700 mb-4">For roles, collaborations, or tutoring inquiries.</p>
        <form onSubmit={submit} className="card p-5 max-w-xl">
          <label className="text-sm">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 mb-3 w-full rounded-2xl border px-3 py-2"/>
          <label className="text-sm">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 mb-3 w-full rounded-2xl border px-3 py-2"/>
          <label className="text-sm">Message</label>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-1 mb-4 w-full rounded-2xl border px-3 py-2" rows={5}/>
          <button className="px-4 py-2 rounded-2xl bg-brand-accent text-white">Send</button>
        </form>
      </Section>
    </main>
  )
}
