"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "CLOUD SERVICES",
    icon: "/cloud-service-svgrepo-com.svg",
    description:
      "Modernize your IT infrastructure with our cloud services. We offer cloud migration, deployment, and management solutions that improve flexibility, collaboration, and security—whether you're using AWS, Azure, or Google Cloud.",
    bgClass: "bg-black",
    textClass: "text-gray-300",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    icon: "/code-svgrepo-com.svg",
    description:
      "We develop custom software solutions tailored to meet your unique business requirements. Whether you need a management system, automation tool, or enterprise-grade application, our team builds scalable and secure software that helps you streamline operations and boost productivity.",
    bgClass: "bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500",
    textClass: "text-white",
  },
  {
    title: "WEB AND MOBILE DEVELOPMENT",
    icon: "/pc-and-smartphone-svgrepo-com.svg",
    description:
      "We develop custom software solutions tailored to meet your unique business requirements. Whether you need a management system, automation tool, or enterprise-grade application, our team builds scalable and secure software that helps you streamline operations and boost productivity.",
    bgClass: "bg-gray-100",
    textClass: "text-purple-600",
    titleClass: "text-purple-800",
  },
  {
    title: "MANAGED IT SUPPORT",
    icon: "/software-svgrepo-com.svg",
    description:
      "Ensure the smooth operation of your business with our 24/7 managed IT services. We monitor, maintain, and troubleshoot your systems proactively so you can focus on your core operations without worrying about downtime or technical issues.",
    bgClass: "bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-300",
    textClass: "text-white",
  },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutsRef = useRef<{ [key: number]: NodeJS.Timeout }>({});
  const visibilityStateRef = useRef<{ [key: number]: boolean }>({});

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Clear expanded sections when switching to desktop
      if (window.innerWidth >= 768) {
        setExpandedSections([]);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle
  useEffect(() => {
    if (!isMobile) {
      // Clear all timeouts and states when switching to desktop
      Object.values(timeoutsRef.current).forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = {};
      visibilityStateRef.current = {};
      return;
    }

    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top >= 0 && rect.bottom <= windowHeight;
        const wasVisible = visibilityStateRef.current[index];

        // Section just became visible
        if (isVisible && !wasVisible) {
          visibilityStateRef.current[index] = true;
          if (timeoutsRef.current[index]) {
            clearTimeout(timeoutsRef.current[index]);
            delete timeoutsRef.current[index];
          }
          setExpandedSections(prev => [...prev.filter(i => i !== index), index]);
        }
        // Section just became invisible
        else if (!isVisible && wasVisible) {
          visibilityStateRef.current[index] = false;
          if (!timeoutsRef.current[index]) {
            timeoutsRef.current[index] = setTimeout(() => {
              setExpandedSections(prev => prev.filter(i => i !== index));
              delete timeoutsRef.current[index];
            }, 200);
          }
        }
      });
    };

    // Throttle scroll handling for better performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 50); // Reduced throttle time for more responsive behavior
      }
    };

    // Initial check and event listeners
    handleScroll();
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      Object.values(timeoutsRef.current).forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = {};
      visibilityStateRef.current = {};
    };
  }, [isMobile]);

  return (
    <div>
      {services.map((service, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => { sectionsRef.current[index] = el }}
          className={`group overflow-hidden ${service.bgClass} transition-all duration-800 relative ${!isMobile && hoveredSection === index ? 'scale-[1.02]' : 'scale-100'
            }`}
          onMouseEnter={() => {
            if (!isMobile) {
              setHoveredSection(index);
              setExpandedSections(prev => [...prev, index]);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setHoveredSection(null);
              setExpandedSections(prev => prev.filter(i => i !== index));
            }
          }}
        >          <div className="max-w-7xl mx-auto px-4 text-justify py-20">
            <div className={`flex ${isMobile ? 'flex-col items-center gap-6' : 'flex-row justify-between'} items-center`}>              <h2 className={`text-5xl font-bold ${service.titleClass || "text-white"} transition-all duration-300 ${isMobile ? 'text-center' : 'text-justify'}`}>
              {service.title}
            </h2>
              <Image src={service.icon} alt={service.title} width={120} height={120} className="transition-transform duration-300" />
            </div>
            <p
              className={`overflow-hidden transition-all duration-500 ${expandedSections.includes(index) ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
                } text-lg ${service.textClass}`}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
