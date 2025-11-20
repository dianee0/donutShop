"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "OUR STORY", href: "/#story" },
    { name: "LOCATIONS", href: "/#locations" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <motion.header
      className="bg-[#FFF9F0] border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Going to replace coffee icon with my own... */}
            <img
              src="/coffee-mug-pixel.png"
              alt="Coffee"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 tracking-tight leading-tight">
                JIM&apos;S DONUTS
              </span>
              <span className="text-sm text-gray-600 tracking-wide leading-tight">
                & BAGELS
              </span>
            </div>
          </Link>

          {/* Navigation bar */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#C84B6B] transition-colors duration-200 relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C84B6B] group-hover:w-full transition-all duration-300"
                    style={{ display: "block" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Collapsible menu button */}
          <motion.button
            className="md:hidden p-2 text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden border-t border-gray-200 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 px-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 px-4 text-base font-medium text-gray-700 hover:text-[#C84B6B] hover:bg-[#FFF9F0] rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
