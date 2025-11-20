"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    {
      name: "Fail's Donuts & Bagels",
      address: "8414 Lander Ave",
      city: "Hilmar, CA 95324",
      phone: "(209) 667-4718",
      hours: "4am - 12pm Mon-Sun",
    },
    {
      name: "Jim's Donuts & Bagels",
      address: "1915 N St",
      city: "Newman, CA 95360",
      phone: "(209) 862-2044",
      hours: "Mon-Fri: 4:30am - 12pm\nSat: 5am - 12pm\nSun: 6am - 12pm",
    },
    {
      name: "Jim's Donuts & Bagels",
      address: "Schendel Ave. Ste 16385",
      city: "Delhi, CA 95315",
      phone: "(209) 634-0016",
      hours: "6am - 12pm Mon-Sun",
    },
  ];

  return (
    <section id="locations" className="bg-[#FFF9F0] py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-white px-4 py-2 rounded-full">
              Find Us
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Visit Our <span className="text-[#C84B6B]">Locations</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stop by any of our three locations to enjoy fresh donuts daily.
          </motion.p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              {/* Location Icon */}
              <div className="w-12 h-12 bg-[#C84B6B] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <motion.img
                  src="/location-pin.png"
                  alt="Location"
                  width={32}
                  height={32}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Location Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {location.name}
              </h3>

              {/* Address */}
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#C84B6B] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <div>
                    <p>{location.address}</p>
                    <p>{location.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C84B6B] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p>{location.phone}</p>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 pt-2">
                  <svg
                    className="w-5 h-5 text-[#C84B6B] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-semibold text-gray-900 whitespace-pre-line">
                    {location.hours}
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.button
                className="mt-6 w-full bg-[#C84B6B] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#B03A5A] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
