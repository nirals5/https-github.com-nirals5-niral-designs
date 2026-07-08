import React from "react";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function FadeInSection({ children, className = "", id }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }} // once per section as requested
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth professional easeOut (quintic)
      className={className}
    >
      {children}
    </motion.div>
  );
}
