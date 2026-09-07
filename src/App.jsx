import { useState, useEffect, useRef } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

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

// ── Announcement Bar ──────────────────────────────────────────────────────────

function AnnouncementBar() {
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
    <div className="w-full overflow-hidden bg-[#0A0A0A] border-b border-[#39FF14]/20 py-2">
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
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["SHOP", "COLLECTIONS", "LOOKBOOK", "ABOUT"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/95 backdrop-blur-sm border-b border-[#39FF14]/10" : "bg-transparent"
        }`}
        style={{ top: "33px" }} // account for announcement bar height
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-['Orbitron'] text-xl font-black tracking-[0.15em] text-[#F5F5F5] glow-green animate-flicker">
            ZENJI
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] tracking-[0.2em] text-[#888888] hover:text-[#39FF14] transition-colors duration-200 font-medium"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <button className="relative text-[#F5F5F5] hover:text-[#39FF14] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#39FF14] text-[#050505] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Open menu"
            >
              <span className="w-5 h-px bg-[#F5F5F5]" />
              <span className="w-3 h-px bg-[#39FF14]" />
              <span className="w-5 h-px bg-[#F5F5F5]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu-open absolute right-0 top-0 h-full w-72 bg-[#0A0A0A] border-l border-[#39FF14]/20 flex flex-col p-8 gap-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-[#888888] hover:text-[#FF1493] text-2xl"
              aria-label="Close"
            >
              ✕
            </button>
            <span className="font-['Orbitron'] text-lg font-black tracking-widest text-[#39FF14]">ZENJI</span>
            <div className="flex flex-col gap-6 mt-4">
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.2em] text-[#F5F5F5] hover:text-[#39FF14] transition-colors font-medium"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-5">
              {["IG", "TT", "YT"].map((s) => (
                <a key={s} href="#" className="text-[10px] tracking-widest text-[#888888] hover:text-[#FF1493] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* BG image */}
      <div className="absolute inset-0 bg-[#050505]">
        <img
          src="https://images.unsplash.com/photo-1770247600271-82edac7f4df2?w=1400&h=900&fit=crop&auto=format"
          alt="ZENJI hero"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: "60% center" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      </div>

      {/* Neon accent line */}
      <div
        className="absolute left-0 top-1/3 w-px h-48 opacity-60"
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
        {/* Label */}
        <div className="animate-fade-in-up opacity-0 delay-100 mb-6 inline-flex items-center gap-3">
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">SS 2026 — Void Season</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up opacity-0 delay-200 font-['Rajdhani'] font-bold text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] uppercase mb-6 max-w-3xl">
          <span className="block text-[#F5F5F5]">DEFINE</span>
          <span className="block" style={{ color: "#39FF14", textShadow: "0 0 40px #39FF1466" }}>YOUR</span>
          <span className="block text-[#F5F5F5]">LEGEND</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-in-up opacity-0 delay-300 text-[#888888] text-sm md:text-base max-w-sm mb-10 leading-relaxed font-light">
          Anime-bred. Street-raised. A collection for those who write their own rules in neon.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up opacity-0 delay-500 flex items-center gap-5">
          <button className="group relative px-8 py-4 bg-[#39FF14] text-[#050505] text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#FF1493] glow-box-green hover:shadow-[0_0_20px_#FF149366]">
            SHOP NOW
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="text-[11px] tracking-[0.2em] text-[#888888] hover:text-[#39FF14] transition-colors uppercase flex items-center gap-2">
            Explore Collection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up opacity-0 delay-700 mt-16 flex items-center gap-3">
          <div className="w-6 h-10 border border-[#39FF14]/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#39FF14] rounded-full animate-bounce" />
          </div>
          <span className="text-[9px] tracking-[0.3em] text-[#888888]/60 uppercase">Scroll to explore</span>
        </div>
      </div>

      {/* Bottom right stat */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-1 animate-fade-in opacity-0 delay-700">
        <span className="font-['Orbitron'] text-3xl font-bold text-[#39FF14]">24</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">New pieces</span>
        <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">this season</span>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────

function MarqueeSection() {
  const items = ["ZENJI", "ANIME STREETWEAR", "DEFINE YOUR LEGEND", "VOID SEASON", "NEON PROPHET", "GHOST PROTOCOL", "SS 2026"];

  return (
    <div className="w-full overflow-hidden border-y border-[#39FF14]/20 py-4 bg-[#080808]">
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
    </div>
  );
}

// ── Collections ───────────────────────────────────────────────────────────────

function Collections() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase block mb-3">Featured</span>
          <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
            Collections
          </h2>
        </div>
        <a href="#" className="hidden md:flex text-[11px] tracking-[0.2em] text-[#888888] hover:text-[#39FF14] transition-colors uppercase items-center gap-2">
          View All
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {collections.map((col, i) => (
          <div
            key={col.id}
            className="collection-card group relative overflow-hidden cursor-pointer bg-[#0D0D0D]"
            style={{ aspectRatio: i === 1 ? "3/4" : "2/3" }}
          >
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={col.image}
                alt={col.title}
                className="collection-img w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            </div>

            {/* Border */}
            <div className="collection-border absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[#39FF14]/40" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-2">{col.sub}</span>
              <h3 className="font-['Rajdhani'] text-2xl md:text-3xl font-bold uppercase text-[#F5F5F5] mb-4">{col.title}</h3>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#888888] uppercase group-hover:text-[#39FF14] transition-colors duration-300">
                View Collection
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Product Modal ─────────────────────────────────────────────────────────────

function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md" onClick={onClose} />
      <div className="modal-in relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#39FF14]/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-[#888888] hover:text-[#FF1493] transition-colors text-lg"
        >
          ✕
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
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

          {/* Details */}
          <div className="p-8 flex flex-col gap-6">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase">{product.category}</span>
              <h2 className="font-['Rajdhani'] text-3xl font-bold uppercase text-[#F5F5F5] mt-1">{product.name}</h2>
              <p className="font-['Orbitron'] text-2xl text-[#F5F5F5] mt-3">¥{(product.price * 150).toLocaleString()}</p>
              <p className="text-[10px] text-[#888888] mt-0.5">${product.price} USD</p>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed">{product.description}</p>

            {/* Size selector */}
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#888888] uppercase block mb-3">Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={product.badge === "SOLD OUT"}
                    className={`px-4 py-2 text-[10px] tracking-[0.1em] border transition-all duration-200 ${
                      selectedSize === size
                        ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10"
                        : "border-[#333333] text-[#888888] hover:border-[#888888]"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                if (product.badge !== "SOLD OUT") {
                  onAddToCart(product);
                  onClose();
                }
              }}
              disabled={product.badge === "SOLD OUT"}
              className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: product.badge === "SOLD OUT" ? "#333333" : "#39FF14",
                color: "#050505",
              }}
            >
              {product.badge === "SOLD OUT" ? "SOLD OUT" : "ADD TO CART"}
            </button>

            <p className="text-[10px] text-[#888888]/60 text-center">Free shipping on orders over ¥12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Latest Drops ──────────────────────────────────────────────────────────────

function LatestDrops({ onAddToCart }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#FF1493] uppercase block mb-3">Latest</span>
            <h2 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold uppercase text-[#F5F5F5] leading-none">
              New Drops
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#888888]">
            <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
            <span>Live Now</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card product-border group cursor-pointer border border-transparent transition-colors duration-300"
              onClick={() => setActiveModal(product)}
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-[#0D0D0D]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img w-full h-full object-cover transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="product-overlay absolute inset-0 bg-[#050505]/60 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <span className="text-[10px] tracking-[0.25em] text-[#39FF14] uppercase font-bold flex items-center gap-2">
                    VIEW PRODUCT
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                {/* Badge */}
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-[8px] md:text-[9px] tracking-[0.15em] px-2 py-0.5 font-bold uppercase"
                    style={{
                      background: product.badge === "SOLD OUT" ? "#555" : product.badge === "LIMITED" ? "#FF1493" : "#39FF14",
                      color: "#050505",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3 md:p-4 bg-[#0A0A0A]">
                <p className="text-[9px] tracking-[0.2em] text-[#888888] uppercase mb-1">{product.category}</p>
                <h3 className="font-['Rajdhani'] text-sm md:text-base font-semibold uppercase text-[#F5F5F5] truncate">{product.name}</h3>
                <p className="text-xs text-[#F5F5F5]/80 mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        product={activeModal}
        onClose={() => setActiveModal(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}

// ── Manifesto ─────────────────────────────────────────────────────────────────

function Manifesto() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const lines = [
    { text: "We don't follow trends.", color: "#F5F5F5" },
    { text: "We create our own story.", color: "#39FF14" },
    { text: "Born from the underground.", color: "#F5F5F5" },
    { text: "Built for the unwritten.", color: "#FF1493" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="max-w-4xl">
        <span className="text-[9px] tracking-[0.35em] text-[#888888] uppercase block mb-10">Our Manifesto</span>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`overflow-hidden ${visible ? "reveal-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
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
          </div>
        ))}
      </div>

      {/* Side detail */}
      <div className="mt-16 flex items-center gap-8">
        <div className="w-16 h-px bg-[#39FF14]/40" />
        <p className="text-sm text-[#888888] max-w-xs leading-relaxed">
          Since 2020. Tokyo-born. Globally worn. Every piece tells the chapter you haven't written yet.
        </p>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#080808]">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1788105048973-4fa329fe74c6?w=1400&h=700&fit=crop&auto=format"
          alt="CTA background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #39FF1408 0%, #050505 70%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
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
        <button className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-all duration-300 glow-box-green">
          SHOP ALL DROPS
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-[#39FF14]/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-['Orbitron'] text-2xl font-black tracking-[0.15em] text-[#F5F5F5] glow-green block mb-4">
              ZENJI
            </span>
            <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
              Anime-bred. Street-raised. A label for those who write their own rules in neon ink.
            </p>
            {/* Socials */}
            <div className="flex gap-5 mt-6">
              {["Instagram", "TikTok", "Contact"].map((s) => (
                <a key={s} href="#" className="text-[9px] tracking-[0.2em] text-[#888888] hover:text-[#FF1493] transition-colors uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-5">Navigate</span>
            <div className="flex flex-col gap-3">
              {["Shop", "Collections", "Lookbook", "About Us"].map((l) => (
                <a key={l} href="#" className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-5">Support</span>
            <div className="flex flex-col gap-3">
              {["Sizing Guide", "Shipping & Returns", "FAQ", "Privacy Policy"].map((l) => (
                <a key={l} href="#" className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#39FF14]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] text-[#888888]/50">
            © 2026 ZENJI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#39FF14] rounded-full animate-pulse" />
            <span className="text-[9px] tracking-[0.2em] text-[#888888]/40 uppercase">Tokyo • New York • Seoul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (_product) => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <AnnouncementBar />
      <Navbar cartCount={cartCount} />
      <Hero />
      <MarqueeSection />
      <Collections />
      <LatestDrops onAddToCart={handleAddToCart} />
      <Manifesto />
      <CTA />
      <Footer />
    </div>
  );
}