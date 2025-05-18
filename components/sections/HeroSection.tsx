"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordsToCycle = [
  "real-world success.",
  "tangible results.",
  "innovative products.",
  "business growth.",
  "impactful solutions.",
];

const wordVariants = {
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToCycle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 min-h-screen p-4 overflow-hidden"
    >
      {" "}
      {/* Added relative and overflow-hidden */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/30 rounded-full filter blur-3xl animate-move1"></div>
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-green-400/30 rounded-full filter blur-3xl animate-move2"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-7xl w-full mx-auto"
      >
        <div className="max-w-4xl text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[#691E75] leading-tight md:leading-snug">
            We deliver smart, scalable <br />
            solutions that turn ideas into <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wordsToCycle[currentWordIndex]}
                variants={wordVariants}
                initial="exit"
                animate="enter"
                exit="exit"
                className="inline-block bg-gradient-to-r from-purple-700 via-yellow-300 to-purple-700 bg-clip-text text-transparent"
              >
                {wordsToCycle[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>

        <div className="max-w-2xl text-left mt-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From custom software development to digital transformation,
            Elipsense Tech Solution is your trusted partner in leveraging
            technology to achieve your business goals.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full mt-12"
      >
        <div className="flex justify-center">
          <Image
            src="/main.png"
            alt="Dashboard"
            width={1000} // Adjusted for responsiveness
            height={600} // Adjusted for responsiveness
            priority
            className="relative z-10 object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
