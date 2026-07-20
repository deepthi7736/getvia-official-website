import { Zap, Lock, RefreshCw } from "lucide-react";
import ArtTile from "./ArtTile";

const PILLARS = [
  {
    icon: Zap,
    title: "Fast search",
    body: "Results in under a second, every time.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    body: "Your data stays encrypted — always.",
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    body: "New verifications appear in real time.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-[#F3FBF4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Built to be fast and safe
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
              No spinners. No guessing.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#646464]">
              A search that answers instantly, and a platform that keeps
              your information safe while it does.
            </p>

            <div className="mt-8 space-y-6">
              {PILLARS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-[#141414]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-[#646464]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="overflow-hidden rounded-3xl border border-[#DDE5DE] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.12)]">
              <ArtTile icon={Zap} variant="deep" className="h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
