import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import {
  careersNotice,
  companyValues,
  employeeBenefits,
  hiringProcess,
  openPositions,
  workingPrinciples,
} from "../data/careersData";

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

const valueIcons = [
  HeartHandshake,
  CheckCircle2,
  Lightbulb,
  Users,
];

const principleIcons = [
  Rocket,
  Sparkles,
  Lightbulb,
  Users,
];

export default function CareersPage() {
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
              <BriefcaseBusiness size={16} />
              Careers at Getvia
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              Build meaningful digital experiences with us
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Join a team focused on improving how people discover,
              understand, and connect with trusted businesses and
              professionals.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
              >
                View opportunities
                <ArrowRight size={17} />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9D8CB] bg-white px-6 py-3.5 text-sm font-semibold text-[#243027] transition hover:border-[#9FC9A8] hover:text-[#007A1F]"
              >
                Learn about Getvia
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Our culture
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              A thoughtful team building for real people
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
              We value clear thinking, useful work, honest
              communication, and continuous improvement.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2"
          >
            {companyValues.map((value, index) => {
              const Icon = valueIcons[index] || Sparkles;

              return (
                <motion.article
                  key={value.id}
                  variants={fadeUp}
                  className="rounded-[26px] border border-[#E1E8E2] bg-white p-6 shadow-[0_14px_40px_rgba(20,58,29,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#172019]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667068]">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              How we work
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Principles that guide our decisions
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {workingPrinciples.map((principle, index) => {
              const Icon = principleIcons[index] || Lightbulb;

              return (
                <motion.article
                  key={principle.id}
                  variants={fadeUp}
                  className="rounded-[26px] border border-[#DFE7E0] bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#172019]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667068]">
                    {principle.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Why join Getvia
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Grow while building something useful
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
              Work on meaningful product challenges while learning
              from a collaborative and improvement-focused team.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {employeeBenefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-[#E1E8E2] bg-[#FAFCFA] p-5"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#007A1F]"
                />

                <span className="font-semibold text-[#2D3831]">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Hiring process
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              A clear and respectful process
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#667068]">
              Our hiring process is designed to understand your
              experience, interests, and how you approach your work.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5"
          >
            {hiringProcess.map((stage) => (
              <motion.article
                key={stage.step}
                variants={fadeUp}
                className="rounded-[24px] border border-[#DFE7E0] bg-white p-6"
              >
                <span className="font-mono text-sm font-bold text-[#007A1F]">
                  {stage.step}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#172019]">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {stage.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="open-positions"
        className="scroll-mt-28 py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Open positions
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Explore current opportunities
            </h2>
          </div>

          {openPositions.length > 0 ? (
            <div className="mx-auto mt-12 max-w-4xl space-y-5">
              {openPositions.map((position) => (
                <article
                  key={position.id}
                  className="rounded-[24px] border border-[#E1E8E2] bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-[#172019]">
                    {position.title}
                  </h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-12 max-w-3xl rounded-[30px] border border-[#E0E8E1] bg-[#FAFCFA] px-6 py-14 text-center sm:px-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                <BriefcaseBusiness size={25} />
              </div>

              <h3 className="mt-6 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
                {careersNotice.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xl leading-8 text-[#667068]">
                {careersNotice.description}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
              >
                Share your profile
                <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0D3418] px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#2E9C48]/30 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A8D9B1]">
                Stay connected
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-white sm:text-5xl">
                Interested in future opportunities?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D1DDD3]">
                Share your details with our team and mention the kind
                of work you are interested in.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#12341A] transition hover:bg-[#F1F6F2]"
              >
                Contact Getvia
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
