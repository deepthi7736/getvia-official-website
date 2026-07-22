import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  ShieldCheck,
  Image,
  MessageCircle,
  BarChart3,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const featureGroups = [
  {
    title: "Discovery",
    description:
      "Help customers find relevant businesses and professionals through search, categories, and location-based discovery.",
    items: [
      { icon: Search, label: "Smart search" },
      { icon: MapPin, label: "Location discovery" },
      { icon: BriefcaseBusiness, label: "Category browsing" },
    ],
  },
  {
    title: "Business profiles",
    description:
      "Present complete and useful business information in one professional profile.",
    items: [
      { icon: Image, label: "Image galleries" },
      { icon: MessageCircle, label: "Contact options" },
      { icon: ShieldCheck, label: "Profile verification" },
    ],
  },
  {
    title: "Business tools",
    description:
      "Enable businesses to update their profile, manage enquiries, and understand profile activity.",
    items: [
      { icon: BarChart3, label: "Insights and analytics" },
      { icon: UserRound, label: "Profile management" },
      { icon: MessageCircle, label: "Enquiry tools" },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="border-b border-[#E3EAE4] bg-[#F7FBF7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            Platform Features
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
            Everything needed to discover, present, and connect.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B645D]">
            Getvia combines business discovery, professional profiles, trusted
            information, and practical enquiry tools in one connected platform.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {featureGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-[#E3EAE4] bg-white p-7 shadow-sm"
            >
              <h2 className="font-display text-2xl font-semibold text-[#151A16]">
                {group.title}
              </h2>

              <p className="mt-4 leading-7 text-[#667068]">
                {group.description}
              </p>

              <div className="mt-7 space-y-4">
                {group.items.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-[#F7FBF7] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F5E8] text-[#007A1F]">
                      <Icon size={19} />
                    </div>
                    <span className="font-medium text-[#263029]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[32px] bg-[#073D1A] p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Explore the product
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              See how the full Getvia platform works.
            </h2>
          </div>

          <Link
            to="/platform"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#073D1A]"
          >
            Explore the platform
          </Link>
        </div>
      </section>
    </main>
  );
}
