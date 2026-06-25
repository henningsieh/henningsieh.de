export const motionPresets = {
  fadeInUp: {
    initial: { opacity: 0.01, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  },

  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
}
