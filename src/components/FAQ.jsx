import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is listing my business on Getvia free?",
    a: "Yes — a basic verified listing is free. Optional paid plans add enhanced visibility and growth tools.",
  },
  {
    q: "How does business verification work?",
    a: "A real person confirms your business exists and matches what you've submitted before your profile goes live.",
  },
  {
    q: "How long does verification take?",
    a: "Most listings are reviewed within a few business days after you submit the form.",
  },
  {
    q: "Can I update my business information later?",
    a: "Yes — once verified, you can request updates to your profile at any time.",
  },
  {
    q: "How do customers contact my business?",
    a: "Directly through your profile — by phone, message, or directions — no extra app required.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#DDE5DE] py-4 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-semibold leading-relaxed text-[#141414] sm:text-lg">
          {item.q}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[#007A1F]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pt-3 pr-8 text-sm leading-relaxed text-[#646464]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#F3FBF4] py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            Questions
          </span>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
            What people ask before joining.
          </h2>
        </div>

        <div className="mt-9 rounded-3xl border border-[#DDE5DE] bg-white px-5 shadow-[0_16px_50px_rgba(20,60,30,0.05)] sm:px-7">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
