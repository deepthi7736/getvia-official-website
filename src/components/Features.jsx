import {
  BadgeCheck,
  Search,
  MapPin,
  UserSquare2,
  Sparkles,
  Phone,
  Map,
  Zap,
  TrendingUp,
} from "lucide-react";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified Business Profiles",
    body: "Discover businesses with complete profiles, trusted information, and a professional digital presence.",
  },
  {
    icon: Search,
    title: "Smart Business Search",
    body: "Quickly find businesses, professionals, products, and services using intelligent search.",
  },
  {
    icon: MapPin,
    title: "Nearby Discovery",
    body: "Explore businesses around your current location with integrated location awareness.",
  },
  {
    icon: UserSquare2,
    title: "Professional Business Pages",
    body: "View galleries, contact information, services, timings, offers, and much more in one place.",
  },
  {
    icon: Sparkles,
    title: "Featured Businesses",
    body: "Highlight premium businesses and help customers discover quality local services faster.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    body: "Connect instantly through calls, WhatsApp, directions, websites, and social media links.",
  },
  {
    icon: Map,
    title: "Integrated Maps",
    body: "Navigate easily with accurate business locations and turn-by-turn directions.",
  },
  {
    icon: Zap,
    title: "Fast Experience",
    body: "Built with speed and simplicity to help users discover businesses without delays.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    body: "Help businesses increase visibility, improve credibility, and reach more customers.",
  },
];

export default function Features() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background Decoration */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8F7EA] blur-3xl opacity-70" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#DDE5DE] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            Why Choose Getvia
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            Everything you need to discover
            <span className="text-[#007A1F]"> trusted businesses.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-[#646464]">
            Getvia combines business discovery, detailed profiles,
            smart search, location services, and growth tools into one
            modern platform built for customers and businesses alike.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl border border-[#E1E5E1] bg-white p-8 shadow-[0_15px_40px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_25px_60px_rgba(0,120,31,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EA] transition-colors duration-300 group-hover:bg-[#007A1F]">
                <Icon
                  size={26}
                  strokeWidth={1.9}
                  className="text-[#007A1F] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-[#141414]">
                {title}
              </h3>

              <p className="mt-4 font-body text-[15px] leading-7 text-[#646464]">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#007A1F] to-[#25A43A] px-10 py-10 text-center shadow-[0_25px_60px_rgba(0,120,31,0.20)]">
          <h3 className="font-display text-3xl font-semibold text-white">
            Built for people. Designed for businesses.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl font-body text-lg leading-8 text-white/85">
            Getvia helps customers make better local decisions while giving
            businesses a stronger digital presence that builds trust,
            improves visibility, and supports long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
}
