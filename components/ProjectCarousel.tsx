"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "@/content/projects";

export default function ProjectCarousel() {
  const allProjects = Object.values(projects).flat();

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      loop
      autoplay={{ delay: 2600, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 18,
        stretch: 0,
        depth: 160,
        modifier: 1.2,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
      className="w-full max-w-6xl py-16"
    >
      {allProjects.map((p: any) => (
        <SwiperSlide key={p.title} className="max-w-[320px]">
          <div className="group relative h-full rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md transition hover:border-violet-400/30 hover:shadow-violet-500/20">
            {/* Shine overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -inset-[200%] animate-[shine_6s_linear_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <h3 className="relative z-10 text-lg font-semibold">{p.title}</h3>
            <p className="relative z-10 mt-2 text-sm text-slate-200">{p.desc}</p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tags.map((t: string) => (
                <span
                  key={t}
                  className="rounded-full border border-violet-400/30 bg-violet-500/20 px-2 py-1 text-xs text-violet-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
