export const motionPresets = {
  fadeInUp: {
    initial: { y: 16 },
    whileInView: { y: 0 },
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
