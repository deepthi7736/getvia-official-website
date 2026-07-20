import { useEffect, useState } from "react";

/**
 * The signature element: a vertical "route" down the left edge of the page.
 * Waypoint dots mark each section; the amber line fills in as the visitor
 * scrolls, like a route being traced on a map — Get + Via.
 * Desktop only (hidden below lg breakpoint).
 */
export const ROUTE_WAYPOINTS = [
  { id: "hero", label: "Start" },
  { id: "about", label: "Who we are" },
  { id: "mission", label: "Why" },
  { id: "what-we-do", label: "What we do" },
  { id: "why-choose", label: "How it works" },
  { id: "industries", label: "Who it's for" },
  { id: "platform", label: "For businesses" },
  { id: "stats", label: "Proof" },
  { id: "technology", label: "Tech" },
  { id: "contact", label: "Get there" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? Math.min(1, scrollTop / height) : 0);

      let current = 0;
      ROUTE_WAYPOINTS.forEach((wp, i) => {
        const el = document.getElementById(wp.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          current = i;
        }
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-6 top-0 z-40 hidden h-screen w-8 lg:flex flex-col items-center justify-center"
    >
      <div className="relative h-[70vh] w-px bg-[#141414]/10">
        <div
          className="absolute left-0 top-0 w-px bg-[#007A1F] transition-all duration-150 ease-out motion-reduce:transition-none"
          style={{ height: `${progress * 100}%` }}
        />
        {ROUTE_WAYPOINTS.map((wp, i) => (
          <button
            key={wp.id}
            aria-label={`Jump to ${wp.label}`}
            onClick={() =>
              document
                .getElementById(wp.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group absolute -left-[5px] flex items-center"
            style={{ top: `${(i / (ROUTE_WAYPOINTS.length - 1)) * 100}%` }}
          >
            <span
              className={`block h-[11px] w-[11px] rounded-full border transition-colors ${
                i <= activeIndex
                  ? "border-[#007A1F] bg-[#007A1F]"
                  : "border-[#141414]/25 bg-[#F3FBF4]"
              }`}
            />
            <span className="pointer-events-none absolute left-4 whitespace-nowrap rounded bg-[#141414] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#F3FBF4] opacity-0 transition-opacity group-hover:opacity-100">
              {wp.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
