import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  MapPin,
  Search,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";
import {
  helpArticles,
  helpCategories,
} from "../data/helpArticles";

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
      staggerChildren: 0.07,
    },
  },
};

const categoryIcons = {
  "Getting Started": BookOpen,
  "Business Accounts": Building2,
  "Professional Profiles": UserRound,
  Verification: CheckCircle2,
  "Profile Management": Wrench,
  "Search & Discovery": Search,
  "Maps & Location": MapPin,
  Enquiries: HelpCircle,
  "Plans & Billing": CreditCard,
  "Privacy & Security": ShieldCheck,
  "Technical Support": Wrench,
};

export default function HelpCenterPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return helpArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" ||
        article.category === selectedCategory;

      const matchesSearch =
        query.length === 0 ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

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
        <div className="absolute -right-20 top-14 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
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
              <HelpCircle size={16} />
              Getvia Help Center
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              How can we help you?
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Search helpful articles about business profiles,
              verification, discovery, enquiries, billing, and technical
              support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-10 max-w-2xl"
            >
              <label htmlFor="help-search" className="sr-only">
                Search help articles
              </label>

              <div className="flex items-center rounded-2xl border border-[#DCE5DD] bg-white p-2 shadow-[0_18px_50px_rgba(22,50,28,0.08)]">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search
                    size={20}
                    className="shrink-0 text-[#7A857C]"
                  />

                  <input
                    id="help-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    placeholder="Search help articles"
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
            {helpCategories.map((category) => {
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
                Help articles
              </p>

              <h2 className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#172019] sm:text-4xl">
                Find answers quickly
              </h2>
            </div>

            <p className="text-sm font-medium text-[#6C766E]">
              {filteredArticles.length} articles found
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredArticles.map((article) => {
                const Icon =
                  categoryIcons[article.category] || HelpCircle;

                return (
                  <motion.article
                    key={article.id}
                    variants={fadeUp}
                    className="group rounded-[24px] border border-[#E1E8E2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B7D4BD] hover:shadow-[0_20px_55px_rgba(20,58,29,0.09)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                      <Icon size={20} />
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                      {article.category}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-7 text-[#172019]">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#667068]">
                      {article.description}
                    </p>

                    <Link
                      to="/support"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition group-hover:gap-3"
                    >
                      Read article
                      <ArrowRight size={16} />
                    </Link>
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
                No articles found
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-[#69736B]">
                Try changing the search text or selecting another
                category.
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
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {[
            {
              title: "Browse resources",
              description:
                "Explore practical guides, checklists, and templates.",
              path: "/resources",
              icon: BookOpen,
            },
            {
              title: "Contact support",
              description:
                "Send your question directly to the Getvia support team.",
              path: "/support",
              icon: HelpCircle,
            },
            {
              title: "Frequently asked questions",
              description:
                "View common questions about the Getvia platform.",
              path: "/faq",
              icon: CheckCircle2,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="group rounded-[26px] border border-[#DFE7E0] bg-white p-7 transition hover:-translate-y-1 hover:border-[#B7D4BD] hover:shadow-[0_20px_55px_rgba(20,58,29,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#172019]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
