import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  MessageCircle,
  Search,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-20 pt-36 md:pb-28 md:pt-44"
    >
      {/* Background decoration */}
      <div className="absolute right-[-160px] top-16 h-[420px] w-[420px] rounded-full bg-[#EAF8EC] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full bg-[#EAF8EC] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#006E12]">
            Better local discovery starts here
          </span>

          <h1 className="mt-7 max-w-3xl font-sans text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#161616] sm:text-6xl lg:text-7xl">
            Discover trusted
            <span className="block">
              businesses with{" "}
              <span className="text-[#006E12]">Getvia.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B6B6B]">
            Explore businesses, professionals, services, offers and useful
            local information—all through one clear discovery experience.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://getvia.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006E12] px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#00530D]"
            >
              Explore Getvia
              <ArrowRight size={18} />
            </a>

            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-xl border border-[#D8D8D8] bg-white px-7 py-4 font-bold text-[#161616] transition duration-300 hover:-translate-y-1 hover:border-[#006E12]"
            >
              Getvia for Business
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-[#5F5F5F]">
            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#006E12]" />
              Clear profiles
            </span>

            <span className="flex items-center gap-2">
              <Search size={17} className="text-[#006E12]" />
              Easy discovery
            </span>

            <span className="flex items-center gap-2">
              <MessageCircle size={17} className="text-[#006E12]" />
              Direct connection
            </span>
          </div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative"
        >
          <div className="rounded-[30px] border border-[#E0E0E0] bg-white p-5 shadow-[0_24px_70px_rgba(0,110,18,0.12)] md:p-7">
            {/* Search bar */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#006E12] p-5 text-white">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15">
                <Search size={22} />
              </div>

              <div>
                <p className="text-xs text-white/70">
                  What are you looking for?
                </p>

                <p className="font-bold">
                  Search businesses and professionals
                </p>
              </div>
            </div>

            {/* Business card */}
            <div className="mt-5 rounded-2xl border border-[#DEDEDE] bg-[#FAFAFA] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#EAF8EC] text-lg font-extrabold text-[#006E12]">
                    G
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans text-lg font-extrabold text-[#161616]">
                        Example Business
                      </h3>

                      <BadgeCheck
                        size={18}
                        className="text-[#006E12]"
                      />
                    </div>

                    <p className="text-sm text-[#6B6B6B]">
                      Local services · Kerala
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#8CE72A] px-3 py-1 text-xs font-extrabold text-black">
                  OPEN
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#555555]">
                  <Star
                    size={16}
                    className="fill-[#006E12] text-[#006E12]"
                  />
                  4.8 rating
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#555555]">
                  <MapPin size={16} className="text-[#006E12]" />
                  Nearby
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#555555]">
                  <MessageCircle
                    size={16}
                    className="text-[#006E12]"
                  />
                  Direct contact
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl bg-[#EAF8EC]" />
                <div className="h-24 rounded-xl bg-[#F4FBF5]" />
                <div className="h-24 rounded-xl bg-[#CDEFD2]" />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#E4E4E4] pt-4">
                <span className="text-sm font-semibold text-[#6B6B6B]">
                  View complete business profile
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#006E12] text-white">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* Accent badge */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl bg-[#8CE72A] px-5 py-3 font-extrabold text-black shadow-lg md:block">
            Discover. Compare. Connect.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
