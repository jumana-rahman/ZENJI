import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const items = [
    "FREE SHIPPING ON ORDERS OVER ¥12,000",
    "ZENJI",
    "NEW DROP: VOID SEASON SS26",
    "ZENJI",
    "LIMITED EDITION NEON PROPHET CAPSULE",
    "ZENJI",
    "FREE SHIPPING ON ORDERS OVER ¥12,000",
    "ZENJI",
    "NEW DROP: VOID SEASON SS26",
    "ZENJI",
    "LIMITED EDITION NEON PROPHET CAPSULE",
    "ZENJI",
  ];

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full overflow-hidden bg-[#0A0A0A] border-b border-[#39FF14]/20 py-2"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-xs tracking-[0.25em] uppercase">
            <span className={item === "ZENJI" ? "text-[#39FF14] font-bold font-['Orbitron']" : "text-[#888888]"}>
              {item}
            </span>
            {item !== "ZENJI" && <span className="text-[#39FF14]/40">◆</span>}
          </span>
        ))}
      </div>
    </motion.div>
  );
}