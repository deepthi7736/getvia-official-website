import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Image,
  MapPin,
  MessageCircle,
  Navigation,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const featureGroups = [
  {
    title: "Discover local businesses",
    description:
      "Help customers quickly find suitable businesses, professionals, products, and services based on their actual needs.",
    items: [
      {
        icon: Search,
        label: "Smart business search",
        description:
          "Search businesses and professionals using categories, services, keywords, and customer needs.",
      },
      {
        icon: MapPin,
        label: "Location-based discovery",
        description:
          "Find relevant businesses nearby using accurate location and service-area information.",
      },
      {
        icon: BriefcaseBusiness,
        label: "Category and service browsing",
        description:
          "Browse businesses through organised categories, subcategories, services, and professional types.",
      },
    ],
  },
  {
    title: "Explore complete profiles",
    description:
      "Give customers all the important information they need to understand, compare, and trust a business.",
    items: [
      {
        icon: Image,
        label: "Photos and catalogues",
        description:
          "Showcase business images, products, services, offers, facilities, and previous work.",
      },
      {
        icon: ShieldCheck,
        label: "Verified business information",
        description:
          "Display trusted details, contact information, business location, and verification status.",
      },
      {
        icon: CheckCircle2,
        label: "Services and business details",
        description:
          "Present operating hours, service descriptions, pricing details, amenities, and customer information clearly.",
      },
    ],
  },
  {
    title: "Connect directly",
    description:
      "Make it easy for customers to contact the right business without searching across multiple platforms.",
    items: [
      {
        icon: MessageCircle,
        label: "Calls, WhatsApp and enquiries",
        description:
          "Allow customers to call, message, or submit an enquiry directly from the business profile.",
      },
      {
        icon: Navigation,
        label: "Maps and directions",
        description:
          "Help customers locate the business and open directions using integrated map information.",
      },
      {
        icon: UserRound,
        label: "Direct customer interaction",
        description:
          "Create a simple path from business discovery to real customer communication.",
      },
    ],
  },
  {
    title: "Showcase products and services",
    description:
      "Turn every business profile into a useful digital catalogue that helps customers understand what is available.",
    items: [
      {
        icon: Image,
        label: "Product catalogue",
        description:
          "Display products with images, descriptions, categories, pricing, and availability details.",
      },
      {
        icon: BriefcaseBusiness,
        label: "Service catalogue",
        description:
          "Present individual services, packages, features, and customer benefits in an organised format.",
      },
      {
        icon: CheckCircle2,
        label: "Offers and updates",
        description:
          "Highlight special offers, new services, business announcements, and promotional content.",
      },
    ],
  },
  {
    title: "Build business trust",
    description:
      "Help businesses present themselves professionally and give customers more confidence before contacting them.",
    items: [
      {
        icon: ShieldCheck,
        label: "Verified profile badge",
        description:
          "Show customers that important business information has been reviewed and confirmed.",
      },
      {
        icon: Image,
        label: "Professional digital presence",
        description:
          "Bring business details, branding, photos, services, and contact options together in one profile.",
      },
      {
        icon: MessageCircle,
        label: "Clear customer information",
        description:
          "Reduce confusion by showing accurate information before the customer makes an enquiry.",
      },
    ],
  },
  {
    title: "Manage and grow",
    description:
      "Give business owners practical tools to maintain their profile, manage customer interest, and improve visibility.",
    items: [
      {
        icon: UserRound,
        label: "Profile management",
        description:
          "Update business information, images, services, catalogues, offers, and contact details.",
      },
      {
        icon: MessageCircle,
        label: "Enquiry management",
        description:
          "Receive and manage customer enquiries generated through the Getvia profile.",
      },
      {
        icon: BarChart3,
        label: "Profile insights",
        description:
          "Understand profile activity, customer interest, and engagement with available business insights.",
      },
    ],
  },
];

const highlights = [
  "Search businesses by service, category, and location",
  "Explore verified profiles before making a decision",
  "View products, services, photos, offers, and business details",
  "Call, message, enquire, or get directions directly",
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-[#E3EAE4] bg-[#F7FBF7] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#E0F6E4] blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Platform features
            </p>

            <h1 className="mt-5 max-w-4xl font-body text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#151A16] sm:text-5xl lg:text-6xl">
              Everything businesses need to be discovered, explored, and
              contacted.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5B645D] sm:text-lg">
              Getvia brings business discovery, verified information, digital
              catalogues, direct customer contact, and profile management into
              one connected platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/platform"
                className="rounded-full bg-[#007A1F] px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-[#006619]"
              >
                Explore the platform
              </Link>

              <Link
                to="/list-your-business"
                className="rounded-full border border-[#BFD8C4] bg-white px-6 py-3 font-body text-sm font-semibold text-[#007A1F] transition hover:border-[#007A1F]"
              >
                List your business
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] border border-[#DCE7DE] bg-white p-6 shadow-[0_24px_70px_rgba(20,60,30,0.08)] sm:p-8"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#758078]">
              One connected experience
            </p>

            <div className="mt-6 space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-[#F7FBF7] p-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E3F5E7] text-[#007A1F]">
                    <CheckCircle2 size={16} />
                  </div>

                  <p className="text-sm leading-6 text-[#3F4A42]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature groups */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              What you get
            </p>

            <h2 className="mt-4 font-body text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#151A16] sm:text-4xl">
              The complete local business experience.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#667068]">
              Every feature is designed to help customers find the right
              business and help businesses present themselves more
              professionally online.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {featureGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group flex h-full flex-col rounded-[28px] border border-[#E3EAE4] bg-white p-7 shadow-[0_14px_40px_rgba(20,60,30,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C8DDCC] hover:shadow-[0_22px_55px_rgba(0,122,31,0.09)]"
              >
                <h3 className="font-body text-2xl font-semibold tracking-[-0.02em] text-[#151A16]">
                  {group.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667068]">
                  {group.description}
                </p>

                <div className="mt-7 space-y-4">
                  {group.items.map(
                    ({ icon: Icon, label, description }) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-[#F7FBF7] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5F5E8] text-[#007A1F]">
                            <Icon size={19} />
                          </div>

                          <span className="font-body text-sm font-semibold text-[#263029]">
                            {label}
                          </span>
                        </div>

                        <p className="mt-3 pl-[52px] text-xs leading-6 text-[#6C756E]">
                          {description}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Business benefit section */}
      <section className="bg-[#F3FBF4] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Built for customers and businesses
            </p>

            <h2 className="mt-4 max-w-xl font-body text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#151A16] sm:text-4xl">
              Customers find better options. Businesses gain better visibility.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#667068]">
              Getvia creates a direct connection between people looking for
              trusted local services and businesses looking to build a stronger
              digital presence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#DCE7DE] bg-white p-6">
              <Search size={24} className="text-[#007A1F]" />

              <h3 className="mt-5 font-body text-xl font-semibold text-[#151A16]">
                For customers
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667068]">
                Discover, compare, verify, and contact local businesses from
                one simple platform.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DCE7DE] bg-white p-6">
              <BriefcaseBusiness size={24} className="text-[#007A1F]" />

              <h3 className="mt-5 font-body text-xl font-semibold text-[#151A16]">
                For businesses
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667068]">
                Showcase services, products, photos, offers, contact options,
                and trusted business information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[32px] bg-[#073D1A] p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Explore Getvia
            </p>

            <h2 className="mt-4 max-w-2xl font-body text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Discover how Getvia helps customers and businesses connect
              better.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Explore the complete platform experience or create a professional
              presence for your business.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/platform"
              className="rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-[#073D1A] transition hover:bg-[#F0F8F1]"
            >
              Explore the platform
            </Link>

            <Link
              to="/list-your-business"
              className="rounded-full border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
            >
              List your business
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
