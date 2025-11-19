"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-[#FFF9F0] rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="space-y-6">
                <div className="text-6xl lg:text-7xl"></div>
                <div className="flex gap-3 items-center">
                  {/* placeholder images*/}
                  <img
                    src="/donuts-hero.png"
                    alt="Donuts"
                    className="w-50 h-80"
                  />
                  <div className="flex flex-col gap-3">
                    <img
                      src="/donuts-hero.png"
                      alt="Donuts"
                      className="w-80 h-40"
                    />
                    <img
                      src="/donuts-hero.png"
                      alt="Donuts"
                      className="w-80 h-40"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C84B6B] rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C84B6B] rounded-full opacity-10"></div>
            </div>
          </motion.div>

          {/* Right side - Story content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-[#FFF9F0] px-4 py-2 rounded-full">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafted with Love,
              <br />
              <span className="text-[#C84B6B]">Since 1998</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                It all started back in 1998 in the small town of Hilmar,
                California. Our family opened our first donut shop with the hope
                of bringing something sweet to the neighborhood.
              </p>
              <p>
                Nearly three decades later, we are proud to have grown into
                three locations in Hilmar, Delhi, and Newman. While our menu has
                expanded, our promise has remained the same. Every donut is
                still made with the same care, love, and community spirit that
                started it all.
              </p>
              <p className="text-[#C84B6B] font-semibold">
                From our family to yours, thank you for being part of our story.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { number: "27+", label: "Years" },
                { number: "30+", label: "Varieties" },
                { number: "3", label: "Locations" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-[#C84B6B]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
