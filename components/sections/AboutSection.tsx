"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  const features = [
    "Expert Team",
    "Tailored Solutions",
    "Innovation-Driven",
    "Customer-Focused",
  ];

  return (
    <AnimatedSection
      id="about"
      className="py-20 bg-gray-50"
      threshold={0.2}
      delay={0.2}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
          >
            <div className="relative">
              <Image
                src="/ellipsense.svg"
                alt="About Elipsense"
                width={450} // Adjusted for better visual balance
                height={350} // Adjusted
                className="relative z-10"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-4xl font-bold text-[#691E75] mb-6">
              About Elipsense
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Elipsense Tech Solution was founded with a mission to help
              businesses harness the power of technology to drive growth,
              improve efficiency, and maintain a competitive edge in rapidly
              evolving markets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and strategists
              work collaboratively with clients to deliver innovative solutions
              that address real business challenges.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#8A169D] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
