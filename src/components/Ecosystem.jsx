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
import fashionAccessoriesImage from "../assets/fashion1.png";

const INDUSTRIES = [
  {
    label: "Fashion & Accessories",
    blurb:
      "Trendy fashion stores, clothing brands, boutiques, accessories, and style services.",
    img: fashionAccessoriesImage,
    icon: Shirt,
    variant: "fresh",
  },
  {
    label: "Fitness & Training",
    blurb:
      "Gyms, personal trainers, fitness studios, and wellness programs for every goal.",
    icon: Dumbbell,
    variant: "deep",
  },
  {
    label: "Food & Dining",
    blurb:
      "Restaurants, cafés, bakeries, and food businesses serving memorable meals.",
    img:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=480&h=520&q=80",
    icon: UtensilsCrossed,
    variant: "warm",
  },
  {
    label: "Pet Services",
    blurb:
      "Pet grooming, veterinary care, boarding, accessories, and expert attention.",
    icon: PawPrint,
    variant: "fresh",
  },
  {
    label: "Shopping & Retail",
    blurb:
      "Discover stores for clothing, essentials, gifts, electronics, and everyday needs.",
    img:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=480&h=520&q=80",
    icon: ShoppingBag,
    variant: "deep",
  },
  {
    label: "Healthcare",
    blurb:
      "Find trusted clinics, doctors, healthcare centres, and medical professionals.",
    icon: Stethoscope,
    variant: "warm",
  },
  {
    label: "Beauty",
    blurb:
      "Salons, spas, beauty studios, makeup artists, and self-care services.",
    img:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=480&h=520&q=80",
    icon: Sparkles,
    variant: "fresh",
  },
  {
    label: "Home Services",
    blurb:
      "Reliable professionals for repairs, cleaning, maintenance, and home improvement.",
    icon: Wrench,
    variant: "deep",
  },
  {
    label: "Professionals",
    blurb:
      "Discover consultants, designers, accountants, marketers, and other experts.",
    img:
      "https://images.unsplash.com/photo-1568658176307-bfbd2873abda?auto=format&fit=crop&w=480&h=520&q=80",
    icon: Briefcase,
    variant: "warm",
  },
  {
    label: "Travel",
    blurb:
      "Local guides, travel agencies, tour operators, stays, and transportation services.",
    icon: Plane,
    variant: "fresh",
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function IndustryCard({ item }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative h-72 overflow-hidden rounded-2xl border border-[#E1E8E2] bg-[#F5FAF6] shadow-[0_14px_40px_rgba(20,60,30,0.06)]"
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#053E15] via-[#053E15]/35 to-transparent transition-all duration-500 group-hover:from-[#053E15]/95" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-body text-lg font-semibold tracking-[-0.02em] text-white">
          {item.label}
        </h3>

        <p className="mt-2 max-h-0 overflow-hidden font-body text-xs leading-6 text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100">
          {item.blurb}
        </p>
      </div>
    </motion.article>
  );
}

export default function Ecosystem() {
  return (
    <section
      id="industries"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            Explore categories
          </span>

          <h2 className="mt-4 font-body text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            Ten categories, built for your daily lifestyle.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#646464] sm:text-lg">
            Discover trusted businesses and professionals across everyday
            categories, all organised to make local search faster and easier.
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {INDUSTRIES.map((item) => (
            <IndustryCard
              key={item.label}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
