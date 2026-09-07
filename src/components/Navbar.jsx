import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { staggerContainer, fadeUp } from "../lib/motion";

function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "SHOP", to: "/shop" },
    { label: "COLLECTIONS", to: "/collections" },
    { label: "LOOKBOOK", to: "/lookbook" },
    { label: "ABOUT", to: "/about" },
  ];

  const linkClass = ({ isActive }) =>
    `text-[11px] tracking-[0.2em] font-medium transition-colors duration-200 ${
      isActive ? "text-[#39FF14]" : "text-[#888888] hover:text-[#39FF14]"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/95 backdrop-blur-sm border-b border-[#39FF14]/10" : "bg-transparent"
        }`}
        style={{ top: "33px" }} // account for announcement bar height
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-['Orbitron'] text-xl font-black tracking-[0.15em] text-[#F5F5F5] glow-green animate-flicker"
          >
            ZENJI
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <motion.button
              onClick={onCartOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-[#F5F5F5] hover:text-[#39FF14] transition-colors"
              aria-label="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#39FF14] text-[#050505] text-[9px] font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Open menu"
            >
              <span className="w-5 h-px bg-[#F5F5F5]" />
              <span className="w-3 h-px bg-[#39FF14]" />
              <span className="w-5 h-px bg-[#F5F5F5]" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[100] flex">
            <motion.div
              className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-[#0A0A0A] border-l border-[#39FF14]/20 flex flex-col p-8 gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <motion.button
                onClick={() => setMenuOpen(false)}
                whileHover={{ rotate: 90 }}
                className="self-end text-[#888888] hover:text-[#FF1493] text-2xl"
                aria-label="Close menu"
              >
                ✕
              </motion.button>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-['Orbitron'] text-lg font-black tracking-widest text-[#39FF14]"
              >
                ZENJI
              </Link>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col gap-6 mt-4"
              >
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm tracking-[0.2em] font-medium transition-colors ${
                        isActive ? "text-[#39FF14]" : "text-[#F5F5F5] hover:text-[#39FF14]"
                      }`
                    }
                  >
                    <motion.span variants={fadeUp} className="block">
                      {l.label}
                    </motion.span>
                  </NavLink>
                ))}
              </motion.div>
              <div className="mt-auto flex gap-5">
                {["IG", "TT", "YT"].map((s) => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ y: -3, color: "#FF1493" }}
                    className="text-[10px] tracking-widest text-[#888888] transition-colors"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;