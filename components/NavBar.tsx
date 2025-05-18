"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // run on mount to catch initial position (e.g. after reload)
    handleScroll();
    // Set mounted state for initial animation
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3
    transition-all duration-500 ease-in-out transform
    ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
    ${scrolled ? "bg-transparent backdrop-blur-md shadow-md" : "bg-transparent"}
  `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Your Company Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <span className="text-2xl font-semibold text-[#8739B6]">
            Ellipsense
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 font-semibold transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-gray-900 font-semibold transition"
          >
            Company
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-gray-900 font-semibold transition"
          >
            Product
          </Link>
          <Link
            href="#footer"
            className="bg-[#8A169D] text-white px-6 py-3 rounded-md hover:bg-purple-700 font-semibold transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
