import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BusinessProfileMockup from "./BusinessProfileMockup";

const BUSINESS_BENEFITS = [
  { stat: "3.2x", label: "More profile views after verification" },
  { stat: "61%", label: "Of businesses get new customers within 30 days" },
  { stat: "24/7", label: "Discoverable — visibility never closes" },
];

export default function PlatformBusiness() {
  return (
    <section id="platform" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 rounded-3xl border border-[#DDE5DE] bg-[#F3FBF4] p-10 lg:grid-cols-2 lg:p-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              For businesses
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#141414] lg:text-4xl">
              Get found by people ready to buy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#646464]">
              A verified profile shows up when people search nearby. No ad
              auction, no monthly bidding war — just visibility earned by
              being real.
            </p>
            <Link
              to="/list-your-business"
              className="mt-7 inline-block rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
            >
              Become discoverable
            </Link>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <BusinessProfileMockup />
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {BUSINESS_BENEFITS.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-baseline gap-4 rounded-2xl border border-[#DDE8DF] bg-white p-6"
            >
              <dt className="font-mono text-3xl font-semibold text-[#007A1F]">
                {b.stat}
              </dt>
              <dd className="text-sm text-[#646464]">{b.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
