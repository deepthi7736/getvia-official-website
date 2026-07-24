import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

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

function MagneticLink({ to, href, className, children }) {
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
    if (!ref.current) return;

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
      <Component {...linkProps} className={className}>
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
    if (!ref.current) return;

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

function CountUpStat({ value, label, delay }) {
  const isNumeric = /^[\d,]+(\+)?$/.test(value);

  const target = isNumeric
    ? Number.parseInt(value.replace(/[,+]/g, ""), 10)
    : null;

  const [display, setDisplay] = useState(
    isNumeric ? "0" : value,
  );

  const startCounting = () => {
    if (target === null) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min(
        1,
        (currentTime - start) / duration,
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
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
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFCFA] to-[#E8F7EA] pb-20 pt-24 lg:pb-24 lg:pt-28"
    >
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#DDE5DE] bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#646464] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007A1F]" />

            Now live in 40+ cities
          </motion.span>

          <RevealHeadline
            text="The route to every trusted business"
            highlight="near you."
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-[#141414] lg:text-6xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-6 max-w-lg text-lg leading-8 text-[#646464]"
          >
            Getvia connects people with verified local
            businesses, and helps those businesses get
            found, get chosen, and get growing. One
            platform, built for both sides of every local
            decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              onClick={onBookDemo}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#006619] hover:shadow-lg hover:shadow-[#007A1F]/20"
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
              className="inline-flex items-center justify-center rounded-xl border border-[#007A1F] bg-white px-7 py-3.5 font-body text-sm font-semibold text-[#007A1F] transition-all duration-300 hover:bg-[#F3FBF4]"
            >
              List your business
            </MagneticLink>

            <MagneticLink
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-xl border border-[#CDD5CE] bg-white px-7 py-3.5 font-body text-sm font-semibold text-[#141414] transition-all duration-300 hover:border-[#007A1F] hover:text-[#007A1F]"
            >
              See how it works
            </MagneticLink>
          </motion.div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[#E1E5E1] pt-7">
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

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-[#B7F27D]/20 blur-3xl" />

          <div className="overflow-hidden rounded-[30px] border border-[#DDE4DE] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?auto=format&fit=crop&w=900&h=1024&q=80"
              alt="A small business owner checking their phone at their storefront"
              width={900}
              height={1024}
              decoding="async"
              className="h-[560px] w-full object-cover"
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            whileHover={{ y: -4 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/40 bg-white/70 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-[#858585]">
              Verified this week
            </p>

            <p className="mt-1 font-display text-lg text-[#141414]">
              212 new businesses
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
