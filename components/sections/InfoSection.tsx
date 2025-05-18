"use client";

import FlipCard from "@/components/FlipCard";
import AnimatedSection from "@/components/AnimatedSection";
import { FaEye } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";

const InfoSection = () => {
  return (
    <AnimatedSection id="info" className="py-20 bg-[#691E75]" threshold={0.2}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Reliable. Scalable. Future-Ready.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FlipCard
            frontIcon={<FaEye className="text-purple-600 text-5xl" />}
            frontTitle="OUR MISSION"
            frontContent="To deliver reliable, innovative, and cost-effective IT solutions that drive digital transformation and business success."
            backTitle="How We Achieve Our Mission"
            backContent="We combine industry expertise with cutting-edge technology to create solutions that address real business challenges. Our collaborative approach ensures we deliver exactly what you need."
          />
          <FlipCard
            frontIcon={<SiTarget className="text-purple-600 text-5xl" />}
            frontTitle="OUR VISION"
            frontContent="To be a globally trusted tech partner known for quality, integrity, and innovation."
            backTitle="Our Path Forward"
            backContent="We're building a future where technology empowers businesses of all sizes to achieve their goals. Our commitment to excellence drives everything we do."
          />
          <FlipCard
            frontIcon={<IoDiamond className="text-purple-600 text-5xl" />}
            frontTitle="OUR PURPOSE"
            frontContent="We are passionate about helping companies thrive in the digital age through cutting-edge software, seamless integrations, and intelligent automation."
            backTitle="Making Technology Work For You"
            backContent="Our team is dedicated to creating technology solutions that solve real problems. We're not just building software—we're building futures."
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default InfoSection;
