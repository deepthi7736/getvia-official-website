import { useEffect, useRef, useState } from "react";

// Swap each `img` path for a real photo in src/assets/industries/ once you have them.
// Recommended shot: one representative product/service moment per category,
// shot against a plain background so it reads well over the gradient.
const INDUSTRIES = [
  { label: "Fashion & Accessories", blurb: "Trendy fashion stores, clothing brands, and style services.", img: "https://placehold.co/480x520/14361F/F5F7F4?text=Fashion" },
  { label: "Fitness & Training", blurb: "Gyms, trainers, and wellness programs for every goal.", img: "https://placehold.co/480x520/1E5631/F5F7F4?text=Fitness" },
  { label: "Food & Dining", blurb: "Restaurants, cafés, and bakeries serving memorable meals.", img: "https://placehold.co/480x520/14361F/F5F7F4?text=Food" },
  { label: "Pet Services", blurb: "Grooming, care, and expert attention for every pet.", img: "https://placehold.co/480x520/1E5631/F5F7F4?text=Pet+Care" },
  { label: "Shopping & Retail", blurb: "Everyday needs, from clothing to home essentials.", img: "https://placehold.co/480x520/14361F/F5F7F4?text=Shopping" },
  { label: "Healthcare", blurb: "Clinics and practitioners you can verify and trust.", img: "https://placehold.co/480x520/1E5631/F5F7F4?text=Healthcare" },
  { label: "Beauty", blurb: "Salons and spas for every kind of self-care.", img: "https://placehold.co/480x520/14361F/F5F7F4?text=Beauty" },
  { label: "Home Services", blurb: "Trusted help for repairs, cleaning, and maintenance.", img: "https://placehold.co/480x520/1E5631/F5F7F4?text=Home+Services" },
  { label: "Professionals", blurb: "Lawyers, consultants, and experts, verified.", img: "https://placehold.co/480x520/14361F/F5F7F4?text=Professionals" },
  { label: "Travel", blurb: "Local guides, tours, and travel services.", img: "https://placehold.co/480x520/1E5631/F5F7F4?text=Travel" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function IndustryCard({ item, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 5) * 60}ms` }}
      className={`group relative h-72 overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <img
        src={item.img}
        alt={item.label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14361F] via-[#14361F]/40 to-transparent transition-opacity duration-500 group-hover:from-[#14361F]/95" />

      <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <h3 className="font-display text-lg text-white">{item.label}</h3>
        <p className="mt-1 max-h-0 overflow-hidden font-body text-xs leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-out group-hover:max-h-20 group-hover:opacity-100">
          {item.blurb}
        </p>
      </div>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section id="industries" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
            Everything you need
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
            Ten categories, built for your daily lifestyle.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((item, i) => (
            <IndustryCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
