import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  HeartPulse,
  MapPin,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

const audienceSolutions = [
  {
    icon: Building2,
    title: "Solutions for Businesses",
    description:
      "Build a trusted digital presence, reach more customers, and manage your business information from one place.",
    features: [
      "Professional business profile",
      "Local discovery and visibility",
      "Customer enquiries",
      "Verification support",
      "Performance insights",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Solutions for Professionals",
    description:
      "Showcase your skills, services, experience, and portfolio through a professional Getvia profile.",
    features: [
      "Personal professional profile",
      "Portfolio and service showcase",
      "Direct customer enquiries",
      "Profile verification",
      "Personal brand visibility",
    ],
  },
  {
    icon: Users,
    title: "Solutions for Customers",
    description:
      "Discover trusted businesses and professionals, compare options, and connect with the right service provider.",
    features: [
      "Trusted business discovery",
      "Verified profile information",
      "Direct contact options",
      "Location and direction support",
      "Clear service information",
    ],
  },
];

const platformSolutions = [
  {
    icon: Search,
    title: "Business Discovery",
    description:
      "Help customers find relevant businesses and professionals based on category, location, and service.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    description:
      "Improve customer confidence through complete profiles and business verification.",
  },
  {
    icon: MapPin,
    title: "Location Visibility",
    description:
      "Make it easier for customers to discover your location and get directions.",
  },
  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Understand profile activity, customer interest, enquiries, and business performance.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and Transparency",
    description:
      "Present accurate business information and build stronger customer trust.",
  },
  {
    icon: Compass,
    title: "Customer Connections",
    description:
      "Allow customers to call, message, visit, or send enquiries directly from your profile.",
  },
];

const industries = [
  {
    icon: Store,
    title: "Retail",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: Sparkles,
    title: "Beauty & Wellness",
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
  },
  {
    icon: Building2,
    title: "Real Estate",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
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

export default function SolutionsPage({ onBookDemo }) {
  return (
    <main className="overflow-hidden bg-white text-[#141414]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E3E9E4] bg-gradient-to-br from-[#F8FCF8] via-[#F4FAF5] to-[#EAF7EC]">
        <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#DFF4E3] blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          {/* Hero content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#007A1F]">
              Getvia Solutions
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#141414] sm:text-[52px] md:text-[60px] lg:text-[66px]">
              Solutions built for businesses, professionals, and customers.
            </h1>

            <p className="mt-7 max-w-2xl font-body text-base leading-8 text-[#626A64] sm:text-lg">
              Getvia brings business discovery, trusted profiles,
              verification, customer connections, and growth tools together
              in one platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onBookDemo?.()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
              >
                Book a Demo
                <ArrowRight size={17} />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CAD8CC] bg-white px-6 py-3.5 font-body text-sm font-semibold text-[#253026] transition duration-300 hover:-translate-y-0.5 hover:border-[#007A1F] hover:text-[#007A1F] hover:shadow-md"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-h-[470px] lg:block"
          >
            <div className="absolute inset-0 rounded-[40px] bg-[#CDECD4]/60 blur-3xl" />

            <div className="absolute right-0 top-1/2 w-full max-w-[470px] -translate-y-1/2 rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(18,70,30,0.14)] backdrop-blur-xl">
              <div className="rounded-[24px] border border-[#E1EAE2] bg-white p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                      Getvia Platform
                    </p>

                    <h2 className="mt-2 max-w-[290px] font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#151815]">
                      Better visibility. Stronger trust. More connections.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007A1F] font-display text-xl font-bold text-white">
                    G
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-[#E7ECE7] bg-[#FAFCFA] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF7EC] text-[#007A1F]">
                        <Search size={18} />
                      </div>

                      <div>
                        <p className="font-body text-sm font-semibold text-[#1C211C]">
                          Business discovery
                        </p>

                        <p className="mt-1 font-body text-xs leading-5 text-[#6A716B]">
                          Help customers find the right business or
                          professional faster.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E7ECE7] bg-[#FAFCFA] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF7EC] text-[#007A1F]">
                        <BadgeCheck size={18} />
                      </div>

                      <div>
                        <p className="font-body text-sm font-semibold text-[#1C211C]">
                          Verified profiles
                        </p>

                        <p className="mt-1 font-body text-xs leading-5 text-[#6A716B]">
                          Build credibility using accurate and trusted
                          business information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E7ECE7] bg-[#FAFCFA] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF7EC] text-[#007A1F]">
                        <BarChart3 size={18} />
                      </div>

                      <div>
                        <p className="font-body text-sm font-semibold text-[#1C211C]">
                          Growth tools
                        </p>

                        <p className="mt-1 font-body text-xs leading-5 text-[#6A716B]">
                          Improve visibility, enquiries, engagement, and
                          customer reach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#073F18] px-4 py-3 text-white">
                  <div>
                    <p className="font-body text-xs text-[#BDE6C5]">
                      Built for local growth
                    </p>

                    <p className="mt-0.5 font-body text-sm font-semibold">
                      One connected platform
                    </p>
                  </div>

                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 md:py-20 lg:px-12"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
            Who We Help
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            One platform for every side of local business discovery.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#646C66]">
            Getvia provides dedicated solutions for businesses,
            professionals, and customers.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {audienceSolutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                variants={itemVariants}
                className="group rounded-3xl border border-[#DFE7E0] bg-white p-7 shadow-[0_12px_35px_rgba(24,64,32,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C5DCC9] hover:shadow-[0_20px_45px_rgba(24,64,32,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7EC] text-[#007A1F] transition duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68716A]">
                  {solution.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#4F5851]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#007A1F]"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Platform capabilities */}
      <section className="border-y border-[#E3E9E4] bg-[#F8FAF8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Platform Capabilities
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Everything needed to build visibility and trust.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#646C66]">
              Getvia combines discovery, verification, communication, and
              business growth tools in one connected platform.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {platformSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.title}
                  variants={itemVariants}
                  className="group rounded-2xl border border-[#DFE7E0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C5DCC9] hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EC] text-[#007A1F] transition duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#222A24]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#69716B]">
                    {solution.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Industries
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Designed for different industries and service categories.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#68716A]">
              From local retailers to healthcare providers and independent
              professionals, Getvia helps different businesses improve their
              digital presence and customer reach.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  variants={itemVariants}
                  className="group rounded-2xl border border-[#DFE7E0] bg-[#F8FBF8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C5DCC9] hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7EC] text-[#007A1F] transition duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-[#303832]">
                    {industry.title}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 md:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#073F18] px-6 py-12 text-white sm:px-10 md:py-16 lg:px-16">
          <div className="absolute -right-20 -top-24 h-[280px] w-[280px] rounded-full bg-[#14943A]/30 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-[240px] w-[240px] rounded-full bg-[#0A6D2A]/40 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#BDE6C5]">
                Grow with Getvia
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Ready to build a stronger digital presence?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#D4E7D8] sm:text-base">
                Discover how Getvia can help your business or professional
                profile reach more customers and build greater trust.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => onBookDemo?.()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#073F18] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EC]"
              >
                Book a Demo
                <ArrowRight size={17} />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Getvia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
