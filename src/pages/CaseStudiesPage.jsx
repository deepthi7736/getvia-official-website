import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Search,
  Sparkles,
  Store,
} from "lucide-react";
import {
  caseStudies,
  caseStudyCategories,
} from "../data/caseStudies";

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

const categoryIcons = {
  Retail: Store,
  Beauty: Sparkles,
  Education: GraduationCap,
  Professionals: BriefcaseBusiness,
};

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCaseStudies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return caseStudies.filter((caseStudy) => {
      const matchesCategory =
        selectedCategory === "All" ||
        caseStudy.category === selectedCategory;

      const matchesSearch =
        query.length === 0 ||
        caseStudy.title.toLowerCase().includes(query) ||
        caseStudy.excerpt.toLowerCase().includes(query) ||
        caseStudy.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden border-b border-[#E8EEE9] bg-[#F7FAF7] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
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
              <Building2 size={16} />
              Getvia Case Studies
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              See how better profiles improve discovery
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Explore sample stories showing how structured information,
              images, location details, and contact options can improve
              the way businesses and professionals are presented online.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-10 max-w-2xl"
            >
              <label htmlFor="case-study-search" className="sr-only">
                Search case studies
              </label>

              <div className="flex items-center rounded-2xl border border-[#DCE5DD] bg-white p-2 shadow-[0_18px_50px_rgba(22,50,28,0.08)]">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search
                    size={20}
                    className="shrink-0 text-[#7A857C]"
                  />

                  <input
                    id="case-study-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    placeholder="Search case studies"
                    className="w-full bg-transparent py-3 text-sm text-[#172019] outline-none placeholder:text-[#939C95] sm:text-base"
                  />
                </div>

                <button
                  type="button"
                  className="hidden rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00661A] sm:block"
                >
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#EDF1ED] bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {caseStudyCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#007A1F] bg-[#007A1F] text-white"
                      : "border-[#DCE5DD] bg-white text-[#566159] hover:border-[#9FC9A8] hover:text-[#007A1F]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                Success stories
              </p>

              <h2 className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
                Explore sample case studies
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#667068] sm:text-base">
                These are demonstration case studies. Replace them with
                verified customer information before presenting them as
                real outcomes.
              </p>
            </div>

            <p className="text-sm font-medium text-[#6C766E]">
              {filteredCaseStudies.length}{" "}
              {filteredCaseStudies.length === 1
                ? "case study"
                : "case studies"}{" "}
              found
            </p>
          </div>

          {filteredCaseStudies.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-7 md:grid-cols-2"
            >
              {filteredCaseStudies.map((caseStudy) => {
                const Icon =
                  categoryIcons[caseStudy.category] || Building2;

                return (
                  <motion.article
                    key={caseStudy.id}
                    variants={fadeUp}
                    className="group overflow-hidden rounded-[28px] border border-[#E1E8E2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_24px_70px_rgba(20,58,29,0.11)]"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#EEF4EF]">
                      <img
                        src={caseStudy.heroImage}
                        alt={caseStudy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#172019] shadow-sm backdrop-blur">
                        <Icon size={15} className="text-[#007A1F]" />
                        {caseStudy.category}
                      </div>

                      <div className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                        Sample case study
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="font-['Fraunces'] text-2xl font-semibold leading-snug text-[#172019] sm:text-3xl">
                        {caseStudy.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#667068]">
                        {caseStudy.excerpt}
                      </p>

                      <Link
                        to={`/case-studies/${caseStudy.slug}`}
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition group-hover:gap-3"
                      >
                        View case study
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-[#CED8D0] bg-[#FAFCFA] px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                <Search size={24} />
              </div>

              <h3 className="mt-6 font-['Fraunces'] text-2xl font-semibold text-[#172019]">
                No case studies found
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-[#69736B]">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00661A]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-[#0D3418] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20"
          >
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#2E9C48]/30 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#BEDF66]/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A8D9B1]">
                Build your presence
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
                Create a clearer digital profile for your business
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D1DDD3]">
                Present accurate business information, services,
                images, location, and contact options in one structured
                profile.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/list-your-business"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#12341A] transition hover:bg-[#F1F6F2]"
                >
                  List your business
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/for-businesses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
