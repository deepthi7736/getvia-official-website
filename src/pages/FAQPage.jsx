import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA, FAQ_CATEGORIES } from "../data/faqData";
import PageHero from "../components/layout/PageHero";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div id={item.id} className="scroll-mt-32 border-b border-[#DDE5DE] py-5">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left" aria-expanded={isOpen}>
        <span className="font-display text-lg text-[#141414]">{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-[#007A1F]">
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pt-3 text-sm leading-relaxed text-[#646464]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const { hash } = useLocation();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState(hash ? hash.replace("#", "") : null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setOpenId(id);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  const filtered = FAQ_DATA.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesQuery =
      query.trim() === "" ||
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <main>
      <PageHero eyebrow="FAQ" title="Questions, answered." description="Search or filter by category to find what you need." />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#858585]" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-xl border border-[#DDE5DE] bg-white py-3 pl-11 pr-4 text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["All", ...FAQ_CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  category === c
                    ? "bg-[#007A1F] text-white"
                    : "border border-[#DDE5DE] bg-white text-[#646464] hover:border-[#007A1F] hover:text-[#007A1F]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#DDE5DE] bg-white px-6 sm:px-8">
            {filtered.length === 0 ? (
              <p className="py-10 text-center text-sm text-[#646464]">
                No questions match "{query}". Try a different search or{" "}
                <a href="/contact" className="text-[#007A1F] underline">contact us</a>.
              </p>
            ) : (
              filtered.map((item) => (
                <FAQItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
