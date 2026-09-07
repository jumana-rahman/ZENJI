import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp, revealUp, pageEnter } from "../lib/motion";
import MarqueeSection from "../components/MarqueeSection";

const MotionLink = motion.create(Link);

// ── Data ─────────────────────────────────────────────────────────────────────

const featured = {
  index: "01",
  title: "DOMAIN EXPANSION",
  kicker: "Signature Collection",
  description:
    "The flagship world of ZENJI. Heavyweight fabrics, engineered silhouettes, and graphics that expand beyond the frame. Built for those who step into spaces others fear.",
  image:
    "https://images.unsplash.com/photo-1770247600271-82edac7f4df2?w=1600&h=1000&fit=crop&auto=format",
};

const collectionCards = [
  {
    id: "limitless",
    index: "02",
    title: "LIMITLESS",
    sub: "SS 2026",
    description: "No rules. No limits. A study in free motion.",
    image:
      "https://images.unsplash.com/photo-1761084688828-c53ddc918307?w=900&h=1200&fit=crop&auto=format",
    size: "tall",
  },
  {
    id: "water-breathing",
    index: "03",
    title: "WATER BREATHING",
    sub: "Capsule",
    description: "Flow like the tide. Precision like the deep.",
    image:
      "https://images.unsplash.com/photo-1766535570784-2581adec6a3a?w=800&h=1000&fit=crop&auto=format",
    size: "small",
  },
  {
    id: "paradise-spirit",
    index: "04",
    title: "PARADISE SPIRIT",
    sub: "FW 2026",
    description: "A light world worn for heavy moments.",
    image:
      "https://images.unsplash.com/photo-1760920527114-2958980d44d2?w=700&h=900&fit=crop&auto=format",
    size: "small",
  },
  {
    id: "warrior-spirit",
    index: "05",
    title: "WARRIOR SPIRIT",
    sub: "Limited",
    description: "Discipline draped in shadow. Strength in every stitch.",
    image:
      "https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1400&h=900&fit=crop&auto=format",
    size: "wide",
  },
];

const marqueeItems = [
  "DOMAIN EXPANSION",
  "LIMITLESS",
  "WATER BREATHING",
  "WARRIOR SPIRIT",
  "PARADISE SPIRIT",
  "ZENJI",
];

// ── Hero ──────────────────────────────────────────────────────────────────────

function CollectionsHero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* BG image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.32 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1767897213817-8664d9b82393?w=1600&h=1000&fit=crop&auto=format"
          alt="Zenji collections"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Grid lines decorative */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon accent line */}
      <motion.div
        className="absolute left-0 top-0 w-px h-full opacity-40"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.4, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to bottom, transparent, #39FF14 30%, #39FF14 70%, transparent)",
          transformOrigin: "top",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-36 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">
            Collections — Index
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase leading-[0.85] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          <span className="block text-[#F5F5F5]">COLLECTIONS</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="font-['Rajdhani'] text-xl md:text-3xl font-semibold tracking-[0.15em] uppercase mb-8"
          style={{ color: "rgba(245,245,245,0.6)", textShadow: "0 0 30px #39FF1440" }}
        >
          EXPLORE THE WORLDS BEHIND ZENJI.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-md leading-relaxed font-light"
        >
          Each Zenji collection is a world of its own — born from anime, built for the streets, and worn by those who write their own legend.
        </motion.p>
      </div>

      {/* Bottom right stat */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-1"
      >
        <span className="font-['Orbitron'] text-3xl font-bold text-[#39FF14]">5</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Worlds</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">One legend</span>
      </motion.div>
    </section>
  );
}

// ── Featured Collection ───────────────────────────────────────────────────────

function FeaturedCollection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="font-['Orbitron'] text-sm font-bold text-[#39FF14]">{featured.index} —</span>
            <span className="w-8 h-px bg-[#39FF14]/50" />
            <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">
              {featured.kicker}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-8"
          >
            {["DOMAIN", "EXPANSION"].map((line, i) => (
              <motion.div key={i} variants={revealUp} className="overflow-hidden">
                <p
                  className="font-['Rajdhani'] font-bold uppercase leading-[0.9]"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    color: i === 1 ? "#39FF14" : "#F5F5F5",
                    textShadow: i === 1 ? "0 0 40px #39FF1466" : "none",
                  }}
                >
                  {line}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#888888] text-sm md:text-base leading-relaxed max-w-sm mb-10"
          >
            {featured.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <MotionLink
              to="/shop"
              whileHover={{ x: 6, color: "#39FF14" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#888888] uppercase font-bold transition-colors"
            >
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MotionLink>
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:col-span-7">
          <div className="group relative overflow-hidden bg-[#0D0D0D]">
            <motion.div
              initial={{ scale: 1.12, opacity: 0.6 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="relative overflow-hidden aspect-[4/3]"
            >
              <motion.img
                src={featured.image}
                alt={featured.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
            </motion.div>
            <div className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-[#39FF14]/40 pointer-events-none" />
            {/* Corner index */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-5 right-5 font-['Orbitron'] text-xs tracking-[0.2em] text-[#F5F5F5]/60"
            >
              {featured.index} / 05
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Collection Grid ───────────────────────────────────────────────────────────

function CollectionGrid() {
  const sizeClasses = {
    tall: "sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[600px] aspect-[3/4]",
    small: "sm:col-span-1 aspect-[3/4]",
    wide: "sm:col-span-2 lg:col-span-7 aspect-[16/10]",
  };

  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">Worlds</span>
            <h2 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold uppercase text-[#F5F5F5] leading-none">
              Explore the Collection
            </h2>
          </div>
          <span className="hidden md:block font-['Orbitron'] text-xs tracking-[0.2em] text-[#888888]">
            04 / WORLDS
          </span>
        </motion.div>

        {/* Asymmetric grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6"
        >
          {collectionCards.map((col) => (
            <MotionLink
              key={col.id}
              to="/shop"
              variants={fadeUp}
              className={`group relative overflow-hidden cursor-pointer bg-[#0D0D0D] ${sizeClasses[col.size]}`}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={col.image}
                  alt={col.title}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/15 to-transparent" />
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-[#39FF14]/40 pointer-events-none" />

              {/* Index */}
              <span className="absolute top-5 left-5 font-['Orbitron'] text-xs tracking-[0.2em] text-[#F5F5F5]/60 group-hover:text-[#39FF14] transition-colors duration-300">
                {col.index} / 05
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-2">{col.sub}</span>
                <motion.h3
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-['Rajdhani'] text-2xl md:text-4xl font-bold uppercase text-[#F5F5F5] mb-2"
                >
                  {col.title}
                </motion.h3>
                <p className="text-xs text-[#888888] hidden md:block mb-4">{col.description}</p>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#888888] uppercase group-hover:text-[#39FF14] transition-colors duration-300">
                  Explore
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative py-28 md:py-44 overflow-hidden bg-[#080808]">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1400&h=700&fit=crop&auto=format"
          alt="Zenji collection"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #39FF1406 0%, #050505 70%)" }} />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center"
      >
        <span className="text-[9px] tracking-[0.35em] text-[#FF1493] uppercase block mb-6">
          Find Your World
        </span>
        <h2
          className="font-['Rajdhani'] font-bold uppercase leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#F5F5F5" }}
        >
          Your story.{" "}
          <span style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>
            Your world.
          </span>
        </h2>
        <p className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Every collection is a chapter in your legend. Step inside and make it yours.
        </p>
        <MotionLink
          to="/shop"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
        >
          Explore the Shop
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block ml-2"
          >
            →
          </motion.span>
        </MotionLink>
      </motion.div>
    </section>
  );
}

// ── Collections Page ──────────────────────────────────────────────────────────

export default function Collections() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageEnter}>
      <CollectionsHero />
      <FeaturedCollection />
      <MarqueeSection items={marqueeItems} />
      <CollectionGrid />
      <FinalCTA />
    </motion.div>
  );
}