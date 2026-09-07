import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp, pageEnter } from "../lib/motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const MotionLink = motion.create(Link);

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

// ── Shop Hero ─────────────────────────────────────────────────────────────────

function ShopHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505]" style={{ paddingTop: "100px", paddingBottom: "120px" }}>
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon accent line — left */}
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

      {/* Neon accent line — right vertical (subtle) */}
      <motion.div
        className="absolute right-12 top-1/4 w-px h-32 opacity-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ background: "linear-gradient(to bottom, transparent, #FF1493, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">
            SS 2026 — Collection
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase leading-[0.85] mb-4"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          <span className="block text-[#F5F5F5]">SHOP</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="font-['Rajdhani'] text-lg md:text-2xl font-semibold tracking-[0.15em] uppercase text-[#F5F5F5]/50 mb-8"
        >
          The Latest Zenji Pieces
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-md leading-relaxed font-light"
        >
          Premium anime-inspired streetwear. Every piece tells a story. Built for those who define their own legend.
        </motion.p>

        {/* Decorative count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-12 inline-flex items-center gap-4"
        >
          <span className="font-['Orbitron'] text-2xl font-bold text-[#39FF14]">{products.length}</span>
          <div className="flex flex-col">
            <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Pieces</span>
            <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Available Now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Product Grid ──────────────────────────────────────────────────────────────

function ProductGrid({ onAddToCart }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">Collection</span>
            <h2 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold uppercase text-[#F5F5F5] leading-none">
              All Pieces
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

        {/* Product grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={setActiveModal} />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
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

// ── Bottom CTA ────────────────────────────────────────────────────────────────

function ShopCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#080808]">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1400&h=700&fit=crop&auto=format"
          alt="ZENJI collection"
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
          Explore More
        </span>
        <h2
          className="font-['Rajdhani'] font-bold uppercase leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#F5F5F5" }}
        >
          Find your{" "}
          <span style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>
            story.
          </span>
        </h2>
        <p className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Each collection is a chapter. Explore the full Zenji universe and find the pieces that speak to you.
        </p>
        <MotionLink
          to="/collections"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
        >
          EXPLORE ZENJI COLLECTIONS
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

// ── Shop Page ─────────────────────────────────────────────────────────────────

export default function Shop({ onAddToCart }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageEnter}
    >
      <ShopHero />
      <ProductGrid onAddToCart={onAddToCart} />
      <ShopCTA />
    </motion.div>
  );
}
