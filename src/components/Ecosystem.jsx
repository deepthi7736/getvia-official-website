import {
  UtensilsCrossed,
  BedDouble,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  GraduationCap,
  Landmark,
  Car,
  Home,
  Briefcase,
  Dumbbell,
  Plane,
  Wrench,
  Package,
  Shirt,
} from "lucide-react";

const INDUSTRIES = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: BedDouble, label: "Hotels" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Sparkles, label: "Beauty" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "Finance" },
  { icon: Car, label: "Automobiles" },
  { icon: Home, label: "Real estate" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Plane, label: "Travel" },
  { icon: Wrench, label: "Home services" },
  { icon: Package, label: "Daily needs" },
  { icon: Shirt, label: "Fashion" },
];

export default function Ecosystem() {
  return (
    <section id="industries" className="bg-[#F5F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
            Industries we serve
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
            Fifteen categories. One standard of trust.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-start gap-4 rounded-xl border border-[#14361F]/8 bg-white p-6 transition-colors hover:border-[#8BC63F]/50"
            >
              <Icon className="text-[#14361F] transition-colors group-hover:text-[#8BC63F]" size={22} strokeWidth={1.75} />
              <span className="font-body text-sm font-medium text-[#14361F]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
