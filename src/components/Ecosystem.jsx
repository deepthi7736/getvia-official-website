import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Dumbbell,
  PawPrint,
  Plane,
  Shirt,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const INDUSTRIES = [
  {
    label: "Fashion & Accessories",
    blurb:
      "Discover clothing stores, boutiques, fashion brands, jewellery, eyewear, footwear, and accessories.",
    icon: Shirt,
  },
  {
    label: "Fitness & Training",
    blurb:
      "Explore gyms, personal trainers, yoga centres, dance studios, martial arts, and sports coaching.",
    icon: Dumbbell,
  },
  {
    label: "Food & Dining",
    blurb:
      "Find restaurants, cafés, bakeries, cloud kitchens, juice bars, dessert shops, and quick bites.",
    icon: UtensilsCrossed,
  },
  {
    label: "Pet Services",
    blurb:
      "Connect with veterinary clinics, pet grooming centres, pet stores, boarding, and care services.",
    icon: PawPrint,
  },
  {
    label: "Shopping & Retail",
    blurb:
      "Browse local stores for electronics, furniture, home essentials, gifts, groceries, and everyday needs.",
    icon: ShoppingBag,
  },
  {
    label: "Healthcare",
    blurb:
      "Discover clinics, doctors, physiotherapists, diagnostic centres, pharmacies, and wellness providers.",
    icon: Stethoscope,
  },
  {
    label: "Beauty & Personal Care",
    blurb:
      "Explore salons, spas, bridal makeup services, skin clinics, grooming studios, and beauty professionals.",
    icon: Sparkles,
  },
  {
    label: "Home Services",
    blurb:
      "Find electricians, plumbers, cleaners, painters, repair specialists, and maintenance services.",
    icon: Wrench,
  },
  {
    label: "Professionals",
    blurb:
      "Connect with designers, consultants, accountants, marketers, executives, and other skilled professionals.",
    icon: Briefcase,
  },
  {
    label: "Travel & Stays",
    blurb:
      "Explore homestays, hotels, rentals, travel agencies, local tours, transport, and holiday services.",
    icon: Plane,
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function IndustryCard({ item, index }) {
  const [ref, visible] = useReveal();
  const Icon = item.icon;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 5) * 70}ms` }}
      className={`group relative flex min-h-[285px] flex-col overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-7 shadow-[0_14px_42px_rgba(0,80,20,0.06)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_26px_65px_rgba(0,100,30,0.11)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {/* Card decoration */}
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#7CE629]/10 blur-xl" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-all duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      <div className="relative mt-7 flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-semibold leading-tight text-[#141414]">
          {item.label}
        </h3>

        <p className="mt-4 font-body text-sm leading-7 text-[#646464]">
          {item.blurb}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-7 font-body text-sm font-semibold text-[#007A1F]">
          Explore category
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}

export default function Ecosystem() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#F3FBF4] py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-36 top-12 h-80 w-80 rounded-full bg-[#DDF3E1]/70 blur-3xl" />

      <div className="pointer-events-none absolute -right-36 bottom-10 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <ShoppingBag size={14} />
              Getvia ecosystem
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              Discover businesses across the categories that shape
              <span className="text-[#007A1F]"> everyday life.</span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Getvia brings together businesses, professionals, products, and
            services from a wide range of industries so people can explore what
            they need from one platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((item, index) => (
            <IndustryCard
              key={item.label}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[32px] border border-[#DDE5DE] bg-white p-8 shadow-[0_18px_55px_rgba(0,80,20,0.06)] sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              More than categories
            </p>

            <h3 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-[#141414] sm:text-4xl">
              A connected platform for discovering local businesses and
              professionals.
            </h3>
          </div>

          <a
            href="https://getvia.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_35px_rgba(0,100,30,0.20)]"
          >
            Explore Getvia
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
