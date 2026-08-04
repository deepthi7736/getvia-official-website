import {
  BadgeCheck,
  Star,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import bakeryImage from "../assets/bakery.png";

export default function BusinessProfileMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-sm overflow-hidden rounded-3xl border border-[#E1E5E1] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.14)]"
    >
      {/* Bakery cover image */}
      <div className="relative h-40 overflow-hidden bg-[#E8F7EA]">
        <img
          src={bakeryImage}
          alt="Osei & Co. Bakery interior"
          loading="lazy"
          decoding="async"
          className="absolute inset-x-0 top-0 h-[220%] w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Profile logo */}
      <div className="relative z-10 -mt-10 px-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-[#E8F7EA] font-display text-2xl font-semibold text-[#007A1F] shadow-md">
          OB
        </div>
      </div>

      {/* Profile information */}
      <div className="px-6 pb-6 pt-4">
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-lg font-semibold text-[#141414]">
            Osei & Co. Bakery
          </h3>

          <BadgeCheck
            size={16}
            className="shrink-0 text-[#007A1F]"
          />
        </div>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-[#646464]">
          <Star
            size={13}
            className="fill-[#7CE629] text-[#7CE629]"
          />

          <span className="font-medium text-[#141414]">
            4.8
          </span>

          <span>(212 reviews)</span>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#858585]">
          <MapPin size={13} className="shrink-0" />

          <span>0.4 mi away · Open until 6 PM</span>
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#007A1F] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#006619]"
          >
            <Phone size={14} />
            Call
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#CDD5CE] bg-white px-3 py-2.5 text-xs font-semibold text-[#141414] transition hover:border-[#007A1F] hover:text-[#007A1F]"
          >
            <MessageCircle size={14} />
            Message
          </button>
        </div>
      </div>
    </motion.div>
  );
}
