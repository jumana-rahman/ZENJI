export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const revealUp = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 20, opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export const pageEnter = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};