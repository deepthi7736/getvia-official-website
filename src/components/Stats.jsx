import { useEffect, useRef, useState } from "react";

const STATS = [
  { end: 18000, suffix: "+", label: "Verified businesses" },
  { end: 15, suffix: "", label: "Categories" },
  { end: 40, suffix: "", label: "Cities" },
  { end: 2.4, suffix: "M", label: "Monthly searches", decimals: 1 },
  { end: 96000, suffix: "+", label: "Leads sent to businesses" },
  { end: 4.8, suffix: "/5", label: "Average customer rating", decimals: 1 },
];

function Counter({ end, suffix = "", decimals = 0, active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end]);

  return (
    <span>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-[#F5F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
          Getvia by the numbers
        </span>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
          Growth on both sides of the platform.
        </h2>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="border-t border-[#14361F]/10 pt-5">
              <dt className="font-mono text-4xl font-medium text-[#14361F] lg:text-5xl">
                <Counter
                  end={s.end}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  active={active}
                />
              </dt>
              <dd className="mt-2 font-body text-sm text-[#6B7280]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
