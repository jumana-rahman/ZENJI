import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      className="product-card product-border group cursor-pointer border border-transparent"
      onClick={() => onClick?.(product)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#0D0D0D]">
        <img
          src={product.image}
          alt={product.name}
          className="product-img w-full h-full object-cover transition-transform duration-500"
        />
        {/* Hover overlay */}
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
    </motion.div>
  );
}
