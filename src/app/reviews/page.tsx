"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ReviewsPage() {
  const locations = [
    {
      name: "Fail's Donuts & Bagels",
      address: "8414 Lander Ave, Hilmar, CA 95324",
      reviewUrl:
        "https://www.google.com/search?q=fails+donut+and+bagel+hilmar&oq=&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgYIARBFGEAyBggCEEUYOzIVCAMQLhgUGK8BGMcBGIcCGIAEGI4FMhAIBBAuGK8BGMcBGIAEGI4FMgcIBRAAGIAEMgcIBhAAGIAEMggIBxAAGBYYHtIBCDIxNDJqMGo0qAIDsAIB8QVeiqeWxYnVePEFXoqnlsWJ1Xg&sourceid=chrome&ie=UTF-8", // Replace with actual URL
    },
    {
      name: "Jim's Donuts & Bagels",
      address: "1915 N St, Newman, CA 95360",
      reviewUrl:
        "https://www.google.com/search?q=jim%27s+donuts+and+bagels+newman&sca_esv=ce0ce1db3a943257&sxsrf=AE3TifO3nUmAJArkhWy7ULDRmA0VBfnMWg%3A1763612096570&ei=wJUeaaTFIsusptQPp4bjuAk&ved=0ahUKEwikpaaE7_-QAxVLlokEHSfDGJcQ4dUDCBE&uact=5&oq=jim%27s+donuts+and+bagels+newman&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmppbSdzIGRvbnV0cyBhbmQgYmFnZWxzIG5ld21hbjILEAAYgAQYkQIYigUyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yAhAmMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI2RRQ7wJY3xJwAXgAkAEAmAGvAaABkgiqAQMwLje4AQPIAQD4AQGYAgigAsMIwgIIEAAYgAQYsAPCAgcQABiwAxgewgIOEAAYgAQYsAMYhgMYigXCAgsQABiABBiwAxiiBMICCBAAGKIEGIkFwgIIEAAYgAQYogSYAwCIBgGQBgqSBwMxLjegB5RAsgcDMC43uAe-CMIHAzItOMgHJQ&sclient=gws-wiz-serp", // Replace with actual URL
    },
    {
      name: "Jim's Donuts & Bagels",
      address: "Schendel Ave. Ste 16385, Delhi, CA 95315",
      reviewUrl:
        "https://www.google.com/search?q=jim%27s+donuts+and+bagels+delhi&sca_esv=ce0ce1db3a943257&sxsrf=AE3TifP4bedEtpNoe9gOwtU6BnbWVE0mag%3A1763612988583&ei=PJkeaeexI9CJptQPveKVsAE&ved=0ahUKEwjnv9Kt8v-QAxXQhIkEHT1xBRYQ4dUDCBE&uact=5&oq=jim%27s+donuts+and+bagels+delhi&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWppbSdzIGRvbnV0cyBhbmQgYmFnZWxzIGRlbGhpMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYogQYiQVI-Q5QjglYzA1wAXgAkAEAmAGQAaABqQWqAQMwLjW4AQPIAQD4AQGYAgagAsgFwgIIEAAYgAQYsAPCAgcQABiwAxgewgIOEAAYgAQYsAMYhgMYigXCAgsQABiwAxiiBBiJBcICAhAmwgIIEAAYgAQYogSYAwCIBgGQBgqSBwMxLjWgB5MzsgcDMC41uAfCBcIHBTAuMi40yAcX&sclient=gws-wiz-serp", // Replace with actual URL
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/star.png"
              alt="Star"
              width={64}
              height={64}
              className="mx-auto"
              title="Star icon created by Pixel perfect - Flaticon"
            />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leave Us a <span className="text-[#C84B6B]">Review</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear about your experience! Select the location you
            visited to leave a Google review.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={location.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#C84B6B] group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Location Icon */}
                    <div className="w-12 h-12 bg-[#C84B6B] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C84B6B] transition-colors">
                      <motion.img
                        src="/location-pin.png"
                        alt="Location"
                        width={32}
                        height={32}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    {/* Location Info */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#C84B6B] transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-[#C84B6B] group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/"
            className="text-[#C84B6B] hover:text-[#B03A5A] font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Attribution */}
        <motion.div
          className="text-center mt-8 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="https://www.flaticon.com/free-icons/star"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
            title="star icon"
          >
            Star icon created by Pixel perfect - Flaticon
          </a>
        </motion.div>
      </div>
    </main>
  );
}
