"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const BlankSection = () => {
  return (
    <AnimatedSection
      id="blank"
      className="py-20 relative min-h-screen"
      threshold={0.2}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/smartxcode.gif"
          alt="Code Animation"
          fill
          className="object-cover"
          priority
        />
      </div>
    </AnimatedSection>
  );
};

export default BlankSection;
