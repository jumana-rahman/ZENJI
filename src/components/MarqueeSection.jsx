import { motion } from "framer-motion";

const DEFAULT_ITEMS = ["ZENJI", "ANIME STREETWEAR", "DEFINE YOUR LEGEND", "VOID SEASON", "NEON PROPHET", "GHOST PROTOCOL", "SS 2026"];

export default function MarqueeSection({ items = DEFAULT_ITEMS }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full overflow-hidden border-y border-[#39FF14]/20 py-4 bg-[#080808]"
    >
      <div className="flex marquee-track-slow whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8">
            <span className="font-['Rajdhani'] text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-[#F5F5F5]/60">
              {item}
            </span>
            <span className="text-[#39FF14] text-xs">◆</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}