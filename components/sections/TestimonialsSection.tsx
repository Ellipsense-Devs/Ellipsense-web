"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const testimonialsData = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    quote:
      "Elipsense transformed our business operations with their custom software solutions. Their team's attention to detail and commitment to delivering high-quality work exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    title: "CTO, GrowthHub",
    quote:
      "Working with Elipsense has been a game-changer for our company. Their expertise in mobile application development helped us reach new customers and streamline our service delivery.",
  },
  {
    name: "Jessica Lee",
    title: "Marketing Director, InnovateCorp",
    quote:
      "The digital transformation strategy Elipsense developed for us was comprehensive and effective. They didn't just provide technology solutions but also ensured our team was fully onboarded and comfortable with the new systems.",
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection
      id="testimonials" // Changed ID for clarity
      className="py-20 bg-white"
      threshold={0.1}
      delay={0.1}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#691E75] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on building strong relationships and delivering
            impactful results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }} // Slightly adjusted delay
              className="bg-gray-50 p-8 rounded-lg shadow-xl flex flex-col" // Added shadow-xl
            >
              <div className="flex-grow">
                {" "}
                {/* Ensures quote takes available space */}
                <svg
                  className="w-16 h-16 text-purple-200 mb-6" // Adjusted size and margin
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-200">
                {" "}
                {/* Pushes author to bottom */}
                <h4 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
