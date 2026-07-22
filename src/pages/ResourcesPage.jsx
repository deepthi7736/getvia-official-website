import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Search,
  Sparkles,
} from "lucide-react";
import {
  resourceCategories,
  resourcesData,
} from "../data/resourcesData";

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

function getResourceIcon(format) {
  const normalizedFormat = format?.toLowerCase();

  if (normalizedFormat === "checklist") {
    return CheckCircle2;
  }

  if (normalizedFormat === "template") {
    return FileText;
  }

  if (normalizedFormat === "workbook") {
    return BookOpen;
  }

  return FileText;
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return resourcesData.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" ||
        resource.category === selectedCategory;

      const matchesSearch =
        normalizedQuery.length === 0 ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery) ||
        resource.category.toLowerCase().includes(normalizedQuery) ||
        resource.format.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-[#E8EEE9] bg-[#F7FAF7] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F0F7D8] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE4D3] bg-white px-4 py-2 text-sm font-semibold text-[#007A1F] shadow-sm"
            >
              <Sparkles size={16} />
              Getvia Resource Library
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              Practical resources for better business discovery
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Explore guides, checklists, templates, and practical
              resources created for businesses, professionals, and
              customers using Getvia.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-10 max-w-2xl"
            >
              <label htmlFor="resource-search" className="sr-only">
                Search resources
              </label>

              <div className="flex items-center rounded-2xl border border-[#DCE5DD] bg-white p-2 shadow-[0_18px_50px_rgba(22,50,28,0.08)]">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search
                    size={20}
                    className="shrink-0 text-[#7A857C]"
                  />

                  <input
                    id="resource-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    placeholder="Search guides, templates and checklists"
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

      {/* Category filters */}
      <section className="border-b border-[#EDF1ED] bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {resourceCategories.map((category) => {
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

      {/* Resources */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                Browse resources
              </p>

              <h2 className="font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-4xl">
                Learn at your own pace
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#667068]">
                Find practical information for setting up stronger
                profiles, improving visibility, and using Getvia more
                effectively.
              </p>
            </div>

            <p className="text-sm font-medium text-[#687269]">
              {filteredResources.length}{" "}
              {filteredResources.length === 1
                ? "resource"
                : "resources"}{" "}
              found
            </p>
          </div>

          {filteredResources.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredResources.map((resource) => {
                const ResourceIcon = getResourceIcon(resource.format);
                const isComingSoon =
                  resource.status === "coming-soon";

                return (
                  <motion.article
                    key={resource.id}
                    variants={fadeUp}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E1E8E2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_24px_70px_rgba(20,58,29,0.11)]"
                  >
                    <div className="relative h-56 overflow-hidden bg-[#EFF5EF]">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#1D2A20] shadow-sm backdrop-blur">
                        <ResourceIcon
                          size={15}
                          className="text-[#007A1F]"
                        />
                        {resource.format}
                      </div>

                      {isComingSoon && (
                        <div className="absolute right-5 top-5 rounded-full border border-white/50 bg-[#172019]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                          Coming soon
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#007A1F]">
                          {resource.category}
                        </span>

                        <span className="flex items-center gap-1.5 text-xs font-medium text-[#7A847C]">
                          <Clock3 size={14} />
                          {resource.readingTime}
                        </span>
                      </div>

                      <h3 className="font-['Fraunces'] text-2xl font-semibold leading-snug text-[#172019]">
                        {resource.title}
                      </h3>

                      <p className="mt-4 flex-1 text-sm leading-7 text-[#657067]">
                        {resource.description}
                      </p>

                      <div className="mt-7 border-t border-[#EDF1ED] pt-5">
                        {isComingSoon ? (
                          <button
                            type="button"
                            disabled
                            className="flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-[#929B94]"
                          >
                            Available soon
                            <Clock3 size={16} />
                          </button>
                        ) : (
                          <Link
                            to="/help-center"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
                          >
                            Explore resource
                            <ArrowRight size={17} />
                          </Link>
                        )}
                      </div>
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
                No resources found
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-[#69736B]">
                Try another search term or reset the selected category
                to view all available resources.
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

      {/* Resource types */}
      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                Designed to be useful
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
                Information you can put into action
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
                Our resources are designed to simplify profile
                preparation, verification, platform use, and customer
                discovery.
              </p>

              <Link
                to="/help-center"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
              >
                Visit Help Center
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid gap-5 sm:grid-cols-2"
            >
              {[
                {
                  icon: BookOpen,
                  title: "Practical guides",
                  description:
                    "Clear explanations covering important platform workflows.",
                },
                {
                  icon: CheckCircle2,
                  title: "Useful checklists",
                  description:
                    "Organized steps for preparing complete and accurate profiles.",
                },
                {
                  icon: FileText,
                  title: "Planning templates",
                  description:
                    "Simple templates that support business and profile preparation.",
                },
                {
                  icon: Download,
                  title: "Downloadable resources",
                  description:
                    "Downloadable materials will be introduced as the library grows.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-3xl border border-[#DFE7E0] bg-white p-6 shadow-[0_12px_35px_rgba(25,55,31,0.05)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F5E9] text-[#007A1F]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#172019]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#667168]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] bg-[#0D3418] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20"
          >
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#2E9C48]/30 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#BEDF66]/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A8D9B1]">
                Need more support?
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
                Find answers or speak with the Getvia team
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D1DDD3]">
                Explore help articles for common questions or contact
                our support team when you need more assistance.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/help-center"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#12341A] transition hover:bg-[#F1F6F2]"
                >
                  Browse Help Center
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
