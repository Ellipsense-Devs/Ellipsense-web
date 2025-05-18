"use client";

import { useState, ReactNode } from "react";

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

  return (
    <div
      className="flip-card h-[24rem] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
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
