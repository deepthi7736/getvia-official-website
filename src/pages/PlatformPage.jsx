import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, Star, Image as ImageIcon, BarChart3, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import BusinessProfileMockup from "../components/BusinessProfileMockup";

const CAPABILITIES = [
  { icon: Search, title: "Search & discovery", body: "Search by what you need, filtered by category, location, and relevance." },
  { icon: MapPin, title: "Location & maps", body: "Every listing includes an accurate location and directions." },
  { icon: Phone, title: "Direct contact", body: "Call, message, or WhatsApp a business straight from their profile." },
  { icon: Star, title: "Reviews", body: "Real reviews from real visits, moderated for accuracy." },
  { icon: ImageIcon, title: "Galleries & offers", body: "Businesses showcase photos and current offers on their profile." },
  { icon: BarChart3, title: "Business dashboard", body: "Owners manage their profile, see enquiries, and track visibility." },
];

function SearchResultMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md overflow-hidden rounded-3xl border border-[#E1E5E1] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.12)]"
    >
      <div className="border-b border-[#E1E5E1] p-4">
        <div className="flex items-center gap-2 rounded-xl border border-[#DDE5DE] bg-[#F3FBF4] px-3 py-2">
          <Search size={16} className="text-[#858585]" />
          <span className="text-sm text-[#646464]">bakery near me</span>
        </div>
      </div>
      <div className="divide-y divide-[#E1E5E1]">
        {[
          { name: "Osei & Co. Bakery", dist: "0.4 mi", rating: "4.8" },
          { name: "Corner Loaf Bakehouse", dist: "0.9 mi", rating: "4.6" },
          { name: "Maple & Grain", dist: "1.2 mi", rating: "4.7" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#141414]">{r.name}</p>
              <p className="text-xs text-[#858585]">{r.dist} away</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-[#141414]">
              <Star size={12} className="fill-[#7CE629] text-[#7CE629]" /> {r.rating}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title="One product. Built for both sides of discovery."
        description="From search to a verified profile to a real enquiry — here's what's actually inside Getvia."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              For customers
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#141414]">
              Search that actually understands what you need.
            </h2>
            <p className="mt-4 text-[#646464]">
              Results are ranked by relevance and distance — not by who paid
              the most.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SearchResultMockup />
          </div>
        </div>
      </section>

      <section className="bg-[#F3FBF4] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <BusinessProfileMockup />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              For businesses
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#141414]">
              A profile that actually converts.
            </h2>
            <p className="mt-4 text-[#646464]">
              Verified badge, real reviews, and direct contact — everything
              a customer needs to decide, in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="font-display text-3xl font-semibold text-[#141414]">
            Everything on the platform
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#141414]">{title}</h3>
                <p className="mt-2 text-sm text-[#646464]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3FBF4] py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center lg:px-12">
          <h2 className="font-display text-2xl font-semibold text-[#141414]">See the full process, step by step.</h2>
          <Link to="/how-it-works" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619]">
            How it works <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
