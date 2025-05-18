"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <AnimatedSection
      className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
      threshold={0.3}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Let&apos;s discuss how our technology solutions can help you achieve
          your business goals.
        </p>
        <Link
          href="/contact" // Ensure you have a /contact page or route
          className="bg-white text-purple-700 px-10 py-4 rounded-lg hover:bg-gray-100 font-semibold transition duration-300 ease-in-out text-lg shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Get Started Today
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default CallToActionSection;
