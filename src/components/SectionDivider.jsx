/**
 * A subtle seam between two homepage sections — softens the hard cut
 * between a white section and a pale-green one (or vice versa) with a
 * short gradient blend and a faint dot pattern, rather than an abrupt edge.
 *
 * Usage: place directly between two <section> elements.
 *   from="white" to="tint"  → fading from white into #F3FBF4
 *   from="tint" to="white"  → the reverse
 */
const TINT = "#F3FBF4";

export default function SectionDivider({ from = "white", to = "tint" }) {
  const fromColor = from === "white" ? "#FFFFFF" : TINT;
  const toColor = to === "white" ? "#FFFFFF" : TINT;

  return (
    <div
      aria-hidden="true"
      className="relative h-16 lg:h-24"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#007A1F22 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
        }}
      />
    </div>
  );
}
