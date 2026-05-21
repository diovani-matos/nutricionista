"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
