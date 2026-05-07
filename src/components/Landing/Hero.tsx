"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CaretRight,
  Heart,
  PhoneCall,
} from "@phosphor-icons/react";

const slides = [
  {
    eyebrow: "Featured quote",
    title: "Cultivation of mind should be the ultimate aim of human existence.",
    author: "B.R. Ambedkar",
    role: "Jurist, economist, and social reformer",
    summary:
      "A clean opening slide that highlights the movement's foundation in education, dignity, and equal opportunity.",
    accent: "from-sky-100 via-white to-amber-50",
    badge: "Education first",
    portraitLabel: "B.R. Ambedkar",
    portraitCaption: "A reminder that learning is power.",
    imageSrc: "/left_one.jpeg",
    imageAlt: "B.R. Ambedkar portrait",
    ring: "border-sky-200/80",
    textAccent: "text-sky-700",
  },
  {
    eyebrow: "Law Reporter",
    title: "Law is most effective when people can actually use it.",
    author: "SIAACBC",
    role: "Reports, updates, and practical legal awareness",
    summary:
      "This slide spotlights legal reporting and the need to make rights visible, readable, and accessible.",
    accent: "from-emerald-100 via-white to-cyan-50",
    badge: "Legal awareness",
    portraitLabel: "Law Reporter",
    portraitCaption: "Clear information helps people act sooner.",
    imageSrc: "/left_two.webp",
    imageAlt: "Law reporter and legal awareness visual",
    ring: "border-emerald-200/80",
    textAccent: "text-emerald-700",
  },
  {
    eyebrow: "Combating bias crime",
    title: "Justice has to be active, visible, and collective.",
    author: "Community action",
    role: "Standing with victims and strengthening response systems",
    summary:
      "The final slide shifts to protection, solidarity, and practical action against discrimination and hate.",
    accent: "from-rose-100 via-white to-orange-50",
    badge: "Community defense",
    portraitLabel: "Bias Crime",
    portraitCaption: "Safety grows when people respond together.",
    imageSrc: "/left_three.jpg",
    imageAlt: "Community action against bias crime",
    ring: "border-rose-200/80",
    textAccent: "text-rose-700",
  },
];

const navLinks = [
  { label: "Home", active: true },
  { label: "AboutSIAACBC" },
  { label: "LawReporter" },
  { label: "AffirmativeActions" },
  { label: "CombatingBiasCrime" },
  { label: "Blogs" },
];

function SlidePortrait({
  slide,
}: {
  slide: (typeof slides)[number];
}) {
  return (
    <div
      className="relative h-full min-h-[340px] overflow-hidden bg-white"
    
    >
      <Image
        src={slide.imageSrc}
        alt={slide.imageAlt}
        fill
        priority={slide.imageSrc === "/hero-ambedkar.jpg"}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-fit object-center"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-18`} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.28),transparent_20%,transparent_80%,rgba(255,255,255,0.28))]" />
    </div>
  );
}

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="flex h-[100svh] flex-col overflow-hidden bg-stone-50 lg:border lg:border-stone-200 lg:shadow-xl lg:shadow-stone-100">
      <nav className="flex items-center justify-between border-b border-slate-200 px-5 py-4 md:px-8">
        <Image
          src="/logo.png"
          alt="SIAACBC logo"
          width={180}
          height={56}
          priority
          className="h-10 w-auto object-contain sm:h-12"
        />
        
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-[16px] font-medium tracking-[0.12em] transition-colors ${
                link.active ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-stone-50 sm:flex">
            <PhoneCall size={16} weight="bold" />
            Contact
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-600">
            <Heart size={16} weight="bold" />
            Donate
          </button>
        </div>
      </nav>

      <div className="grid flex-1 min-h-0 grid-cols-1 lg:grid-cols-2">
        
        <div className="relative min-h-[38svh] overflow-hidden bg-stone-100 lg:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.45),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.3),_transparent_34%)]" />
          <div className="relative h-full min-h-0 w-full">
            <SlidePortrait slide={slide} />
          </div>
        </div>

        <div className="relative flex min-h-0 items-center px-5 py-6 md:px-8 lg:px-12 lg:py-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(255,255,255,1)_30%,rgba(248,250,252,0.88))]" />
          <div className="relative z-10 max-w-xl">
            <div className={`inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${slide.textAccent} shadow-sm`}>
              <CaretRight size={12} weight="bold" />
              {slide.eyebrow}
            </div>

            <h1 className="mt-5 text-3xl leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-700 md:text-base md:leading-8 lg:text-lg">
              {slide.summary}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-stone-200" />
              <button
                type="button"
                onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-zinc-800 shadow-sm transition hover:bg-stone-50"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} weight="bold" />
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-white transition hover:bg-amber-600"
                aria-label="Next slide"
              >
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>

            {/* Author and Slide cards removed per request */}

            <div className="mt-6 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "w-10 bg-amber-700" : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
