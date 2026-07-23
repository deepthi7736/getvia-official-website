import { ShieldCheck, Ban, Gem } from "lucide-react";

const STORY_STEPS = [
  {
    year: "2022",
    title: "A frustrating Saturday",
    body: "A founder called three plumbers who never answered. Every listing online was outdated. Nothing about it felt trustworthy.",
  },
  {
    year: "2023",
    title: "Verify first, list second",
    body: "So Getvia flipped the model: a business goes live only after a real person confirms it actually exists and does what it says.",
  },
  {
    year: "2024",
    title: "Built for owners too",
    body: "Business owners started asking for the same tool their customers were using. Getvia became a two-sided platform.",
  },
  {
    year: "Today",
    title: "40 cities, one standard",
    body: "Every business, in every city, held to the same bar for verification.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Verification, not guesswork",
    body: "Every listing is confirmed by a real visit before it goes live.",
  },
  {
    icon: Ban,
    title: "No pay-to-rank",
    body: "Placement is earned by being real and reviewed — never bought.",
  },
  {
    icon: Gem,
    title: "Fewer, better listings",
    body: "18,000 verified businesses beats 180,000 unverified ones.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Why we exist
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
              A directory built like a trust company, not an ad platform.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-lg leading-8 text-[#646464]">
              Local search rewards whoever spends the most on ads, not
              whoever actually deserves the visit. Getvia verifies every
              business before it's listed, so what you see is what's
              actually there.
            </p>
          </div>
        </div>

        {/* Story timeline */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STORY_STEPS.map((step) => (
            <div key={step.year} className="border-t-2 border-[#DDE5DE] pt-5">
              <p className="font-mono text-sm text-[#007A1F]">{step.year}</p>
              <h3 className="mt-2 font-display text-xl text-[#141414]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#646464]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Values — 3 only, no overlap with anything said elsewhere */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDBF] hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-lg text-[#141414]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#646464]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
