import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ComingSoon({ title }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#050505] text-center px-6"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Decorative grid lines */}
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

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#39FF14]" />
          <span className="text-[10px] tracking-[0.3em] text-[#39FF14] uppercase font-medium">Coming Soon</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-['Rajdhani'] font-bold uppercase leading-[0.9] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          <span className="block text-[#F5F5F5]">{title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-[#888888] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-light"
        >
          This chapter is still being written. Stay tuned for an experience crafted in neon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="inline-flex"
        >
          <Link
            to="/"
            className="group px-10 py-5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#39FF14] hover:text-[#050505] transition-colors duration-300 glow-box-green"
          >
            BACK TO HOME
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
