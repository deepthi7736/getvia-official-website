import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import PageHero from "../components/layout/PageHero";
import professionalProfileImage from "../assets/images/getvia-professional-profile.png";

const CAPABILITIES = [
  {
    icon: Search,
    title: "Search and discovery",
    body: "Find businesses and professionals by category, service, location, and relevance.",
  },
  {
    icon: MapPin,
    title: "Location and directions",
    body: "Every profile can include an accurate location, service area, and map directions.",
  },
  {
    icon: Phone,
    title: "Direct contact",
    body: "Customers can call, message, or send an enquiry directly from a profile.",
  },
  {
    icon: Star,
    title: "Reviews and trust",
    body: "Profiles can display reviews, ratings, verification details, and useful trust signals.",
  },
  {
    icon: ImageIcon,
    title: "Portfolio and gallery",
    body: "Businesses and professionals can showcase services, projects, images, and offers.",
  },
  {
    icon: BarChart3,
    title: "Performance insights",
    body: "Profile owners can understand visibility, customer interest, and enquiry activity.",
  },
];

const SEARCH_RESULTS = [
  {
    name: "Studio Pixel",
    specialty: "Brand Identity Designer",
    status: "Verified",
    rating: "5.0",
  },
  {
    name: "Creative Fold",
    specialty: "Graphic and UI Designer",
    status: "Verified",
    rating: "4.9",
  },
  {
    name: "Design District",
    specialty: "Logo and Packaging Design",
    status: "Verified",
    rating: "4.8",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SearchResultMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#DDE6DE] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.12)]"
    >
      <div className="border-b border-[#E1E8E2] p-4">
        <div className="flex items-center gap-2 rounded-xl border border-[#DDE5DE] bg-[#F3FBF4] px-3 py-2.5">
          <Search size={16} className="shrink-0 text-[#758077]" />

          <span className="text-sm text-[#646C66]">
            graphic designer
          </span>
        </div>
      </div>

      <div className="divide-y divide-[#E5EBE6]">
        {SEARCH_RESULTS.map((result) => (
          <div
            key={result.name}
            className="flex items-center justify-between gap-4 px-4 py-4 transition hover:bg-[#FAFCFA]"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-[#141414]">
                  {result.name}
                </p>

                <BadgeCheck
                  size={15}
                  className="shrink-0 text-[#007A1F]"
                />
              </div>

              <p className="mt-1 text-xs text-[#707971]">
                {result.specialty}
              </p>

              <p className="mt-1 text-[11px] font-medium text-[#007A1F]">
                {result.status} professional
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#141414]">
              <Star
                size={12}
                className="fill-[#7CE629] text-[#7CE629]"
              />

              {result.rating}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProfessionalProfileImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-xl"
    >
      <div className="absolute inset-6 rounded-[40px] bg-[#7CE629]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-[#D9E5DA] bg-white p-2 shadow-[0_30px_90px_rgba(0,122,31,0.14)]">
        <img
          src={professionalProfileImage}
          alt="Getvia professional profile and trust features"
          loading="lazy"
          className="aspect-[4/3] h-full w-full rounded-[22px] object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function PlatformPage() {
  return (
    <main className="overflow-hidden bg-white font-body text-[#141414]">
      <PageHero
        eyebrow="Platform"
        title="One product. Built for every side of discovery."
        description="From finding the right provider to building a verified profile and receiving real enquiries, Getvia brings every step together."
      />

      {/* Customer discovery */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
          >
            <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              For customers
            </span>

            <h2 className="mt-5 max-w-xl font-body text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-4xl">
              Search that understands what you actually need.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#646C66]">
              Customers can discover relevant businesses and professionals
              based on category, service, location, trust, and profile
              quality—not simply who paid the most.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Relevant category and service matching",
                "Verified professional information",
                "Clear ratings, portfolios, and contact options",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#4F5951]"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#007A1F]"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <SearchResultMockup />
          </div>
        </div>
      </section>

      {/* Professional profile */}
      <section className="bg-[#F3FBF4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <ProfessionalProfileImage />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              For professionals
            </span>

            <h2 className="mt-5 max-w-xl font-body text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-4xl">
              A professional profile that builds trust.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#646C66]">
              Verified information, services, reviews, portfolio work, and
              direct contact options give customers everything they need to
              make a confident decision.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: BadgeCheck,
                  text: "Verification and trust indicators",
                },
                {
                  icon: ImageIcon,
                  text: "Portfolio and service showcase",
                },
                {
                  icon: MessageCircle,
                  text: "Direct customer enquiries",
                },
                {
                  icon: Star,
                  text: "Ratings and customer reviews",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-[#DDE8DE] bg-white/70 p-3 text-sm text-[#4F5951]"
                >
                  <Icon
                    size={17}
                    className="mt-0.5 shrink-0 text-[#007A1F]"
                  />

                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Platform capabilities
            </p>

            <h2 className="mt-4 font-body text-3xl font-semibold tracking-[-0.03em] text-[#141414] sm:text-4xl lg:text-5xl">
              Everything needed for better discovery and stronger profiles.
            </h2>

            <p className="mt-5 leading-8 text-[#646C66]">
              Getvia connects customers, professionals, and businesses
              through useful discovery, communication, trust, and profile
              management tools.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="group rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_22px_60px_rgba(20,60,30,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#141414]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#646C66]">
                  {body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audience overview */}
      <section className="border-y border-[#E3EAE4] bg-[#F8FAF8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-3"
          >
            {[
              {
                icon: Users,
                title: "For customers",
                body: "Discover trusted options and connect directly with the right provider.",
              },
              {
                icon: BriefcaseBusiness,
                title: "For professionals",
                body: "Showcase skills, services, experience, reviews, and portfolio work.",
              },
              {
                icon: ShieldCheck,
                title: "For businesses",
                body: "Improve visibility, build trust, and manage customer connections.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-3xl border border-[#DFE7E0] bg-white p-6"
              >
                <Icon size={23} className="text-[#007A1F]" />

                <h3 className="mt-5 text-lg font-semibold text-[#172019]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-[#073F18] px-6 py-12 text-center text-white sm:px-10 sm:py-14"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2E9C48]/25 blur-3xl" />

            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#7CE629]/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#BDE6C5]">
                Explore the process
              </p>

              <h2 className="mt-4 font-body text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                See how discovery turns into a real customer connection.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D4E7D8]">
                Learn how customers search, review profiles, make contact,
                and connect with businesses and professionals through Getvia.
              </p>

              <Link
                to="/how-it-works"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#073F18] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EC]"
              >
                How Getvia Works
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
