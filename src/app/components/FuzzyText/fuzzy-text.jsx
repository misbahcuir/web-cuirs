"use client";

import React from "react";
import { motion } from "framer-motion";
export default function TextReveal() {
  const textToAnimate = "Chittagong University";
  const words = textToAnimate.split(" ");
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.04 * i,
      },
    }),
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };
  return (
    <div className="flex items-center justify-center font-sans -mb-4 ">
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-5xl font-bold text-center max-w-5xl leading-relaxed"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              marginRight: "12px",
              marginTop: "10px",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
