const OBJECTIVES = [
  {
    id: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Guard & Protect Rights",
    description:
      "Safeguarding the rights and protections provided to Scheduled Castes, Scheduled Tribes, Other Backward Communities and disadvantaged sections of society under the Constitution of India, statutes, schemes and programs of the Centre, States and Union Territories.",
    accent: "#14532d",
    bg: "#ecfdf5",
  },
  {
    id: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Promote Education",
    description:
      "Promoting education amongst people of India, essentially the Scheduled Castes, Scheduled Tribes, Other Backward Communities, minorities and disadvantaged sections of society across all levels.",
    accent: "#92400e",
    bg: "#fffbeb",
  },
  {
    id: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    title: "Create Awareness",
    description:
      "Creating awareness about the rights and protections provided to Scheduled Castes, Scheduled Tribes, Other Backward Communities and disadvantaged sections under the Constitution of India, other statutes, and government schemes.",
    accent: "#9a3412",
    bg: "#fff5f0",
  },
  {
    id: "04",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Assist Government & NGOs",
    description:
      "Assisting functionaries of Government Departments and people of any Non-Governmental Organization working or dedicating themselves for the welfare of Scheduled Castes, Scheduled Tribes, Other Backward Communities and disadvantaged sections of society.",
    accent: "#0f3d5a",
    bg: "#f8fafc",
  },
];

export default function ObjectivesSection() {
  return (
    <section className="relative bg-stone-50 py-24 px-4 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Decorative blob */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20,83,45,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4">
            Core Objectives
          </h2>
          <p className="text-base text-zinc-800/60 max-w-xl mx-auto leading-relaxed">
            SIAACBC works across four pillars to ensure constitutional
            protections reach every section of society.
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-6" aria-hidden="true">
            <div className="w-8 h-px bg-emerald-700" />
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <div className="w-20 h-px bg-emerald-700" />
            <div className="w-2 h-2 rounded-full bg-emerald-700" />
            <div className="w-8 h-px bg-emerald-700" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {OBJECTIVES.map((obj, i) => (
            <ObjectiveCard key={obj.id} obj={obj} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}

function ObjectiveCard({
  obj,
  index,
}: {
  obj: (typeof OBJECTIVES)[number];
  index: number;
}) {
  return (
    <article
      className="group relative bg-white rounded-3xl border border-stone-200 p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top-right number watermark */}
      <span
        className="absolute top-5 right-6 text-[64px] font-black leading-none select-none pointer-events-none"
        style={{ color: `${obj.accent}08` }}
        aria-hidden="true"
      >
        {obj.id}
      </span>

      {/* Accent bar on left */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: obj.accent }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm"
        style={{ background: obj.bg, color: obj.accent }}
      >
        {obj.icon}
      </div>

      {/* Number badge */}
      <div
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase mb-3 px-2.5 py-1 rounded-full"
        style={{ background: obj.bg, color: obj.accent }}
      >
        <span
          className="w-1 h-1 rounded-full"
          style={{ background: obj.accent }}
          aria-hidden="true"
        />
        Objective {obj.id}
      </div>

        {/* Title */}
        <h3 className="text-[18px] font-bold text-zinc-900 leading-snug mb-3">
        {obj.title}
      </h3>

        {/* Description */}
        <p className="text-[14px] text-zinc-800/60 leading-relaxed">
        {obj.description}
      </p>

      {/* Read more link */}
      <div className="flex items-center gap-1.5 mt-5 text-[13px] font-medium" style={{ color: obj.accent }}>
        <span>Read more</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}