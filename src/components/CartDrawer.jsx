import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function CartItem({ item, onUpdateQty, onRemove }) {
  const { product, qty } = item;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex gap-4 py-5 border-b border-[#1A1A1A]"
    >
      {/* Image */}
      <div className="w-20 h-24 shrink-0 bg-[#0D0D0D] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-['Rajdhani'] text-sm font-semibold uppercase text-[#F5F5F5] truncate">
              {product.name}
            </h3>
            <span className="text-[9px] tracking-[0.2em] text-[#888888] uppercase block mt-0.5">
              {product.category}
            </span>
          </div>
          <motion.button
            onClick={() => onRemove(product.id)}
            whileHover={{ color: "#FF1493", rotate: 90 }}
            className="text-[#888888] text-sm shrink-0 transition-colors"
            aria-label={`Remove ${product.name}`}
          >
            ✕
          </motion.button>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          {/* Quantity controls */}
          <div className="flex items-center border border-[#333333]">
            <motion.button
              onClick={() => onUpdateQty(product.id, -1)}
              whileHover={{ color: "#39FF14" }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center text-[#888888] transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </motion.button>
            <span className="w-8 text-center text-xs text-[#F5F5F5] font-medium">{qty}</span>
            <motion.button
              onClick={() => onUpdateQty(product.id, 1)}
              whileHover={{ color: "#39FF14" }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center text-[#888888] transition-colors"
              aria-label="Increase quantity"
            >
              +
            </motion.button>
          </div>

          <span className="font-['Orbitron'] text-sm text-[#F5F5F5]">
            ¥{(product.price * qty * 150).toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CartDrawer({ open, onClose, cart, onUpdateQty, onRemove }) {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            className="fixed inset-0 z-[150] bg-[#050505]/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            key="cart-drawer"
            className="fixed right-0 top-0 z-[160] h-full w-[92vw] sm:w-[400px] md:w-[420px] bg-[#0A0A0A] border-l border-[#39FF14]/20 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            {/* Neon accent line */}
            <div
              className="absolute left-0 top-0 w-px h-full opacity-30"
              style={{
                background: "linear-gradient(to bottom, transparent, #39FF14 30%, #FF1493 70%, transparent)",
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]">
              <div className="flex items-baseline gap-3">
                <h2 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#F5F5F5] leading-none">
                  Cart
                </h2>
                <span className="font-['Orbitron'] text-xs text-[#39FF14]">
                  ({itemCount})
                </span>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90, color: "#FF1493" }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center text-[#888888] transition-colors text-lg"
                aria-label="Close cart"
              >
                ✕
              </motion.button>
            </div>

            {/* Items */}
            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
                <div className="w-16 h-16 border border-[#39FF14]/30 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#F5F5F5] mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    Every legend starts with a first drop.
                  </p>
                </div>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="px-8 py-4 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
                >
                  EXPLORE THE SHOP
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6">
                  <AnimatePresence initial={false} mode="popLayout">
                    {cart.map((item) => (
                      <CartItem
                        key={item.product.id}
                        item={item}
                        onUpdateQty={onUpdateQty}
                        onRemove={onRemove}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="px-6 py-5 border-t border-[#1A1A1A] bg-[#080808]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-[0.25em] text-[#888888] uppercase">
                      Subtotal
                    </span>
                    <div className="flex flex-col items-end leading-tight">
                      <span className="font-['Orbitron'] text-lg text-[#F5F5F5]">
                        ¥{(subtotal * 150).toLocaleString()}
                      </span>
                      <span className="text-[9px] text-[#888888]">${subtotal} USD</span>
                    </div>
                  </div>
                  <p className="text-[9px] tracking-[0.15em] text-[#888888]/60 uppercase mb-4">
                    Free shipping on orders over ¥12,000
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px #39FF1460" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 bg-[#39FF14] text-[#050505] text-xs font-bold tracking-[0.2em] uppercase glow-box-green transition-colors duration-300 hover:bg-[#FF1493] hover:shadow-[0_0_20px_#FF149366]"
                  >
                    CHECKOUT
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ x: 4, color: "#39FF14" }}
                    className="w-full text-center text-[10px] tracking-[0.25em] text-[#888888] uppercase mt-4 transition-colors"
                  >
                    Continue Shopping →
                  </motion.button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}