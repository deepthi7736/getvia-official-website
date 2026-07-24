import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Layers3,
  MapPin,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";

const STATS = [
  {
    end: 10,
    suffix: "+",
    label: "Business categories",
    description: "Industries and everyday services available for discovery.",
    icon: Layers3,
  },
  {
    end: 3,
    suffix: "",
    label: "Core user groups",
    description:
      "Customers, businesses, and professionals connected together.",
    icon: Users,
  },
  {
    end: 24,
    suffix: "/7",
    label: "Digital visibility",
    description:
      "Business profiles remain accessible beyond working hours.",
    icon: Search,
  },
  {
    end: 1,
    suffix: "",
    label: "Connected platform",
    description:
      "Business details, services, products, and contact options together.",
    icon: Building2,
  },
  {
    end: 4,
    suffix: "+",
    label: "Connection options",
    description:
      "Phone, WhatsApp, maps, and enquiries help customers take action.",
    icon: MessageCircle,
  },
  {
    end: 1,
    suffix: "",
    label: "Local discovery destination",
    description:
      "A simpler route to nearby businesses and professionals.",
    icon: MapPin,
  },
];

function Counter({ end, suffix = "", decimals = 0, active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const start = performance.now();
    let frame;

    const animate = (time) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, end]);

  return (
    <>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F3FBF4] py-12 md:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#DDF3E1]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <Building2 size={14} />
              Getvia at a glance
            </span>

            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
              A platform designed around
              <span className="text-[#007A1F]">
                {" "}
                discovery and connection.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-base leading-7 text-[#646464] lg:justify-self-end lg:text-lg">
            Getvia brings together business information, services, products,
            offers, locations, and direct communication tools through one
            organised digital experience.
          </p>
        </div>

        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                style={{ transitionDelay: `${index * 70}ms` }}
                className={`group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-6 shadow-[0_16px_45px_rgba(0,80,20,0.06)] transition-all duration-700 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_26px_65px_rgba(0,100,30,0.11)] ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-7 opacity-0"
                }`}
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <dt className="font-display text-4xl font-semibold tracking-[-0.04em] text-[#007A1F] lg:text-5xl">
                      <Counter
                        end={stat.end}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                        active={active}
                      />
                    </dt>

                    <dd className="mt-3 font-display text-lg font-semibold text-[#141414]">
                      {stat.label}
                    </dd>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="relative mt-3 font-body text-sm leading-6 text-[#646464]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </dl>

        <div className="mt-10 rounded-[32px] bg-[#007A1F] px-7 py-8 text-center shadow-[0_24px_65px_rgba(0,100,30,0.18)] sm:px-10">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/65">
            Built to grow
          </p>

          <h3 className="mx-auto mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-white">
            As more businesses join Getvia, local discovery becomes more useful
            for everyone.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl font-body text-base leading-7 text-white/75">
            The platform is designed to support expanding categories,
            locations, businesses, professionals, and customer connections over
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
