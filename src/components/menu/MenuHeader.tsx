"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/assets";

export default function MenuHeader() {
  return (
    <section
      className="py-16 lg:py-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${asset("/hero/DONUT-DOUGH.jpg")})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#FFF9F0]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="inline-block mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-white px-4 py-2 rounded-full shadow-sm">
            Our Menu
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fresh <span className="text-[#C84B6B]">Every Day</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Made with love from scratch daily. All prices are per item.
        </motion.p>
      </div>
    </section>
  );
}
