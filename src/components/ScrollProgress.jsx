import { useEffect, useState } from "react";

export const ROUTE_WAYPOINTS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "what-we-do", label: "What we do" },
  { id: "why-choose", label: "Features" },
  { id: "industries", label: "Ecosystem" },
  { id: "platform", label: "For business" },
  { id: "stats", label: "Overview" },
  { id: "technology", label: "Technology" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let animationFrame = null;

    const updateProgress = () => {
      const documentElement = document.documentElement;
      const scrollTop =
        window.scrollY ||
        documentElement.scrollTop ||
        document.body.scrollTop;

      const scrollableHeight =
        documentElement.scrollHeight - window.innerHeight;

      const nextProgress =
        scrollableHeight > 0
          ? Math.min(1, Math.max(0, scrollTop / scrollableHeight))
          : 0;

      let currentIndex = 0;

      ROUTE_WAYPOINTS.forEach((waypoint, index) => {
        const section = document.getElementById(waypoint.id);

        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.45
        ) {
          currentIndex = index;
        }
      });

      setProgress(nextProgress);
      setActiveIndex(currentIndex);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Page section navigation"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:left-7"
    >
      <div className="rounded-full border border-[#DDE5DE] bg-white/90 px-3 py-5 shadow-[0_16px_45px_rgba(0,80,20,0.10)] backdrop-blur-xl">
        <div className="relative h-[62vh] min-h-[430px] max-h-[620px] w-px bg-[#DDE5DE]">
          {/* Progress line */}
          <div
            className="absolute left-0 top-0 w-px rounded-full bg-[#007A1F] transition-[height] duration-150 ease-out motion-reduce:transition-none"
            style={{ height: `${progress * 100}%` }}
          />

          {/* Waypoints */}
          {ROUTE_WAYPOINTS.map((waypoint, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index <= activeIndex;

            return (
              <button
                key={waypoint.id}
                type="button"
                aria-label={`Go to ${waypoint.label}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => scrollToSection(waypoint.id)}
                className="group absolute -left-[6px] flex -translate-y-1/2 items-center focus:outline-none"
                style={{
                  top: `${
                    (index / (ROUTE_WAYPOINTS.length - 1)) * 100
                  }%`,
                }}
              >
                <span
                  className={`relative block rounded-full border transition-all duration-300 ${
                    isActive
                      ? "h-[14px] w-[14px] border-[#007A1F] bg-white shadow-[0_0_0_4px_rgba(0,122,31,0.14)]"
                      : isCompleted
                        ? "h-[12px] w-[12px] border-[#007A1F] bg-[#007A1F]"
                        : "h-[12px] w-[12px] border-[#BFCBBF] bg-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007A1F]" />
                  )}
                </span>

                <span className="pointer-events-none absolute left-6 translate-x-1 whitespace-nowrap rounded-lg border border-[#DDE5DE] bg-white px-3 py-2 font-body text-xs font-semibold text-[#141414] opacity-0 shadow-[0_12px_30px_rgba(0,60,15,0.12)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  {waypoint.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
