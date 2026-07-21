import { motion } from "framer-motion";

/**
 * Shared header block for internal pages (About, Contact, FAQ, etc.)
 * Keeps every internal page visually consistent with the homepage.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-gradient-to-br from-white via-[#FAFCFA] to-[#E8F7EA] pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg leading-8 text-[#646464]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
