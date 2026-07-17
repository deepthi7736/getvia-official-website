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
      className="relative overflow-hidden bg-[#F7F8F3] pb-20 pt-36 md:pb-28 md:pt-44"
    >
      <div className="absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-[#DFF3E5] blur-3xl" />

      <div className="absolute -bottom-52 -left-36 h-[420px] w-[420px] rounded-full bg-[#B8DFC5]/40 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#176B49]">
            Better local discovery starts here
          </span>

          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[#17201C] sm:text-6xl lg:text-7xl">
            Discover better businesses.

            <span className="mt-2 block text-[#176B49]">
              Build stronger connections.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667069]">
            Getvia helps people discover trusted businesses and
            professionals while helping local brands create a clearer,
            stronger digital presence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://getvia.in"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176B49] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0F5132]"
            >
              Explore Getvia
              <ArrowRight size={18} />
            </a>

            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-full border border-[#DDE5DF] bg-white px-7 py-4 font-bold text-[#17201C] transition hover:-translate-y-1 hover:shadow-lg"
            >
              Getvia for Business
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-[#DDE5DF] bg-white p-5 shadow-[0_25px_70px_rgba(15,81,50,0.12)] md:p-8">
            <div className="rounded-3xl bg-[#176B49] p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                  <Search size={21} />
                </div>

                <div>
                  <p className="text-xs text-white/65">
                    Discover around you
                  </p>

                  <p className="font-bold">
                    Find businesses and professionals
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-[#DDE5DF] bg-[#F7F8F3] p-5">
              <div className="flex items-start justify-between gap-5">
                <div className="flex gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#DFF3E5] font-bold text-[#0F5132]">
                    G
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold text-[#17201C]">
                        Example Business
                      </h3>

                      <BadgeCheck
                        size={18}
                        className="text-[#176B49]"
                      />
                    </div>

                    <p className="text-sm text-[#667069]">
                      Local services · Kerala
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#DFF3E5] px-3 py-1 text-xs font-bold text-[#0F5132]">
                  Open
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#667069]">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                  <Star
                    size={16}
                    className="fill-[#176B49] text-[#176B49]"
                  />
                  4.8 rating
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                  <MapPin size={16} />
                  Nearby
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                  <MessageCircle size={16} />
                  Direct contact
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl bg-[#DFF3E5]" />
                <div className="h-24 rounded-2xl bg-[#EAF4ED]" />
                <div className="h-24 rounded-2xl bg-[#B8DFC5]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
