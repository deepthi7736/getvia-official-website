import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Download,
  FileText,
  Image,
  Mail,
  Newspaper,
  ShieldCheck,
} from "lucide-react";
import {
  companyFacts,
  companyOverview,
  logoUsage,
  mediaContacts,
  mediaResources,
  pressFAQs,
  pressNotes,
  pressReleases,
} from "../data/pressData";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

const resourceIcons = {
  "Company Overview": Building2,
  "Brand Assets": Image,
  "Product Screenshots": Image,
  "Media Kit": FileText,
};

export default function PressPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden border-b border-[#E8EEE9] bg-[#F7FAF7] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F2F7D9] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE4D3] bg-white px-4 py-2 text-sm font-semibold text-[#007A1F]"
            >
              <Newspaper size={16} />
              Getvia Press Room
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              News, media resources, and company information
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Find company information, media resources, brand
              guidelines, and press contact details for Getvia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Company overview
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              {companyOverview.title}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[28px] border border-[#E1E8E2] bg-[#FAFCFA] p-7 sm:p-9"
          >
            <p className="text-base leading-8 text-[#626D64]">
              {companyOverview.description}
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
            >
              Learn more about Getvia
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Media resources
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Resources for journalists and media teams
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {mediaResources.map((resource) => {
              const Icon =
                resourceIcons[resource.title] || FileText;
              const isAvailable = resource.status === "Available";

              return (
                <motion.article
                  key={resource.id}
                  variants={fadeUp}
                  className="rounded-[28px] border border-[#DFE7E0] bg-white p-7 transition hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_20px_55px_rgba(20,58,29,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                      <Icon size={22} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        isAvailable
                          ? "bg-[#E7F5E9] text-[#007A1F]"
                          : "bg-[#F1F3F1] text-[#778078]"
                      }`}
                    >
                      {resource.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-['Fraunces'] text-2xl font-semibold text-[#172019]">
                    {resource.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#667068]">
                    {resource.description}
                  </p>

                  {isAvailable ? (
                    <Link
                      to="/about"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
                    >
                      View resource
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#929B94]">
                      <Download size={16} />
                      Coming soon
                    </span>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Company facts
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Verified information will appear here
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#667068]">
              This section intentionally avoids publishing unverified
              statistics, leadership information, locations, or company
              claims.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {companyFacts.map((fact) => (
              <motion.article
                key={fact.title}
                variants={fadeUp}
                className="rounded-[24px] border border-[#E1E8E2] bg-[#FAFCFA] p-6"
              >
                <h3 className="text-lg font-bold text-[#172019]">
                  {fact.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {fact.value}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                Press releases
              </p>

              <h2 className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
                Official announcements
              </h2>
            </div>
          </div>

          {pressReleases.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {pressReleases.map((release) => (
                <article
                  key={release.id}
                  className="rounded-[24px] border border-[#DFE7E0] bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-[#172019]">
                    {release.title}
                  </h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-dashed border-[#CED8D0] bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                <Newspaper size={24} />
              </div>

              <h3 className="mt-6 font-['Fraunces'] text-2xl font-semibold text-[#172019]">
                No press releases published
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-[#69736B]">
                Official announcements will be added here when verified
                and approved for publication.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-[28px] border border-[#E1E8E2] bg-white p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
              <ShieldCheck size={22} />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
              Logo usage guidelines
            </h2>

            <div className="mt-6 space-y-4">
              {logoUsage.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[#667068]"
                >
                  <ShieldCheck
                    size={17}
                    className="mt-1 shrink-0 text-[#007A1F]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-[#0D3418] p-7 text-white sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Mail size={22} />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-semibold">
              Media contact
            </h2>

            <p className="mt-4 leading-8 text-[#D1DDD3]">
              Contact the Getvia media team for press enquiries,
              interviews, and approved company information.
            </p>

            <div className="mt-7 space-y-3 text-sm text-[#D4DFD6]">
              <p>
                <strong className="text-white">Contact:</strong>{" "}
                {mediaContacts.name}
              </p>

              <p>
                <strong className="text-white">Email:</strong>{" "}
                {mediaContacts.email}
              </p>

              <p>
                <strong className="text-white">Phone:</strong>{" "}
                {mediaContacts.phone}
              </p>
            </div>

            <p className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-xs leading-6 text-[#D4DFD6]">
              {mediaContacts.note}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Press FAQ
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Common media questions
            </h2>
          </div>

          <div className="space-y-4">
            {pressFAQs.map((item) => (
              <article
                key={item.question}
                className="rounded-[22px] border border-[#DFE7E0] bg-white p-6"
              >
                <h3 className="text-base font-bold text-[#172019]">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E8] py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-[24px] border border-[#F0DFA7] p-6">
            <h2 className="font-['Fraunces'] text-2xl font-semibold text-[#5D4910]">
              Publication notes
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {pressNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-start gap-3 text-sm leading-7 text-[#715A14]"
                >
                  <ShieldCheck
                    size={17}
                    className="mt-1 shrink-0"
                  />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
