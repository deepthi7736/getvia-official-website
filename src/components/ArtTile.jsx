/**
 * ArtTile — a self-contained illustrated placeholder.
 * No network request, so it can never fail to load or look "empty."
 * Swap for a real <img> once you have photography — same className API,
 * so the layout won't shift when you do.
 *
 * Usage: <ArtTile icon={Coffee} variant="warm" className="h-72 w-full" />
 */
const GRADIENTS = {
  deep: "from-[#0F2B18] via-[#1E5631] to-[#3D8A4E]",
  fresh: "from-[#14361F] via-[#3D8A4E] to-[#8BC63F]",
  warm: "from-[#1E5631] via-[#5FA34A] to-[#B8DE8A]",
};

export default function ArtTile({ icon: Icon, variant = "fresh", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${GRADIENTS[variant]} ${className}`}
    >
      {/* soft blob shapes for depth */}
      <svg
        className="absolute -left-10 -top-10 h-2/3 w-2/3 opacity-30"
        viewBox="0 0 200 200"
      >
        <path
          fill="#FFFFFF"
          d="M45.3,-58.4C57.9,-49.3,66.2,-33.6,69.6,-16.8C73,-0.1,71.5,17.7,63.5,31.8C55.6,45.9,41.2,56.3,25.4,62.2C9.6,68.1,-7.7,69.5,-23.6,64.9C-39.6,60.3,-54.3,49.6,-62.6,35C-70.9,20.4,-72.8,1.8,-68.5,-14.6C-64.2,-31,-53.7,-45.2,-40.1,-54.3C-26.5,-63.5,-9.9,-67.6,5.3,-73.9C20.6,-80.3,32.6,-67.6,45.3,-58.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute -bottom-16 -right-16 h-3/4 w-3/4 opacity-20"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="90" fill="#FFFFFF" />
      </svg>

      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {Icon && (
        <div className="relative flex h-full w-full items-center justify-center">
          <Icon
            className="text-white/90 drop-shadow-sm"
            size={56}
            strokeWidth={1.25}
          />
        </div>
      )}
    </div>
  );
}
