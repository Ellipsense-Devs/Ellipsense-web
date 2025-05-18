"use client";

import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  id,
  threshold = 0.1,
  delay = 0,
  once = true,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
