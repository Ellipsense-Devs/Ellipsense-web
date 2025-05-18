"use client";

import Image from "next/image";
import Navbar from "@/components/NavBar"; // Adjust the path based on your project structure
import { IoEyeOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { SiTarget } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";
import { useState, ReactNode, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useInView } from "react-intersection-observer";

// TypeScript interface for FlipCard props
interface FlipCardProps {
  frontIcon: ReactNode;
  frontTitle: string;
  frontContent: string;
  backTitle: string;
  backContent: string;
}

// Card component with flipping animation
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

// Reusable AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  id,
  threshold = 0.1,
  delay = 0,
  once = true,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const wordsToCycle = [
  "real-world success.",
  "tangible results.",
  "innovative products.",
  "business growth.",
  "impactful solutions.",
];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToCycle.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const wordVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20, // Moves up slightly on exit
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#EAEAEA] overflow-hidden">
      <Navbar />

      <section id="hero" className="pt-32 min-h-screen p-4">
        <div className="absolute center-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-move1"></div>
        <div className="absolute center-[-5%] right-[-5%] w-[400px] h-[400px] bg-green-400 opacity-30 rounded-full filter blur-3xl animate-move2"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-7xl w-full mx-auto"
        >
          <div className="max-w-4xl text-left">
            <h1 className="text-6xl md:text-6xl font-bold text-[#691E75] leading-snug">
              We deliver smart, scalable <br />
              solutions that turn ideas into <br />
              <AnimatePresence mode="wait">
                {" "}
                {/* Use mode="wait" for smoother transitions */}
                <motion.span
                  key={wordsToCycle[currentWordIndex]} // Key is important for AnimatePresence
                  variants={wordVariants}
                  initial="exit" // Start from the exit state
                  animate="enter"
                  exit="exit"
                  className="inline-block bg-gradient-to-r from-purple-700 via-yellow-300 to-purple-700 bg-clip-text text-transparent"
                >
                  {wordsToCycle[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          <div className="max-w-2xl text-left mt-6">
            <p className="text-2xl md:text-xl leading-snug">
              From custom software development to digital transformation,
              Elipsense Tech Solution is your trusted partner in leveraging
              technology to achieve your business goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full mt-12"
        >
          <div className="flex justify-center">
            <Image
              src="/main.png"
              alt="Dashboard"
              width={2000}
              height={2000}
              priority
              className="relative z-10"
            />
          </div>
        </motion.div>
      </section>

      <AnimatedSection id="info" className="py-20 bg-[#691E75]" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#ffff] mb-4">
              Reliable. Scalable. Future-Ready.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlipCard
              frontIcon={<FaEye className="text-purple-600 text-4xl" />}
              frontTitle="OUR MISSION"
              frontContent="To deliver reliable, innovative, and cost-effective IT solutions that drive digital transformation and business success."
              backTitle="How We Achieve Our Mission"
              backContent="We combine industry expertise with cutting-edge technology to create solutions that address real business challenges. Our collaborative approach ensures we deliver exactly what you need."
            />
            <FlipCard
              frontIcon={<SiTarget className="text-purple-600 text-4xl" />}
              frontTitle="OUR VISION"
              frontContent="To be a globally trusted tech partner known for quality, integrity, and innovation."
              backTitle="Our Path Forward"
              backContent="We're building a future where technology empowers businesses of all sizes to achieve their goals. Our commitment to excellence drives everything we do."
            />
            <FlipCard
              frontIcon={<IoDiamond className="text-purple-600 text-4xl" />}
              frontTitle="OUR PURPOSE"
              frontContent="We are passionate about helping companies thrive in the digital age through cutting-edge software, seamless integrations, and intelligent automation."
              backTitle="Making Technology Work For You"
              backContent="Our team is dedicated to creating technology solutions that solve real problems. We're not just building software—we're building futures."
            />
          </div>
        </div>
      </AnimatedSection>

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
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/ellipsense.svg"
                    alt="About Elipsense"
                    width={500}
                    height={400}
                    className=""
                  />
                </div>
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
              <p className="text-lg text-gray-600 mb-6">
                Elipsense Tech Solution was founded with a mission to help
                businesses harness the power of technology to drive growth,
                improve efficiency, and maintain a competitive edge in rapidly
                evolving markets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced developers, designers, and strategists
                work collaboratively with clients to deliver innovative
                solutions that address real business challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#8A169D] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#8A169D] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Tailored Solutions</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#8A169D] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Innovation-Driven</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#8A169D] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Customer-Focused</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="services"
        className="py-20 bg-white"
        threshold={0.1}
        delay={0.1}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#691E75] mb-4">
              From concept to code — we&apos;ve got your IT covered.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-20 h-20 text-purple-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
        threshold={0.3}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how our technology solutions can help you achieve
            your business goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-700 px-8 py-4 rounded-md hover:bg-gray-100 font-semibold transition duration-200 text-lg"
          >
            Get Started Today
          </a>
        </div>
      </AnimatedSection>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Elipsense Logo"
                  width={60}
                  height={60}
                />
                <span className="text-2xl font-semibold text-white">
                  Elipsense
                </span>
              </div>
              <p className="text-gray-300">
                Smart solutions for a digital world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/company"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="/product"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Custom Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Web Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Mobile Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Digital Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@elipsense.com
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  123 Tech Lane, Suite 500
                  <br />
                  San Francisco, CA 94107
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Elipsense Tech Solution. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes move1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 20px);
          }
          100% {
            transform: translate(-30px, 40px);
          }
        }
        @keyframes move2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -20px);
          }
          100% {
            transform: translate(20px, -40px);
          }
        }
        .animate-move1 {
          animation: move1 20s ease-in-out infinite alternate;
        }
        .animate-move2 {
          animation: move2 15s ease-in-out infinite alternate;
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
      `}</style>
    </div>
  );
}
