"use client";

import { useState, ReactNode, useEffect, useRef } from "react";

interface FlipCardProps {
  frontIcon: ReactNode;
  frontTitle: string;
  frontContent: string;
  backTitle: string;
  backContent: string;
}

const FlipCard = ({
  frontIcon,
  frontTitle,
  frontContent,
  backTitle,
  backContent,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isFlippingRef = useRef(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile scroll-based auto-flip
  useEffect(() => {
    if (!isMobile) return; // Only run on mobile

    const handleScroll = () => {
      if (cardRef.current) {
        const element = cardRef.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const centerBuffer = windowHeight * 0.1;

        const fullyVisible =
          rect.top >= centerBuffer &&
          rect.bottom <= windowHeight - centerBuffer &&
          rect.height < windowHeight;

        if (fullyVisible && !isFlipped && !isFlippingRef.current) {
          isFlippingRef.current = true;
          timeoutRef.current = setTimeout(() => {
            setIsFlipped(true);
            isFlippingRef.current = false;
          }, 1000);
        } else if (!fullyVisible && (isFlipped || isFlippingRef.current)) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          isFlippingRef.current = false;
          setIsFlipped(false);
        }
      }
    };

    // Initial check
    handleScroll();

    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 50);
      }
    };

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isFlipped, isMobile]);

  return (
    <div
      ref={cardRef}
      className="flip-card h-[24rem] w-full perspective-1000"
      {...(!isMobile && {
        onMouseEnter: () => setIsFlipped(true),
        onMouseLeave: () => setIsFlipped(false),
      })}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center">
            {frontIcon}
            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              {frontTitle}
            </h3>
          </div>
          <p className="text-gray-600 text-center px-4">{frontContent}</p>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-purple-700 p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-6 rotate-y-180 text-white">
          <h3 className="text-2xl font-bold mt-4 text-center">{backTitle}</h3>
          <p className="text-center px-4">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
