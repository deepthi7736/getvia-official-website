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
  { icon: BadgeCheck, title: "Verified listings", body: "Every business is confirmed real before it ever appears in search." },
  { icon: Search, title: "Smart search", body: "Search by need and intent, not just keyword and category." },
  { icon: MapPin, title: "Location discovery", body: "Find what's actually near you, ranked by relevance and distance." },
  { icon: UserSquare2, title: "Rich business profiles", body: "Photos, hours, services, and reviews in one trustworthy page." },
  { icon: Sparkles, title: "Premium visibility", body: "Earned placement based on quality signals, never pay-to-win rank." },
  { icon: Phone, title: "Direct contact", body: "Call, message, or book without leaving the platform." },
  { icon: Map, title: "Maps integration", body: "Turn-by-turn directions and neighborhood context, built in." },
  { icon: Zap, title: "Fast discovery", body: "Sub-second search across every verified business on the platform." },
  { icon: TrendingUp, title: "Business growth tools", body: "Insights and visibility features that turn views into visits." },
];

export default function Features() {
  return (
    <section id="why-choose" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
            Why choose getvia
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
            Everything a local search should have had from the start.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#14361F]/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white p-8 transition-colors hover:bg-[#F5F7F4]">
              <Icon className="text-[#1E5631]" size={26} strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-lg text-[#14361F]">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#6B7280]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
