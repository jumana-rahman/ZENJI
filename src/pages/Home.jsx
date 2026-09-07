import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp, revealUp } from "../lib/motion";
import ProductCard from "../components/ProductCard";

const MotionLink = motion.create(Link);

// ── Data (Home page subset) ─────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: "VOID OVERSIZED TEE",
    price: 68,
    category: "Tops",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1761073490980-ecd40e9bec57?w=600&h=750&fit=crop&auto=format",
    description: "Heavyweight 280gsm cotton. Acid-washed finish with sublimated void-print graphics. Dropped shoulders, boxy silhouette.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "NEON PROPHET HOODIE",
    price: 128,
    category: "Tops",
    badge: "DROP",
    image: "https://images.unsplash.com/photo-1788128880748-cfac7fa3cb40?w=600&h=750&fit=crop&auto=format",
    description: "French terry brushed interior. Reflective Zenji crest. Kangaroo pocket with hidden zip.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "GHOST CARGO PANTS",
    price: 148,
    category: "Bottoms",
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1770236512224-794bda74b28f?w=600&h=750&fit=crop&auto=format",
    description: "Ripstop nylon shell. Six pockets, adjustable ankle straps, tapered cut. Matte hardware throughout.",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 4,
    name: "CIPHER MOTO JACKET",
    price: 248,
    category: "Outerwear",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1788106083097-348fde19e4f8?w=600&h=750&fit=crop&auto=format",
    description: "Faux-leather shell with mesh lining. Asymmetric zip. Zenji patch on rear yoke. Zero-compromise silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "STATIC BUCKET HAT",
    price: 48,
    category: "Accessories",
    badge: "DROP",
    image: "https://images.unsplash.com/photo-1760920527114-2958980d44d2?w=600&h=750&fit=crop&auto=format",
    description: "Cotton-twill with embroidered circuit pattern. UV-protective brim. One size, adjustable drawcord.",
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "ROGUE TRACK JACKET",
    price: 118,
    category: "Tops",
    badge: "SOLD OUT",
    image: "https://images.unsplash.com/photo-1767897213817-8664d9b82393?w=600&h=750&fit=crop&auto=format",
    description: "Recycled poly tricot. Contrast piping, snap collar. Sublimated kanji running down sleeves.",
    sizes: ["S", "M", "L", "XL"],
  },
];

const collections = [
  {
    id: 1,
    title: "VOID SEASON",
    sub: "SS 2026",
    image: "https://images.unsplash.com/photo-1770247600271-82edac7f4df2?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "NEON PROPHET",
    sub: "Capsule Collection",
    image: "https://images.unsplash.com/photo-1761084688828-c53ddc918307?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "GHOST PROTOCOL",
    sub: "FW 2026",
    image: "https://images.unsplash.com/photo-1766535570784-2581adec6a3a?w=800&h=1000&fit=crop&auto=format",
  },
];

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* BG image */}
      <div className="absolute inset-0 bg-[#050505]">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1770247600271-82edac7f4df2?w=1400&h=900&fit=crop&auto=format"
          alt="ZENJI hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: "60% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      </div>

      {/* Neon accent line */}
      <motion.div
        className="absolute left-0 top-1/3 w-px h-48 opacity-60"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.6, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        style={{ background: "linear-gradient(to bottom, transparent, #39FF14, transparent)" }}
      />

      {/* Grid lines decorative */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">SS 2026 — Void Season</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] uppercase mb-6 max-w-3xl"
        >
          <span className="block text-[#F5F5F5]">DEFINE</span>
          <span className="block" style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>YOUR</span>
          <span className="block text-[#F5F5F5]">LEGEND</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-sm mb-10 leading-relaxed font-light"
        >
          Anime-bred. Street-raised. A collection for those who write their own rules in neon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-5"
        >
          <MotionLink
            to="/shop"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative px-8 py-4 bg-[#39FF14] text-[#050505] text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#FF1493] glow-box-green hover:shadow-[0_0_20px_#FF149366]"
          >
            SHOP NOW
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </MotionLink>
          <MotionLink
            to="/collections"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="text-[11px] tracking-[0.2em] text-[#888888] hover:text-[#39FF14] transition-colors uppercase flex items-center gap-2"
          >
            Explore Collection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MotionLink>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="w-6 h-10 border border-[#39FF14]/30 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#39FF14] rounded-full"
            />
          </div>
          <span className="text-[9px] tracking-[0.3em] text-[#888888]/60 uppercase">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Bottom right stat */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-1"
      >
        <span className="font-['Orbitron'] text-3xl font-bold text-[#39FF14]">24</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">New pieces</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">this season</span>
      </motion.div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────

function MarqueeSection() {
  const items = ["ZENJI", "ANIME STREETWEAR", "DEFINE YOUR LEGEND", "VOID SEASON", "NEON PROPHET", "GHOST PROTOCOL", "SS 2026"];

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

// ── Collections ───────────────────────────────────────────────────────────────

function Collections() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase block mb-3">Featured</span>
          <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
            Collections
          </h2>
        </div>
        <MotionLink
          to="/collections"
          whileHover={{ x: 6, color: "#39FF14" }}
          className="hidden md:flex text-[11px] tracking-[0.2em] text-[#888888] transition-colors uppercase items-center gap-2"
        >
          View All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </MotionLink>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
      >
        {collections.map((col, i) => (
          <MotionLink
            key={col.id}
            to="/shop"
            variants={fadeUp}
            className="collection-card group relative overflow-hidden cursor-pointer bg-[#0D0D0D]"
            style={{ aspectRatio: i === 1 ? "3/4" : "2/3" }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={col.image}
                alt={col.title}
                className="collection-img w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            </div>
            <div className="collection-border absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[#39FF14]/40" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-2">{col.sub}</span>
              <h3 className="font-['Rajdhani'] text-2xl md:text-3xl font-bold uppercase text-[#F5F5F5] mb-4">{col.title}</h3>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#888888] uppercase group-hover:text-[#39FF14] transition-colors duration-300">
                View Collection
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}

// ── Product Modal ─────────────────────────────────────────────────────────────

function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#39FF14]/20"
      >
        <motion.button
          onClick={onClose}
          whileHover={{ rotate: 90, color: "#FF1493" }}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-[#888888] transition-colors text-lg"
        >
          ✕
        </motion.button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] bg-[#0D0D0D]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span
                className="absolute top-4 left-4 text-[9px] tracking-[0.2em] px-2 py-1 font-bold uppercase"
                style={{
                  background: product.badge === "SOLD OUT" ? "#888888" : product.badge === "LIMITED" ? "#FF1493" : "#39FF14",
                  color: "#050505",
                }}
              >
                {product.badge}
              </span>
            )}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="p-8 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase">{product.category}</span>
              <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#F5F5F5] mt-1">{product.name}</h2>
              <p className="font-['Orbitron'] text-2xl text-[#F5F5F5] mt-3">¥{(product.price * 150).toLocaleString()}</p>
              <p className="text-[10px] text-[#888888] mt-0.5">${product.price} USD</p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-[#888888] leading-relaxed">{product.description}</motion.p>

            <motion.div variants={fadeUp}>
              <span className="text-[10px] tracking-[0.2em] text-[#888888] uppercase block mb-3">Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={product.badge === "SOLD OUT"}
                    whileHover={{ borderColor: "#888888" }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-[10px] tracking-[0.1em] border transition-colors duration-200 ${
                      selectedSize === size
                        ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10"
                        : "border-[#333333] text-[#888888]"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.button
              variants={fadeUp}
              onClick={() => {
                if (product.badge !== "SOLD OUT") {
                  onAddToCart(product);
                  onClose();
                }
              }}
              disabled={product.badge === "SOLD OUT"}
              whileHover={product.badge !== "SOLD OUT" ? { scale: 1.02, boxShadow: "0 0 25px #39FF1460" } : {}}
              whileTap={product.badge !== "SOLD OUT" ? { scale: 0.97 } : {}}
              className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: product.badge === "SOLD OUT" ? "#333333" : "#39FF14",
                color: "#050505",
              }}
            >
              {product.badge === "SOLD OUT" ? "SOLD OUT" : "ADD TO CART"}
            </motion.button>

            <motion.p variants={fadeUp} className="text-[10px] text-[#888888]/60 text-center">Free shipping on orders over ¥12,000</motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Latest Drops ──────────────────────────────────────────────────────────────

function LatestDrops({ onAddToCart }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">Latest</span>
            <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
              New Drops
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#888888]">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-2 h-2 bg-[#39FF14] rounded-full"
            />
            <span>Live Now</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={setActiveModal} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <ProductModal
            product={activeModal}
            onClose={() => setActiveModal(null)}
            onAddToCart={onAddToCart}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Manifesto ─────────────────────────────────────────────────────────────────

function Manifesto() {
  const lines = [
    { text: "We don't follow trends.", color: "#F5F5F5" },
    { text: "We create our own story.", color: "#39FF14" },
    { text: "Born from the underground.", color: "#F5F5F5" },
    { text: "Built for the unwritten.", color: "#FF1493" },
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
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
          {lines.map((line, i) => (
            <motion.div key={i} variants={revealUp} className="overflow-hidden">
              <p
                className="font-['Rajdhani'] font-bold uppercase leading-[1.05] py-1"
                style={{
                  fontSize: "clamp(2rem, 6vw, 5.5rem)",
                  color: line.color,
                  textShadow: line.color !== "#F5F5F5" ? `0 0 30px ${line.color}66` : "none",
                }}
              >
                {line.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-16 flex items-center gap-8"
      >
        <div className="w-16 h-px bg-[#39FF14]/40" />
        <p className="text-sm text-[#888888] max-w-xs leading-relaxed">
          Since 2020. Tokyo-born. Globally worn. Every piece tells the chapter you haven't written yet.
        </p>
      </motion.div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#080808]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1400&h=700&fit=crop&auto=format"
          alt="CTA background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #39FF1408 0%, #050505 70%)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center"
      >
        <span className="text-[9px] tracking-[0.35em] text-[#39FF14] uppercase block mb-6 animate-border-glow">
          Limited Availability
        </span>
        <h2 className="font-['Rajdhani'] font-bold uppercase leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#F5F5F5" }}
        >
          Ready to write{" "}
          <span style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>
            your story?
          </span>
        </h2>
        <p className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          New drops every season. Limited runs. Once it's gone, the chapter closes.
        </p>
        <MotionLink
          to="/shop"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
        >
          SHOP ALL DROPS
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

// ── Home Page ─────────────────────────────────────────────────────────────────

export default function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <Collections />
      <LatestDrops onAddToCart={onAddToCart} />
      <Manifesto />
      <CTA />
    </>
  );
}
