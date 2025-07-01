// src/components/SectionTransition.jsx
import React from "react";
import { motion, useScroll } from "framer-motion";

const SectionTransition = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default SectionTransition;
