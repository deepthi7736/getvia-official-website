import { motion } from "framer-motion";
import {
  Shirt,
  Dumbbell,
  UtensilsCrossed,
  PawPrint,
  ShoppingBag,
  Stethoscope,
  Sparkles,
  Wrench,
  Briefcase,
  Plane,
} from "lucide-react";
import ArtTile from "./ArtTile";

const INDUSTRIES = [
  { label: "Fashion & Accessories", blurb: "Trendy fashion stores, clothing brands, and style services.", img: "https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?auto=format&fit=crop&w=480&h=520&q=80", icon: Shirt, variant: "fresh" },
  { label: "Fitness & Training", blurb: "Gyms, trainers, and wellness programs for every goal.", icon: Dumbbell, variant: "deep" },
  { label: "Food & Dining", blurb: "Restaurants, cafés, and bakeries serving memorable meals.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=480&h=520&q=80", icon: UtensilsCrossed, variant: "warm" },
  { label: "Pet Services", blurb: "Grooming, care, and expert attention for every pet.", icon: PawPrint, variant: "fresh" },
  { label: "Shopping & Retail", blurb: "Everyday needs, from clothing to home essentials.", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=480&h=520&q=80", icon: ShoppingBag, variant: "deep" },
  { label: "Healthcare", blurb: "Clinics and practitioners you can verify and trust.", icon: Stethoscope, variant: "warm" },
  { label: "Beauty", blurb: "Salons and spas for every kind of self-care.", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=480&h=520&q=80", icon: Sparkles, variant: "fresh" },
  { label: "Home Services", blurb: "Trusted help for repairs, cleaning, and maintenance.", icon: Wrench, variant: "deep" },
  { label: "Professionals", blurb: "Lawyers, consultants, and experts, verified.", img: "https://images.unsplash.com/photo-1568658176307-bfbd2873abda?auto=format&fit=crop&w=480&h=520&q=80", icon: Briefcase, variant: "warm" },
  { label: "Travel", blurb: "Local guides, tours, and travel services.", icon: Plane, variant: "fresh" },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function IndustryCard({ item }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-72 overflow-hidden rounded-2xl"
    >
      {item.img ? (
        <img
          src={item.img}
          alt={item.label}
          loading="lazy"
          decoding="async"
          width={480}
          height={520}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      ) : (
        <ArtTile
          icon={item.icon}
          variant={item.variant}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#075016] via-[#075016]/30 to-transparent transition-opacity duration-500 group-hover:from-[#075016]/95" />

      <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <h3 className="font-display text-lg text-white">{item.label}</h3>
        <p className="mt-1 max-h-0 overflow-hidden font-body text-xs leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-out group-hover:max-h-20 group-hover:opacity-100">
          {item.blurb}
        </p>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  return (
    <section id="industries" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#007A1F]">
            Everything you need
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
            Ten categories, built for your daily lifestyle.
          </h2>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.label} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
