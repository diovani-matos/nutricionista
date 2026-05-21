"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-48px" }}
      transition={{ duration: 0.55, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealOnLoad({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
