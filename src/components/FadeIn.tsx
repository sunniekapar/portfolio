import {  motion, MotionProps } from 'framer-motion';
import React from 'react';

interface FadeInProps extends MotionProps {
  className?: string;
  delay?: number; // Prop for initial delay
  list?: boolean; // Prop to indicate if it's a list of items
}

export default function FadeIn({
  className,
  delay = 0.35,
  list,
  ...props
}: FadeInProps) {
  const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.75,
        staggerChildren: list ? delay : 0,
      },
    },
  };

  return (
    <motion.div
      {...props}
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    />
  );
}

export const FadeInChild: React.FC<FadeInProps> = (props) => {
  return (
    <motion.div
      {...props}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeInOut',
            duration: 0.75,
          },
        },
      }}
    />
  );
};
