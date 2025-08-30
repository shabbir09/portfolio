"use client";

import Link from "next/link";

export default function ProjectCard({
  title,
  desc,
  tags,
  href,
}: {
  title: string;
  desc: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href} className="block card p-5 hover:shadow-lg transition">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-slate-100 border"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

