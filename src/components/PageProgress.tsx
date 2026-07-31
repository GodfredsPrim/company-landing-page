import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function PageProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  if (reduceMotion) return null;

  return <motion.div className="page-progress" style={{ scaleX }} aria-hidden="true" />;
}
