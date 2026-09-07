import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp, revealUp, pageEnter } from "../lib/motion";
import MarqueeSection from "../components/MarqueeSection";

const MotionLink = motion.create(Link);

const revealImage = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

function RevealImage({ src, alt, aspectClass, className = "" }) {
  return (
    <motion.div
      variants={revealImage}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      className={`relative overflow-hidden bg-[#0D0D0D] ${aspectClass} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* BG image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1766535570784-2581adec6a3a?w=1600&h=1100&fit=crop&auto=format"
          alt="Zenji origin story"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Neon accent line */}
      <motion.div
        className="absolute left-0 top-0 w-px h-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.4, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to bottom, transparent, #39FF14 30%, #39FF14 70%, transparent)",
          transformOrigin: "top",
        }}
      />

      {/* Technical label — top right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute top-24 right-8 md:right-12 font-['Orbitron'] text-[9px] tracking-[0.3em] text-[#888888] uppercase hidden md:block"
      >
        ZENJI — BRAND MANIFESTO
      </motion.span>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-40 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">
            Est. 2020 — Shibuya, Tokyo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase leading-[0.85] mb-10"
          style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
        >
          <span className="block text-[#F5F5F5]">ABOUT</span>
          <span className="block" style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>
            ZENJI
          </span>
        </motion.h1>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-['Rajdhani'] font-semibold uppercase leading-snug text-xl md:text-2xl text-[#F5F5F5]/90 tracking-wide">
            Built for the ones who{" "}
            <span className="text-[#39FF14]">create their own story.</span>
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-12 h-px bg-[#333333]" />
            <span className="text-[10px] tracking-[0.25em] text-[#888888] uppercase font-light">
              The Story Behind The Legend
            </span>
          </div>
        </motion.div>
      </div>

      {/* Technical labels — bottom */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/70 uppercase hidden md:block"
      >
        35.6595°N · 139.7005°E — TOKYO
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 right-6 md:right-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/70 uppercase hidden md:block"
      >
        CHAPTER 01 / THE STORY
      </motion.span>
    </section>
  );
}

// ── Brand Story ───────────────────────────────────────────────────────────────

function BrandStory() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Editorial label above on mobile */}
        <div className="lg:col-span-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3"
          >
            01 / The Story
          </motion.span>
        </div>

        {/* Image */}
        <div className="lg:col-span-5">
          <RevealImage
            src="https://images.unsplash.com/photo-1788106083097-348fde19e4f8?w=900&h=1200&fit=crop&auto=format"
            alt="Where Zenji began"
            aspectClass="aspect-[3/4]"
          />
          <motion.figcaption
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase"
          >
            <span className="font-['Orbitron'] text-[#39FF14]">S.01</span>
            <span className="w-6 h-px bg-[#333333]" />
            <span className="text-[#888888]">Shibuya — 2020</span>
          </motion.figcaption>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 lg:col-start-7">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-['Rajdhani'] font-bold uppercase leading-[0.95] mb-10"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            <span className="block text-[#F5F5F5]">Born In The</span>
            <span className="block text-[#F5F5F5]">Underground.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-[#888888] leading-relaxed font-light max-w-md">
              ZENJI was born in Tokyo, at the crossing where anime culture, street style,
              and the underground collide. What started as a small studio making pieces for
              friends is now a label worn across the world.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#888888] leading-relaxed font-light max-w-md">
              Every drop is a chapter. Every piece is a character you get to shape. We don't
              design clothes for seasons — we design chapters for a story that never ends.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-4 flex items-center gap-4">
              <span className="font-['Orbitron'] text-xs tracking-[0.25em] text-[#39FF14]">EST. 2020</span>
              <span className="w-px h-4 bg-[#333333]" />
              <span className="font-['Orbitron'] text-xs tracking-[0.25em] text-[#888888]">TOKYO</span>
              <span className="w-px h-4 bg-[#333333]" />
              <span className="font-['Orbitron'] text-xs tracking-[0.25em] text-[#888888]">WORLDWIDE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Manifesto ─────────────────────────────────────────────────────────────────

function Manifesto() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="max-w-4xl ml-0">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[9px] tracking-[0.35em] text-[#888888] uppercase block mb-10"
        >
          Our Manifesto
        </motion.span>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {["WE DON'T", "FOLLOW TRENDS."].map((line, i) => (
            <motion.div key={i} variants={revealUp} className="overflow-hidden">
              <p
                className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1 text-[#F5F5F5]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                {line}
              </p>
            </motion.div>
          ))}
          {["WE CREATE", "OUR OWN STORY."].map((line, i) => (
            <motion.div key={`g-${i}`} variants={revealUp} className="overflow-hidden">
              <p
                className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  color: "#39FF14",
                  textShadow: "0 0 34px #39FF1466",
                }}
              >
                {line}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Brand Values ──────────────────────────────────────────────────────────────

function ValueRow({ index, title, text, image, caption, flip }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 md:py-24 first:pt-0 last:pb-0 border-b border-[#101010] last:border-b-0">
      {/* Image */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
        <RevealImage
          src={image}
          alt={title}
          aspectClass="aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4]"
        />
        <motion.figcaption
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase"
        >
          <span className="font-['Orbitron'] text-[#39FF14]">{index}</span>
          <span className="w-6 h-px bg-[#333333]" />
          <span className="text-[#888888]">{caption}</span>
        </motion.figcaption>
      </div>

      {/* Text */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-2" : "lg:col-start-8"}`}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block font-['Orbitron'] font-bold text-[#39FF14]/20 mb-4"
          style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", lineHeight: "1", letterSpacing: "-0.02em" }}
        >
          {index}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase text-4xl md:text-5xl text-[#F5F5F5] leading-none mb-8"
        >
          {title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-14 h-px bg-[#39FF14]/40 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#888888] leading-relaxed font-light max-w-sm"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}

function BrandValues() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-end justify-between mb-16 md:mb-24"
      >
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">02 / The Core</span>
          <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
            What We Stand On
          </h2>
        </div>
        <span className="hidden md:block font-['Orbitron'] text-[10px] tracking-[0.2em] text-[#888888]">
          V.001 — V.003
        </span>
      </motion.div>

      <div className="border-t border-[#101010]">
        <ValueRow
          index="01"
          title="The Idea"
          text="Every garment begins as a concept — a scene, a power, a moment pulled from the stories that shaped us. We design with intent, cut with precision, and build for the long run, not the fast fade."
          image="https://images.unsplash.com/photo-1770236512224-794bda74b28f?w=900&h=1100&fit=crop&auto=format"
          caption="Concept / Directed"
        />
        <ValueRow
          flip
          index="02"
          title="The Culture"
          text="Anime, streetwear, music, nightlife. ZENJI is the uniform of a generation that wears its influences on the outside and keeps its story close — loud in silhouette, quiet in detail."
          image="https://images.unsplash.com/photo-1767897213817-8664d9b82393?w=900&h=1100&fit=crop&auto=format"
          caption="Culture / Untamed"
        />
        <ValueRow
          index="03"
          title="The Community"
          text="From Shibuya to Seoul, New York to São Paulo — we build for the people who make culture move. This isn't just a label. It's a shared world, and you're already part of it."
          image="https://images.unsplash.com/photo-1788128880748-cfac7fa3cb40?w=900&h=1100&fit=crop&auto=format"
          caption="Community / Infinite"
        />
      </div>
    </section>
  );
}

// ── Closing ───────────────────────────────────────────────────────────────────

function Closing() {
  return (
    <section className="relative py-36 md:py-52 px-6 md:px-12 overflow-hidden bg-[#080808]">
      {/* Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 60%, #39FF1409 0%, transparent 55%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 35% 40%, #FF149306 0%, transparent 45%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[9px] tracking-[0.35em] text-[#888888] uppercase block mb-12 font-['Orbitron']"
        >
          Lookbook 006 — Final
        </motion.span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          {["YOUR STORY.", "YOUR WORLD.", "YOUR ZENJI."].map((line, i) => (
            <motion.div key={i} variants={revealUp} className="overflow-hidden">
              <p
                className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 7rem)",
                  color: i === 2 ? "#39FF14" : "#F5F5F5",
                  textShadow: i === 2 ? "0 0 44px #39FF1466" : "0 0 24px #39FF1408",
                }}
              >
                {line}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed font-light"
        >
          One legend. Infinite chapters. The rest is up to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <MotionLink
            to="/collections"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
          >
            Explore The Collection
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </MotionLink>
        </motion.div>
      </div>

      {/* Technical label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-6 left-6 md:left-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/60 uppercase hidden md:block"
      >
        END OF BRAND INFO — 2026
      </motion.span>
    </section>
  );
}

// ── About Page ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageEnter}>
      <AboutHero />
      <BrandStory />
      <Manifesto />
      <MarqueeSection
        items={["ZENJI", "TOKYO STREETWEAR", "DEFINE YOUR LEGEND", "EST. 2020", "ANIME-BRED"]}
      />
      <BrandValues />
      <Closing />
    </motion.div>
  );
}