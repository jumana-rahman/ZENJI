import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, revealUp, pageEnter } from "../lib/motion";

const MotionLink = motion.create(Link);

// ── Shared variants ───────────────────────────────────────────────────────────

const revealImage = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    setIsMobile(media.matches);
    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

// ── Media Figure ──────────────────────────────────────────────────────────────

function MediaFigure({
  src,
  alt,
  aspectClass,
  caption,
  index,
  parallax = false,
  strength = 34,
  standalone = true,
  className = "",
  captionClass = "",
}) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-strength, strength]);

  return (
    <motion.figure
      ref={ref}
      variants={revealImage}
      {...(standalone
        ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-70px" } }
        : {})}
      className={className}
    >
      <div className={`relative overflow-hidden bg-[#0D0D0D] ${aspectClass}`}>
        <motion.img
          style={parallax ? { y } : undefined}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${parallax ? "scale-[1.22]" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/35 via-transparent to-transparent pointer-events-none" />
      </div>
      {caption && (
        <figcaption
          className={`mt-4 flex items-center gap-3 text-[9px] tracking-[0.25em] uppercase ${captionClass}`}
        >
          {index && <span className="font-['Orbitron'] text-[#39FF14]">{index}</span>}
          <span className="w-6 h-px bg-[#333333]" />
          <span className="text-[#888888]">{caption}</span>
        </figcaption>
      )}
    </motion.figure>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function LookbookHero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* BG image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.42 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1770247600271-82edac7f4df2?w=1600&h=1100&fit=crop&auto=format"
          alt="Zenji lookbook 2026"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/55" />
      </div>

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

      {/* Technical label — top right */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute top-24 right-8 md:right-12 font-['Orbitron'] text-[9px] tracking-[0.3em] text-[#888888] uppercase hidden md:block"
      >
        Issue 01 — SS 2026
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
            Zenji / 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase leading-[0.85] mb-8"
          style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
        >
          <span className="block text-[#F5F5F5]">LOOK</span>
          <span className="block" style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>
            BOOK
          </span>
        </motion.h1>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-md leading-relaxed font-light"
        >
          A visual campaign. Five worlds, one legend — shot in the spaces between the streets and the screen.
        </motion.p>
      </div>

      {/* Technical labels — bottom */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/70 uppercase"
      >
        35.6895°N · 139.6917°E — TOKYO
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 right-6 md:right-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/70 uppercase hidden md:block"
      >
        FILM 001 / 35MM / ASA 400
      </motion.span>
    </section>
  );
}

// ── The New Wave ──────────────────────────────────────────────────────────────

function TheNewWave() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-end justify-between mb-14 md:mb-20"
      >
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">Spread 01</span>
          <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
            The New Wave
          </h2>
        </div>
        <span className="hidden md:block font-['Orbitron'] text-[10px] tracking-[0.2em] text-[#888888]">
          F.001 — F.003
        </span>
      </motion.div>

      {/* Asymmetric spread */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start"
      >
        {/* Tall portrait — dominant */}
        <MediaFigure
          standalone={false}
          src="https://images.unsplash.com/photo-1788106083097-348fde19e4f8?w=900&h=1200&fit=crop&auto=format"
          alt="ZENJI / 001"
          aspectClass="aspect-[3/4] lg:aspect-[3/4]"
          index="F.001"
          caption="ZENJI / 001"
          className="lg:col-span-7"
        />

        {/* Right stack */}
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
          <MediaFigure
            standalone={false}
            src="https://images.unsplash.com/photo-1788128880748-cfac7fa3cb40?w=900&h=700&fit=crop&auto=format"
            alt="2026 collection"
            aspectClass="aspect-[4/3]"
            index="F.002"
            caption="2026 Collection"
          />
          <MediaFigure
            standalone={false}
            src="https://images.unsplash.com/photo-1760920527114-2958980d44d2?w=800&h=1000&fit=crop&auto=format"
            alt="ZENJI / 002"
            aspectClass="aspect-[3/4] lg:ml-10"
            index="F.003"
            caption="ZENJI / 002"
          />
        </div>
      </motion.div>
    </section>
  );
}

// ── Typography Interlude ──────────────────────────────────────────────────────

function Interlude({ lines, note, glowLast = true, className = "" }) {
  return (
    <section className={`py-28 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto ${className}`}>
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[9px] tracking-[0.35em] text-[#888888] uppercase block mb-10"
        >
          {note}
        </motion.span>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {lines.map((line, i) => (
            <motion.div key={i} variants={revealUp} className="overflow-hidden">
              <p
                className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  color: glowLast && i === lines.length - 1 ? "#39FF14" : "#F5F5F5",
                  textShadow: glowLast && i === lines.length - 1 ? "0 0 34px #39FF1466" : "none",
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

// ── After Dark ────────────────────────────────────────────────────────────────

function AfterDark() {
  return (
    <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24 md:pb-36">
      <MediaFigure
        src="https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1600&h=950&fit=crop&auto=format"
        alt="After Dark"
        parallax
        strength={40}
        aspectClass="aspect-[16/8] md:aspect-[16/7]"
        caption="After Dark — 2026 Collection"
        captionClass="mt-6"
      />
    </section>
  );
}

// ── Built Different ───────────────────────────────────────────────────────────

function BuiltDifferent() {
  return (
    <section className="py-6 md:py-10 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-end justify-between mb-14 md:mb-20"
      >
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase block mb-3">Spread 02</span>
          <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
            Built Different
          </h2>
        </div>
        <span className="hidden md:block font-['Orbitron'] text-[10px] tracking-[0.2em] text-[#888888]">
          F.004 — F.006
        </span>
      </motion.div>

      {/* Staggered trio */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start"
      >
        <MediaFigure
          standalone={false}
          src="https://images.unsplash.com/photo-1766535570784-2581adec6a3a?w=800&h=1000&fit=crop&auto=format"
          alt="ZENJI / 003"
          aspectClass="aspect-[3/4]"
          index="F.004"
          caption="ZENJI / 003"
        />
        <MediaFigure
          standalone={false}
          src="https://images.unsplash.com/photo-1770236512224-794bda74b28f?w=800&h=1000&fit=crop&auto=format"
          alt="ZENJI / 004"
          aspectClass="aspect-[3/4] sm:mt-10 md:mt-16 lg:mt-20"
          index="F.005"
          caption="ZENJI / 004"
        />
        <MediaFigure
          standalone={false}
          src="https://images.unsplash.com/photo-1767897213817-8664d9b82393?w=800&h=1000&fit=crop&auto=format"
          alt="ZENJI / 005"
          aspectClass="aspect-[3/4] sm:mt-5 md:mt-8"
          index="F.006"
          caption="ZENJI / 005"
        />
      </motion.div>
    </section>
  );
}

// ── Create Your Own World (interlude with archive image) ──────────────────────

function CreateYourWorld() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
        <div className="md:col-span-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[9px] tracking-[0.35em] text-[#888888] uppercase block mb-10"
          >
            Manifesto
          </motion.span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {["CREATE", "YOUR", "OWN WORLD."].map((line, i) => (
              <motion.div key={i} variants={revealUp} className="overflow-hidden">
                <p
                  className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    color: i === 2 ? "#FF1493" : "#F5F5F5",
                    textShadow: i === 2 ? "0 0 34px #FF149366" : "none",
                  }}
                >
                  {line}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Archive side image */}
        <div className="md:col-span-4">
          <MediaFigure
            src="https://images.unsplash.com/photo-1761084688828-c53ddc918307?w=700&h=900&fit=crop&auto=format"
            alt="Archive / 2025"
            aspectClass="aspect-[3/4] md:aspect-[4/5]"
            index="ARCH"
            caption="Archive / 2025"
          />
        </div>
      </div>
    </section>
  );
}

// ── Finale ────────────────────────────────────────────────────────────────────

function Finale() {
  return (
    <section className="relative py-36 md:py-48 overflow-hidden bg-[#080808]">
      {/* BG image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1761073490980-ecd40e9bec57?w=1600&h=1000&fit=crop&auto=format"
          alt="This is Zenji"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #05050500 0%, #050505 75%)" }} />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center"
      >
        <span className="text-[9px] tracking-[0.35em] text-[#39FF14] uppercase block mb-6 font-['Orbitron']">
          Lookbook 006 — Final
        </span>
        <h2
          className="font-['Rajdhani'] font-bold uppercase leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#F5F5F5" }}
        >
          This is{" "}
          <span style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>Zenji.</span>
        </h2>
        <p className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Five worlds lived in. Worn loud. Built for those who refuse to be background.
        </p>
        <MotionLink
          to="/shop"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
        >
          Shop the Collection
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block ml-2"
          >
            →
          </motion.span>
        </MotionLink>
      </motion.div>

      {/* Technical label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-6 left-6 md:left-12 font-['Orbitron'] text-[9px] tracking-[0.25em] text-[#888888]/60 uppercase hidden md:block"
      >
        E.O.F. / 2026
      </motion.span>
    </section>
  );
}

// ── Lookbook Page ─────────────────────────────────────────────────────────────

export default function Lookbook() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageEnter}>
      <LookbookHero />
      <TheNewWave />
      <Interlude
        lines={["WEAR", "YOUR STORY."]}
        note="Spread 01 — Statement"
      />
      <AfterDark />
      <BuiltDifferent />
      <CreateYourWorld />
      <Finale />
    </motion.div>
  );
}