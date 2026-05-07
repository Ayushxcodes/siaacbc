import React from 'react';
import { Users, CheckCircle, Heart, Send } from 'lucide-react';

const StatItem = ({ number, label, subtext, Icon }: { number: string; label: string; subtext: string; Icon: React.ElementType }) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 shadow-sm">
      <Icon size={24} />
    </div>
    <span className="text-4xl font-black text-zinc-900">{number}</span>
    <span className="mt-1 text-lg font-bold text-zinc-800">{label}</span>
    <p className="mt-2 max-w-[200px] text-sm text-zinc-700 leading-relaxed">
      {subtext}
    </p>
  </div>
);

export default function AchievementNewsletter() {
  const stats = [
    {
      number: "100+",
      label: "Global Impacts",
      subtext: "Transformative achievements demonstrating societal growth.",
      Icon: Users
    },
    {
      number: "200+",
      label: "Issues Resolved",
      subtext: "Challenges overcome and goals achieved successfully.",
      Icon: CheckCircle
    },
    {
      number: "150+",
      label: "Happy Communities",
      subtext: "Organization celebrates the success of the people we serve.",
      Icon: Heart
    }
  ];

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24">
        <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      {/* Decorative Background Elements */}
      

      <div className="container mx-auto px-6">
        {/* Achievements Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-700">Milestones</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-zinc-900 sm:text-4xl">Our Achievements</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-stone-200 pb-20 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-xl">
            {/* Subtle inner pattern */}
            

            <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left">
              <div className="mb-8 flex-1 lg:mb-0 lg:pr-8">
                <h4 className="text-2xl font-bold text-zinc-900 md:text-3xl">Stay in the loop</h4>
                <p className="mt-2 text-zinc-700">
                  Get the latest updates on our societal impact and upcoming initiatives.
                </p>
              </div>

              <div className="w-full max-w-md lg:w-auto">
                <form className="flex w-full flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border-none bg-stone-50 px-5 py-4 text-zinc-900 placeholder-zinc-500 outline-none ring-1 ring-stone-100 transition-all focus:bg-white sm:w-64"
                    required
                  />
                  <button className="flex items-center justify-center gap-2 rounded-2xl bg-amber-700 px-8 py-4 font-bold text-white transition-all hover:bg-amber-600 active:scale-95">
                    Subscribe
                    <Send size={18} />
                  </button>
                </form>
                <p className="mt-3 text-xs text-zinc-700 text-center lg:text-left">
                  Join 2,000+ others. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}