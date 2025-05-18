"use client";

import Navbar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import AboutSection from "@/components/sections/AboutSection";
import BlankSection from "@/components/sections/BlankSection";
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
        <BlankSection />
        {/* <TestimonialsSection /> */}
        <CallToActionSection />
      </main>

      <FooterSection />

      {/* Global styles for animations and 3D card effect */}
      <style jsx global>{`
        @keyframes move1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(30px, 20px) rotate(0deg);
          }
          75% {
            transform: translate(10px, 30px) rotate(-5deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
        }
        @keyframes move2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-30px, -15px) rotate(-5deg);
          }
          50% {
            transform: translate(-40px, -20px) rotate(0deg);
          }
          75% {
            transform: translate(-15px, -35px) rotate(5deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
        }
        .animate-move1 {
          animation: move1 22s ease-in-out infinite alternate;
        }
        .animate-move2 {
          animation: move2 18s ease-in-out infinite alternate;
        }
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
