import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp } from "../lib/motion";

function Footer() {
  const navigateLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/collections" },
    { label: "Lookbook", to: "/lookbook" },
    { label: "About Us", to: "/about" },
  ];

  const supportLinks = ["Sizing Guide", "Shipping & Returns", "FAQ", "Privacy Policy"];

  return (
    <footer className="bg-[#030303] border-t border-[#39FF14]/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <Link
              to="/"
              className="font-['Orbitron'] text-2xl font-black tracking-[0.15em] text-[#F5F5F5] glow-green block mb-4"
            >
              ZENJI
            </Link>
            <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
              Anime-bred. Street-raised. A label for those who write their own rules in neon ink.
            </p>
            {/* Socials */}
            <div className="flex gap-5 mt-6">
              {["Instagram", "TikTok", "Contact"].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ y: -3, color: "#FF1493" }}
                  className="text-[9px] tracking-[0.2em] text-[#888888] transition-colors uppercase"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp}>
            <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-5">Navigate</span>
            <div className="flex flex-col gap-3">
              {navigateLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeUp}>
            <span className="text-[9px] tracking-[0.25em] text-[#39FF14] uppercase block mb-5">Support</span>
            <div className="flex flex-col gap-3">
              {supportLinks.map((l) => (
                <motion.a
                  key={l}
                  href="#"
                  whileHover={{ x: 4, color: "#F5F5F5" }}
                  className="text-sm text-[#888888] transition-colors"
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#39FF14]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] tracking-[0.15em] text-[#888888]/50">
            © 2026 ZENJI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#39FF14] rounded-full animate-pulse" />
            <span className="text-[9px] tracking-[0.2em] text-[#888888]/40 uppercase">Tokyo • New York • Seoul</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;