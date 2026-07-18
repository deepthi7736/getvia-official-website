import { ShieldCheck, Gauge, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Security by default",
    body: "Encrypted data in transit and at rest, role-based access for business owners, and continuous monitoring across every verified profile.",
  },
  {
    icon: Gauge,
    title: "Built to scale",
    body: "A search infrastructure that stays fast whether it's serving 40 cities or 400 — indexing new verifications in near real time.",
  },
  {
    icon: Layers,
    title: "Designed around the decision",
    body: "Every screen is built around one question: does this help someone choose confidently? Interfaces are tested for clarity, not just conversion.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-[#F5F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
              Technology
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
              Modern infrastructure, in service of trust.
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-[#6B7280]">
              Getvia is built on the same class of infrastructure as the
              platforms it's inspired by — fast, secure, and built to scale —
              pointed at a single, unglamorous goal: making sure what you see
              is real.
            </p>
          </div>

          <div className="space-y-10 lg:col-span-6 lg:col-start-7">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <Icon className="mt-1 shrink-0 text-[#8BC63F]" size={26} strokeWidth={1.75} />
                <div>
                  <h3 className="font-display text-lg text-[#14361F]">
                    {title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[#6B7280]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
