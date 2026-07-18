import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "We focus on creating a platform where businesses can present themselves clearly and customers can make informed decisions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "Clear business information, accessible contact details, and straightforward experiences are at the heart of our platform.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    body: "Finding businesses, professionals, products, and services should be simple, fast, and intuitive.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    body: "Every improvement we make is designed to create better experiences for both customers and businesses.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We continuously improve our platform to make local business discovery smarter and more connected.",
  },
  {
    icon: Users,
    title: "Community Growth",
    body: "Helping local businesses become more visible contributes to stronger communities and lasting business relationships.",
  },
];

export default function MissionValues() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#F3FBF4] py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#E8F7EA] blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#007A1F]">
            Our Mission & Vision
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-[#141414] sm:text-5xl lg:text-6xl">
            Building stronger connections
            <span className="text-[#007A1F]"> between people and businesses.</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-[#DDE5DE] bg-white p-10 shadow-soft">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
              Our Mission
            </p>

            <h3 className="mt-5 font-display text-3xl font-semibold text-[#141414]">
              Helping people discover trusted businesses with confidence.
            </h3>

            <p className="mt-6 text-[#646464] leading-8">
              Getvia is committed to making local business discovery simple,
              accessible, and meaningful while helping businesses build a
              stronger digital presence.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#DDE5DE] bg-[#007A1F] p-10 text-white shadow-premium">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Our Vision
            </p>

            <h3 className="mt-5 font-display text-3xl font-semibold">
              Becoming a trusted destination for discovering local businesses.
            </h3>

            <p className="mt-6 leading-8 text-white/80">
              We envision a connected ecosystem where customers easily find the
              services they need and businesses have the opportunity to grow
              through meaningful digital visibility.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
                Our Values
              </p>

              <h3 className="mt-3 font-display text-4xl font-semibold text-[#141414]">
                Principles that guide everything we build.
              </h3>
            </div>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[28px] border border-[#DDE5DE] bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                    <Icon size={26} />
                  </div>

                  <h4 className="mt-6 font-display text-2xl font-semibold text-[#141414]">
                    {value.title}
                  </h4>

                  <p className="mt-4 text-[#646464] leading-7">
                    {value.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-[32px] bg-[#007A1F] px-10 py-12 text-center shadow-premium">
          <h3 className="font-display text-4xl font-semibold text-white">
            Together, we're building a better way to discover local businesses.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-white/80 leading-8">
            Getvia connects customers, businesses, and communities through a
            modern platform designed for discovery, visibility, and growth.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-[#007A1F] transition hover:bg-[#F3FBF4]"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
