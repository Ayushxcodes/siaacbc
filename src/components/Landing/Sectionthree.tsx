import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, title, description }: CardProps) => (
  <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="relative h-48 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800">
        Learn More →
      </button>
    </div>
  </div>
);

export default function RightsSection() {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      title: "Human Rights",
      description: "Advocating for the fundamental rights and freedoms to which all humans are entitled regardless of nation or status."
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      title: "Right to Education",
      description: "Ensuring every child has access to quality education to unlock their potential and build a brighter future."
    },
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80", // Reusing image for example
      title: "Legal Advocacy",
      description: "Providing the necessary legal framework and support to protect individuals from systemic injustice."
    }
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Initiatives
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-600"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}