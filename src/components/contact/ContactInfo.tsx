"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { locations } from "@/lib/locations";

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Reach Us
        </h2>

        {/* Important Notice */}
        <motion.div
          className="bg-[#FFF9F0] border-l-4 border-[#C84B6B] p-6 rounded-lg mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Placing Orders
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Orders must be placed by phone only</strong> and require{" "}
                <strong>24 hours advance notice</strong>. Phone orders must be
                placed during that location&apos;s hours of operation. Please
                call the location where you will be picking up your order.
              </p>
              <p className="text-gray-600 text-xs mt-2 italic">
                Note: The contact form below is for feedback and inquiries only,
                not for placing orders.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Locations — each with address, phone, and hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-bold text-gray-900 mb-1">Our Locations</h3>
          <p className="text-sm text-gray-600 mb-4">
            Hours vary by location. Select holidays excluded.
          </p>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {location.name}
                </h4>
                <p className="text-sm text-gray-600 mb-1">{location.addressLine}</p>
                <a
                  href={`tel:${location.phone}`}
                  className="text-[#C84B6B] font-semibold text-sm hover:underline inline-flex items-center gap-1 mb-2"
                >
                  <svg
                    className="w-4 h-4"
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
                  {location.phone}
                </a>
                <div className="flex items-start gap-2 pt-2 border-t border-gray-200 mt-2">
                  <svg
                    className="w-4 h-4 text-[#C84B6B] flex-shrink-0 mt-0.5"
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
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {location.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

