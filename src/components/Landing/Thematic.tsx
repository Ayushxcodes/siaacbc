import React from 'react';
import { Scale, HeartPulse, BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface AreaProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  href: string;
}

const AreaCard = ({ title, description, Icon, href }: AreaProps) => (
  <a 
    href={href}
    className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/60"
  >
    {/* Icon Container */}
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-600 group-hover:text-white">
      <Icon size={32} strokeWidth={1.5} />
    </div>

    {/* Content */}
    <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-amber-700">
      {title}
    </h3>
    <p className="mb-6 text-sm leading-relaxed text-slate-500">
      {description}
    </p>

    {/* Action Label */}
    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-amber-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
      View Details
      <ArrowRight size={16} />
    </div>
  </a>
);

export default function ThematicAreas() {
  const areas = [
    {
      title: "Legal",
      description: "Access to justice and legal aid for underserved communities through expert counsel.",
      Icon: Scale,
      href: "#"
    },
    {
      title: "Medical",
      description: "Facilitating healthcare access and medical education for community wellbeing.",
      Icon: HeartPulse,
      href: "#"
    },
    {
      title: "Education",
      description: "Empowering through knowledge with specialized training programs and resources.",
      Icon: BookOpen,
      href: "#"
    },
    {
      title: "Events",
      description: "Join our upcoming workshops, seminars, and community outreach programs.",
      Icon: Calendar,
      href: "#"
    }
  ];

  return (
    <section className=" relative bg-white py-20 px-6">
        <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">Focus Areas</span>
          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            Our Thematic Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            SIAACBC works across four key pillars to ensure sustainable social impact and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <AreaCard key={index} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}