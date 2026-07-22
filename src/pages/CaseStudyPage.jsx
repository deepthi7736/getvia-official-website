import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { caseStudies } from "../data/caseStudies";

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

export default function CaseStudyPage() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!caseStudy) {
    return (
      <main className="bg-white">
        <section className="flex min-h-[70vh] items-center justify-center px-5 pb-20 pt-36">
          <div className="max-w-xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Case study not found
            </p>

            <h1 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-[#172019] sm:text-5xl">
              This case study is unavailable
            </h1>

            <p className="mt-5 leading-8 text-[#667068]">
              The requested case study may have been removed or the
              link may be incorrect.
            </p>

            <Link
              to="/case-studies"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
            >
              <ArrowLeft size={17} />
              Back to case studies
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const relatedCaseStudies = caseStudies
    .filter((item) => item.slug !== caseStudy.slug)
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-[#F7FAF7] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F2F7D9] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
              >
                <ArrowLeft size={17} />
                Back to case studies
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-7 inline-flex items-center rounded-full border border-[#CFE4D3] bg-white px-4 py-2 text-sm font-semibold text-[#007A1F]"
            >
              {caseStudy.category}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              {caseStudy.excerpt}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFF4D8] px-4 py-2 text-sm font-semibold text-[#7A5A00]"
            >
              <ShieldCheck size={16} />
              Sample case study
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[30px] border border-[#E0E8E1] bg-[#EEF4EF]"
          >
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Background
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
              Understanding the context
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#626D64]">
            <p>{caseStudy.background}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[28px] border border-[#DFE7E0] bg-white p-7 sm:p-8"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              The challenge
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
              What needed improvement
            </h2>

            <p className="mt-5 leading-8 text-[#667068]">
              {caseStudy.challenge}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[28px] border border-[#DFE7E0] bg-white p-7 sm:p-8"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              The approach
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
              How the profile was structured
            </h2>

            <p className="mt-5 leading-8 text-[#667068]">
              {caseStudy.approach}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Implementation
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
              Key steps completed
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#667068]">
              The profile was prepared using a clear and structured
              approach.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {caseStudy.implementation.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-[#E1E8E2] bg-white p-5"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7F5E9] text-[#007A1F]">
                  <CheckCircle2 size={17} />
                </div>

                <p className="font-medium leading-7 text-[#354039]">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Platform features
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
              Features used in this example
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {caseStudy.features.map((feature) => (
              <motion.div
                key={feature}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-[#DFE7E0] bg-white p-5"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#007A1F]"
                />

                <span className="font-semibold text-[#263129]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-[28px] bg-[#0D3418] p-7 text-white sm:p-9">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A8D9B1]">
              Outcome
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold">
              A clearer customer experience
            </h2>

            <p className="mt-5 leading-8 text-[#D3DED5]">
              {caseStudy.outcome}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#E1E8E2] bg-[#FAFCFA] p-7 sm:p-9">
            <Quote size={30} className="text-[#007A1F]" />

            <blockquote className="mt-6 font-['Fraunces'] text-2xl font-semibold leading-relaxed text-[#172019]">
              “{caseStudy.testimonial}”
            </blockquote>

            <p className="mt-5 text-sm leading-7 text-[#667068]">
              This testimonial is placeholder content and must be
              replaced with approved feedback before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E8] py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-[#F0DFA7] px-5 py-4 text-sm leading-7 text-[#715A14]">
            <strong>Important:</strong> {caseStudy.disclaimer}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                More examples
              </p>

              <h2 className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
                Related case studies
              </h2>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedCaseStudies.map((item) => (
              <Link
                key={item.id}
                to={`/case-studies/${item.slug}`}
                className="group overflow-hidden rounded-[24px] border border-[#E1E8E2] bg-white transition hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_20px_55px_rgba(20,58,29,0.09)]"
              >
                <div className="h-44 overflow-hidden bg-[#EEF4EF]">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 font-['Fraunces'] text-xl font-semibold leading-snug text-[#172019]">
                    {item.title}
                  </h3>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition group-hover:gap-3">
                    Read case study
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
