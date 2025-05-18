"use client";

import Navbar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import AboutSection from "@/components/sections/AboutSection";
import BlankSection from "@/components/sections/BlankSection";
import VideoSection from "@/components/sections/VideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import FooterSection from "@/components/sections/FooterSection";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#EAEAEA] overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />

        <InfoSection />
        <AboutSection />
        <Services />
        <VideoSection />
        <BlankSection />

        {/* <TestimonialsSection /> */}
        {/* <CallToActionSection /> */}
      </main>

      <FooterSection />

      {/* Global styles for animations and 3D card effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden; /* Helps prevent horizontal scroll from animations */
        }
      `}</style>
    </div>
  );
}
