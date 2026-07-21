import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Ban, Gem, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";

const STORY_STEPS = [
  { year: "2022", title: "A frustrating Saturday", body: "A founder called three plumbers who never answered. Every listing online was outdated. Nothing about it felt trustworthy." },
  { year: "2023", title: "Verify first, list second", body: "So Getvia flipped the model: a business goes live only after a real person confirms it actually exists and does what it says." },
  { year: "2024", title: "Built for owners too", body: "Business owners started asking for the same tool their customers were using. Getvia became a two-sided platform." },
  { year: "Today", title: "Growing, one verified city at a time", body: "Every business, in every city, held to the same bar for verification." },
];

const VALUES = [
  { icon: ShieldCheck, title: "Verification, not guesswork", body: "Every listing is confirmed by a real visit before it goes live." },
  { icon: Ban, title: "No pay-to-rank", body: "Placement is earned by being real and reviewed — never bought." },
  { icon: Gem, title: "Fewer, better listings", body: "We'd rather have fewer verified businesses than many unverified ones." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Getvia"
        title="A directory built like a trust company."
        description="Local search rewards whoever spends the most on ads, not whoever actually deserves the visit. We built Getvia to fix that."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <h2 className="font-display text-2xl font-semibold text-[#141414]">
            Why we exist
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#646464]">
            Getvia verifies every business before it's listed, so what you
            see is what's actually there. No fake reviews, no pay-to-rank
            placement — just a directory people can rely on, and a growth
            channel businesses can trust.
          </p>

          <div className="mt-6 rounded-2xl border border-dashed border-[#CDD5CE] bg-[#F3FBF4] p-5 text-sm text-[#646464]">
            <strong className="text-[#141414]">Note for the Getvia team:</strong>{" "}
            company registration details, founding date, team size, and
            leadership names are placeholders until confirmed — replace
            before this page goes live with anything not yet verified.
          </div>
        </div>
      </section>

      <section className="bg-[#F3FBF4] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="font-display text-2xl font-semibold text-[#141414]">
            Our journey
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STORY_STEPS.map((step) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="border-t-2 border-[#DDE5DE] pt-5"
              >
                <p className="font-mono text-sm text-[#007A1F]">{step.year}</p>
                <h3 className="mt-2 font-display text-xl text-[#141414]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#646464]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-8">
              <h3 className="font-display text-xl text-[#141414]">Our mission</h3>
              <p className="mt-3 text-[#646464]">
                To connect people with local businesses they can trust, and
                give those businesses an honest way to be found.
              </p>
            </div>
            <div className="rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-8">
              <h3 className="font-display text-xl text-[#141414]">Our vision</h3>
              <p className="mt-3 text-[#646464]">
                A world where finding a good local business takes minutes,
                not guesswork — everywhere Getvia operates.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h4 className="mt-4 font-display text-lg text-[#141414]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#646464]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3FBF4] py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center lg:px-12">
          <h2 className="font-display text-2xl font-semibold text-[#141414]">
            See it in action, or just say hello.
          </h2>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link to="/#platform" className="inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619]">
              Explore the platform <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-[#CDD5CE] bg-white px-6 py-3 text-sm font-semibold text-[#141414] transition-all hover:border-[#007A1F] hover:text-[#007A1F]">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
