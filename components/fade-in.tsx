"use client";

import React from "react";
import { motion, MotionProps, useInView } from "motion/react";
import { PropsWithChildren, useRef } from "react";

interface FadeInProps extends PropsWithChildren<MotionProps> {
  className?: string;
  staggerChildren?: number;
}

export default function FadeIn({
  children,
  className,
  staggerChildren = 0.35,
  ...props
}: FadeInProps) {
  const container = {
    hidden: { opacity: 0, transform: "translateY(32px)" },
    show: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        ease: [0.37, 0, 0.63, 1],
        staggerChildren: staggerChildren,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transform: "translateY(32px)" },
    show: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        duration: 1.05,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={item}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
