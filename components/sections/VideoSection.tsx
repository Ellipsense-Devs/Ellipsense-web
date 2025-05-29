"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion, useSpring } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const VideoSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.5,
  });
  const cursorY = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.5,
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleVideoClick = () => {
    window.open("/Promotional-compressed.m4v", "_blank");
  };

  return (
    <AnimatedSection
      id="video"
      className="py-20 relative min-h-screen overflow-hidden"
      threshold={0.2}
    >
      {/* Animated background blobs */}
      <div className="absolute center-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/30 rounded-full filter blur-3xl animate-move1"></div>
      <div className="absolute center-[-5%] right-[-5%] w-[400px] h-[400px] bg-green-400/30 rounded-full filter blur-3xl animate-move2"></div>

      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="/logo.svg"
            alt="Elipsense Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-[#691E75] text-center mb-8"
        >
          Our Works & Projects
        </motion.h2>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={handleVideoClick}
          className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition-colors duration-300 mb-12"
        >
          Watch the Video
        </motion.button>
      </div>      {/* Video Container with increased z-index */}
      <div className="max-w-4xl mx-2.5 sm:mx-auto relative aspect-video z-10">
        <div
          className="absolute inset-0 cursor-none"
          onClick={handleVideoClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          >
            <source src="/Promotional-compressed.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Cursor */}
          {isHovering && (
            <motion.div
              className="pointer-events-none absolute z-50 flex items-center justify-center"
              style={{
                left: cursorX,
                top: cursorY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-purple-700 text-sm font-medium whitespace-nowrap shadow-lg">
                  Click to Watch
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500/20" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VideoSection;
