import { BadgeCheck, Star, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * A realistic UI mockup of a Getvia business profile — not a real
 * screenshot, but built from actual site components/tokens so it reads
 * as authentic product UI rather than a stock photo or icon.
 */
export default function BusinessProfileMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-sm overflow-hidden rounded-3xl border border-[#E1E5E1] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.14)]"
    >
      <div className="h-28 bg-gradient-to-br from-[#006619] via-[#25A43A] to-[#7CE629]" />

      <div className="-mt-10 px-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-[#E8F7EA] font-display text-2xl font-semibold text-[#007A1F] shadow-md">
          OB
        </div>
      </div>

      <div className="px-6 pb-6 pt-4">
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-lg text-[#141414]">
            Osei & Co. Bakery
          </h3>
          <BadgeCheck size={16} className="text-[#007A1F]" />
        </div>

        <div className="mt-1 flex items-center gap-1 text-sm text-[#646464]">
          <Star size={13} className="fill-[#7CE629] text-[#7CE629]" />
          <span className="font-medium text-[#141414]">4.8</span>
          <span>(212 reviews)</span>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#858585]">
          <MapPin size={13} />
          0.4 mi away · Open until 6 PM
        </div>

        <div className="mt-5 flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#007A1F] px-3 py-2.5 text-xs font-semibold text-white">
            <Phone size={14} /> Call
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#CDD5CE] px-3 py-2.5 text-xs font-semibold text-[#141414]">
            <MessageCircle size={14} /> Message
          </button>
        </div>
      </div>
    </motion.div>
  );
}
