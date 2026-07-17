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
  const featureItems = [
    {
      icon: BadgeCheck,
      label: "Clear profiles",
    },
    {
      icon: Search,
      label: "Easy discovery",
    },
    {
      icon: MessageCircle,
      label: "Direct connection",
    },
  ];

  const profileDetails = [
    {
      icon: Star,
      label: "4.8 rating",
      fillIcon: true,
    },
    {
      icon: MapPin,
      label: "Nearby",
    },
    {
      icon: MessageCircle,
      label: "Direct contact",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-20 pt-36 md:pb-28 md:pt-44"
    >
      {/* Animated background decorations */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-160px] top-16 h-[420px] w-[420px] rounded-full bg-[#EAF8EC] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -20, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-[-120px] h-[280px] w-[280px] rounded-full bg-[#DFF7E4] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="inline-flex items-center rounded-full bg-[#EAF8EC] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#006E12]"
          >
            Better local discovery starts here
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 max-w-3xl font-sans text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#161616] sm:text-6xl lg:text-7xl"
          >
            Discover trusted
            <span className="block">
              businesses with{" "}
              <span className="text-[#006E12]">Getvia.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.27,
            }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#6B6B6B]"
          >
            Explore businesses, professionals, services, offers and useful
            local information—all through one clear discovery experience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.36,
            }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="https://getvia.in"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#006E12] px-7 py-4 font-bold text-white shadow-[0_12px_30px_rgba(0,110,18,0.18)] transition-colors hover:bg-[#00530D]"
            >
              Explore Getvia
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#business"
              whileHover={{
                y: -4,
                scale: 1.03,
                borderColor: "#006E12",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className="inline-flex items-center justify-center rounded-xl border border-[#D8D8D8] bg-white px-7 py-4 font-bold text-[#161616]"
            >
              Getvia for Business
            </motion.a>
          </motion.div>

          {/* Feature points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.45,
            }}
            className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-[#5F5F5F]"
          >
            {featureItems.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="flex items-center gap-2"
              >
                <Icon size={17} className="text-[#006E12]" />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.12,
            },
            scale: {
              duration: 0.8,
              delay: 0.12,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          {/* Animated glow */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.18, 0.32, 0.18],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 rounded-[40px] bg-[#8CE72A]/25 blur-3xl"
          />

          <div className="relative rounded-[30px] border border-[#E0E0E0] bg-white p-5 shadow-[0_24px_70px_rgba(0,110,18,0.12)] md:p-7">
            {/* Search bar */}
            <motion.div
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex items-center gap-4 rounded-2xl bg-[#006E12] p-5 text-white"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15"
              >
                <Search size={22} />
              </motion.div>

              <div>
                <p className="text-xs text-white/70">
                  What are you looking for?
                </p>

                <p className="font-bold">
                  Search businesses and professionals
                </p>
              </div>
            </motion.div>

            {/* Business card */}
            <motion.div
              whileHover={{
                y: -7,
                scale: 1.015,
              }}
              transition={{
                duration: 0.28,
              }}
              className="mt-5 rounded-2xl border border-[#DEDEDE] bg-[#FAFAFA] p-5 shadow-sm hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      rotate: -4,
                      scale: 1.07,
                    }}
                    className="grid h-14 w-14 place-items-center rounded-xl bg-[#EAF8EC] text-lg font-extrabold text-[#006E12]"
                  >
                    G
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans text-lg font-extrabold text-[#161616]">
                        Example Business
                      </h3>

                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <BadgeCheck size={18} className="text-[#006E12]" />
                      </motion.div>
                    </div>

                    <p className="text-sm text-[#6B6B6B]">
                      Local services · Kerala
                    </p>
                  </div>
                </div>

                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-full bg-[#8CE72A] px-3 py-1 text-xs font-extrabold text-black"
                >
                  OPEN
                </motion.span>
              </div>

              {/* Profile information pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {profileDetails.map(
                  ({ icon: Icon, label, fillIcon = false }) => (
                    <motion.span
                      key={label}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#555555] shadow-sm"
                    >
                      <Icon
                        size={16}
                        className={
                          fillIcon
                            ? "fill-[#006E12] text-[#006E12]"
                            : "text-[#006E12]"
                        }
                      />
                      {label}
                    </motion.span>
                  ),
                )}
              </div>

              {/* Preview boxes */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: -2,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="h-24 rounded-xl bg-[#EAF8EC]"
                />

                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: 2,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="h-24 rounded-xl bg-[#F4FBF5]"
                />

                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: -2,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="h-24 rounded-xl bg-[#CDEFD2]"
                />
              </div>

              {/* Profile action */}
              <div className="mt-5 flex items-center justify-between border-t border-[#E4E4E4] pt-4">
                <span className="text-sm font-semibold text-[#6B6B6B]">
                  View complete business profile
                </span>

                <motion.span
                  whileHover={{
                    scale: 1.12,
                    x: 3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#006E12] text-white"
                >
                  <ArrowRight size={16} />
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Accent badge */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-3 hidden rounded-xl bg-[#8CE72A] px-5 py-3 font-extrabold text-black shadow-lg md:block"
          >
            Discover. Compare. Connect.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
