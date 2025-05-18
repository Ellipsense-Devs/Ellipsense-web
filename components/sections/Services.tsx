"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      {/* Section 1 - Cloud Services */}
      <div className="group overflow-hidden bg-black transition-all duration-800 relative">
        <div className="max-w-7xl mx-auto px-4 text-justify py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-white">CLOUD SERVICES</h2>
            <Image
              src="/cloud-service-svgrepo-com.svg"
              alt="Cloud Service"
              width={120}
              height={120}
            />
          </div>
          <p className="max-h-0 max-w-2xl overflow-hidden transition-all duration-800 group-hover:max-h-48 mt-4 text-lg text-gray-300">
            Modernize your IT infrastructure with our cloud services. We offer
            cloud migration, deployment, and management solutions that improve
            flexibility, collaboration, and security—whether you're using AWS,
            Azure, or Google Cloud.
          </p>
        </div>
      </div>

      {/* Section 2 - Custom Software Development */}
      <div className="group overflow-hidden bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 transition-all duration-800 relative">
        <div className="max-w-7xl mx-auto px-4 text-justify py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-white">
              CUSTOM SOFTWARE DEVELOPMENT
            </h2>
            <Image
              src="/code-svgrepo-com.svg"
              alt="Custom Software Development"
              width={120}
              height={120}
            />
          </div>
          <p className="max-h-0 max-w-2xl overflow-hidden transition-all duration-800 group-hover:max-h-48 mt-4 text-lg text-white">
            We develop custom software solutions tailored to meet your unique
            business requirements. Whether you need a management system,
            automation tool, or enterprise-grade application, our team builds
            scalable and secure software that helps you streamline operations
            and boost productivity.
          </p>
        </div>
      </div>

      {/* Section 3 - Web and Mobile Development */}
      <div className="group overflow-hidden bg-gray-100 transition-all duration-800 relative">
        <div className="max-w-7xl mx-auto px-4 text-justify py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-purple-800">
              WEB AND MOBILE DEVELOPMENT
            </h2>
            <Image
              src="/pc-and-smartphone-svgrepo-com.svg"
              alt="Web and Mobile Development"
              width={120}
              height={120}
            />
          </div>
          <p className="max-h-0 max-w-2xl overflow-hidden transition-all duration-800 group-hover:max-h-48 mt-4 text-lg text-purple-600">
            We develop custom software solutions tailored to meet your unique
            business requirements. Whether you need a management system,
            automation tool, or enterprise-grade application, our team builds
            scalable and secure software that helps you streamline operations
            and boost productivity.
          </p>
        </div>
      </div>

      {/* Section 4 - Managed IT Support */}
      <div className="group overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-300 transition-all duration-800 relative">
        <div className="max-w-7xl mx-auto px-4 text-justify py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-bold text-white">
              MANAGED IT SUPPORT
            </h2>
            <Image
              src="/software-svgrepo-com.svg"
              alt="Managed IT Support"
              width={120}
              height={120}
            />
          </div>
          <p className="max-h-0 max-w-2xl overflow-hidden transition-all duration-800 group-hover:max-h-48 mt-4 text-lg text-white">
            Ensure the smooth operation of your business with our 24/7 managed
            IT services. We monitor, maintain, and troubleshoot your systems
            proactively so you can focus on your core operations without
            worrying about downtime or technical issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
