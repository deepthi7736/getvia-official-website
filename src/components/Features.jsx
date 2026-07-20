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
    icon: Search,
    title: "Search by need",
    body: "Find businesses, professionals, services, and products using simple search and category filters.",
  },
  {
    icon: MapPin,
    title: "Explore nearby options",
    body: "See businesses around your location and compare nearby choices more easily.",
  },
  {
    icon: UserSquare2,
    title: "View complete profiles",
    body: "Check services, products, timings, galleries, offers, contact details, and business information.",
  },
  {
    icon: BadgeCheck,
    title: "Review useful details",
    body: "Understand a business better through clear information before making contact.",
  },
  {
    icon: Phone,
    title: "Contact directly",
    body: "Reach businesses through calls, WhatsApp, websites, directions, and social media links.",
  },
  {
    icon: Map,
    title: "Get directions",
    body: "Open accurate business locations and navigate using integrated map support.",
  },
  {
    icon: Sparkles,
    title: "Discover highlighted profiles",
    body: "Explore featured businesses, offers, and useful local recommendations.",
  },
  {
    icon: Zap,
    title: "Use a faster experience",
    body: "Move from search to profile and contact without unnecessary steps or delays.",
  },
  {
    icon: TrendingUp,
    title: "Improve business reach",
    body: "Businesses can present their work clearly and make it easier for customers to find them.",
  },
];

export default function Features() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8F7EA] opacity-70 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#DDE5DE] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            Platform Features
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            Practical tools for
            <span className="text-[#007A1F]"> finding and reaching businesses.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-[#646464]">
            Getvia brings search, business information, maps, and direct
            contact tools into one straightforward experience.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
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
            </article>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#007A1F] to-[#25A43A] px-8 py-10 text-center shadow-[0_25px_60px_rgba(0,120,31,0.20)] sm:px-10">
          <h3 className="font-display text-3xl font-semibold text-white">
            Useful information, fewer steps, easier decisions.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl font-body text-lg leading-8 text-white/85">
            Customers can move from search to contact quickly, while businesses
            can present the information people need before making a decision.
          </p>
        </div>
      </div>
    </section>
  );
}
