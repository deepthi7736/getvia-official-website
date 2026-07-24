import {
  BadgeCheck,
  Search,
  IdCard,
  Phone,
  Map,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";
import ArtTile from "./ArtTile";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified listings",
    body: "Confirmed real before it ever appears in search.",
    variant: "fresh",
  },
  {
    icon: Search,
    title: "Search that works",
    body: "Fast results ranked by relevance, need, and distance.",
    variant: "deep",
  },
  {
    icon: IdCard,
    title: "Rich business profiles",
    body: "Photos, hours, services, and reviews in one place.",
    variant: "warm",
  },
  {
    icon: Phone,
    title: "Direct contact",
    body: "Call, message, or book without leaving the page.",
    variant: "fresh",
  },
  {
    icon: Map,
    title: "Maps & directions",
    body: "Turn-by-turn directions and neighborhood context, built in.",
    variant: "deep",
  },
  {
    icon: TrendingUp,
    title: "Growth tools for owners",
    body: "Insights that turn profile views into real visits.",
    variant: "warm",
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function Features() {
  return (
    <section
      id="why-choose"
      className="bg-white py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            What you get
          </span>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
            Everything local search should have had from the start.
          </h2>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, body, variant }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group overflow-hidden rounded-3xl border border-[#E1E5E1] bg-white shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDBF] hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)]"
            >
              <ArtTile
                icon={Icon}
                variant={variant}
                className="h-28 w-full transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-[#141414]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#646464]">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
