import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import heroImage from "../assets/getviaheroimage.png";

const STATS = [
  ["18,000+", "Verified businesses"],
  ["40", "Cities"],
  ["4.8/5", "Avg. rating"],
];

function RevealHeadline({ text, highlight, className }) {
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              delay: 0.05 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}

      <span className="inline-block overflow-hidden align-bottom">
        <motion.span
          className="inline-block italic text-[#007A1F]"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 0.6,
            delay: 0.05 * words.length,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {highlight}
        </motion.span>
      </span>
    </h1>
  );
}

function MagneticLink({
  to,
  href,
  className,
  children,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (event) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (event.clientX - rect.left - rect.width / 2) * 0.25,
    );

    y.set(
      (event.clientY - rect.top - rect.height / 2) * 0.25,
    );
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  const Component = to ? Link : "a";
  const linkProps = to ? { to } : { href };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className="inline-block"
    >
      <Component
        {...linkProps}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
}

function MagneticButton({
  onClick,
  className,
  children,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (event) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (event.clientX - rect.left - rect.width / 2) * 0.25,
    );

    y.set(
      (event.clientY - rect.top - rect.height / 2) * 0.25,
    );
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className="inline-block"
    >
      <button
        type="button"
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    </motion.div>
  );
}

function CountUpStat({
  value,
  label,
  delay,
}) {
  const isNumeric = /^[\d,]+(\+)?$/.test(value);

  const target = isNumeric
    ? Number.parseInt(value.replace(/[,+]/g, ""), 10)
    : null;

  const [display, setDisplay] = useState(
    isNumeric ? "0" : value,
  );

  const startCounting = () => {
    if (target === null) {
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min(
        1,
        (currentTime - start) / duration,
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      setDisplay(
        `${current.toLocaleString()}${
          value.includes("+") ? "+" : ""
        }`,
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      onViewportEnter={startCounting}
    >
      <dt className="font-mono text-2xl font-medium text-[#141414]">
        {display}
      </dt>

      <dd className="mt-1 text-xs text-[#858585]">
        {label}
      </dd>
    </motion.div>
  );
}

export default function Hero({ onBookDemo }) {
  const [mouse, setMouse] = useState({
    x: 0.5,
    y: 0.5,
  });

  const handleMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setMouse({
      x:
        (event.clientX - rect.left) /
        rect.width,
      y:
        (event.clientY - rect.top) /
        rect.height,
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFCFA] to-[#E8F7EA] pb-16 pt-20 sm:pt-24 lg:pb-20 lg:pt-24"
    >
      {/* Mouse-follow glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[600px] w-[600px] rounded-full bg-[#7CE629]/20 blur-[100px]"
        animate={{
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Decorative routes */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 650 C 250 500, 400 700, 700 480 S 1100 250, 1550 350"
          stroke="#007A1F"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />

        <path
          d="M-100 200 C 300 300, 500 100, 850 220 S 1200 450, 1550 300"
          stroke="#7CE629"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
        {/* Left content */}
        <div>
          <motion.span
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[#DDE5DE] bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#646464] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007A1F]" />
            Now live in 40+ cities
          </motion.span>

          <RevealHeadline
            text="Find trusted businesses"
            highlight="near you."
            className="mt-6 max-w-2xl font-body text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#141414] sm:text-[50px] lg:text-[58px]"
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-6 max-w-lg text-base leading-8 text-[#646464] sm:text-lg"
          >
            Getvia helps people discover trusted local businesses while
            helping those businesses get discovered, earn trust, and grow.
            One platform built for both sides of every local decision.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              onClick={() => onBookDemo?.()}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#006619] hover:shadow-lg hover:shadow-[#007A1F]/20"
            >
              <CalendarDays
                size={18}
                strokeWidth={1.8}
              />

              Book a Demo

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>

            <MagneticLink
              to="/list-your-business"
              className="inline-flex items-center justify-center rounded-xl border border-[#007A1F] bg-white px-6 py-3.5 font-body text-sm font-semibold text-[#007A1F] transition-all duration-300 hover:bg-[#F3FBF4]"
            >
              List your business
            </MagneticLink>

            <MagneticLink
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-xl border border-[#CDD5CE] bg-white px-6 py-3.5 font-body text-sm font-semibold text-[#141414] transition-all duration-300 hover:border-[#007A1F] hover:text-[#007A1F]"
            >
              See how it works
            </MagneticLink>
          </motion.div>

          {/* Statistics */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-[#E1E5E1] pt-7 sm:gap-6">
            {STATS.map(
              ([value, label], index) => (
                <CountUpStat
                  key={label}
                  value={value}
                  label={label}
                  delay={0.7 + index * 0.1}
                />
              ),
            )}
          </dl>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[680px] lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-8 -z-10 rounded-[44px] bg-[#B7F27D]/20 blur-3xl" />

          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_30px_90px_rgba(0,122,31,0.15)]"
          >
            <img
              src={heroImage}
              alt="Getvia helping customers find trusted local businesses and professionals"
              width={1372}
              height={1088}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
