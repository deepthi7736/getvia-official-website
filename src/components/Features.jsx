import {
  BadgeCheck,
  Search,
  IdCard,
  Phone,
  Map,
  TrendingUp,
  PackageSearch,
  PanelsTopLeft,
  BookOpenText,
  Images,
  BadgePercent,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
import ArtTile from "./ArtTile";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified listings",
    body:
      "Every listing is verified before it appears on Getvia, helping customers discover trusted businesses with confidence.",
    variant: "fresh",
  },
  {
    icon: Search,
    title: "Search that works",
    body:
      "Find relevant businesses and professionals based on your needs, category, service, and location.",
    variant: "deep",
  },
  {
    icon: IdCard,
    title: "Rich business profiles",
    body:
      "Explore services, photos, business hours, contact details, reviews, and important information in one place.",
    variant: "warm",
  },
  {
    icon: Phone,
    title: "Direct contact",
    body:
      "Call, WhatsApp, send an enquiry, or connect directly with the business without unnecessary steps.",
    variant: "fresh",
  },
  {
    icon: Map,
    title: "Maps & directions",
    body:
      "Locate nearby businesses and open clear directions using integrated map and location information.",
    variant: "deep",
  },
  {
    icon: TrendingUp,
    title: "Growth tools for owners",
    body:
      "Manage your profile, receive customer enquiries, showcase services, and build a stronger digital presence.",
    variant: "warm",
  },
];

const PROFILE_FEATURES = [
  {
    icon: PackageSearch,
    title: "Products & popular services",
    body:
      "Showcase products, popular services, packages, pricing details, and key offerings customers can explore before contacting you.",
    variant: "fresh",
  },
  {
    icon: PanelsTopLeft,
    title: "Cover banner & logo",
    body:
      "Create a strong first impression with a branded cover banner, business logo, and consistent visual identity.",
    variant: "deep",
  },
  {
    icon: BookOpenText,
    title: "Business story & about us",
    body:
      "Share your business story, experience, values, specialties, and what makes your brand different.",
    variant: "warm",
  },
  {
    icon: Images,
    title: "Business gallery",
    body:
      "Display your workspace, team, products, completed work, facilities, and customer experience through a rich gallery.",
    variant: "fresh",
  },
  {
    icon: BadgePercent,
    title: "Offers & promotions",
    body:
      "Publish discounts, seasonal deals, special packages, limited-time offers, and promotional updates directly on your profile.",
    variant: "deep",
  },
  {
    icon: Star,
    title: "Ratings & customer reviews",
    body:
      "Build trust through customer ratings and genuine reviews that help new customers make confident decisions.",
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

function FeatureGrid({ features }) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map(({ icon: Icon, title, body, variant }) => (
        <motion.article
          key={title}
          variants={cardVariants}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E1E5E1] bg-white shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDBF] hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)]"
        >
          <ArtTile
            icon={Icon}
            variant={variant}
            className="h-28 w-full transition-transform duration-500 group-hover:scale-105"
          />

          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-body text-lg font-semibold tracking-[-0.01em] text-[#141414]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#646464]">
              {body}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="why-choose"
      className="bg-white py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main features */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            What you get
          </span>

          <h2 className="mt-4 font-body text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            The complete local search experience.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#646464] sm:text-lg">
            Discover verified businesses, explore complete profiles, connect
            directly, and navigate with confidence—all through one trusted
            platform.
          </p>
        </motion.div>

        <FeatureGrid features={FEATURES} />

        {/* Business profile features */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 max-w-3xl"
        >
          <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            Build your presence
          </span>

          <h2 className="mt-4 font-body text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            Everything your business needs to stand out.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#646464] sm:text-lg">
            Create a complete and trustworthy business profile with branding,
            products, services, offers, galleries, reviews, and everything
            customers need to know before contacting you.
          </p>
        </motion.div>

        <FeatureGrid features={PROFILE_FEATURES} />
      </div>
    </section>
  );
}
