"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { asset } from "@/lib/assets";

interface Announcement {
  id: string;
  title: string;
  message: string;
  type: string;
  isActive: boolean;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface HeroProps {
  announcements?: Announcement[];
}

export default function Hero({ announcements = [] }: HeroProps) {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          icon: "⚠️",
          textColor: "text-orange-900",
          titleColor: "text-orange-800",
        };
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: "✓",
          textColor: "text-green-900",
          titleColor: "text-green-800",
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: "✕",
          textColor: "text-red-900",
          titleColor: "text-red-800",
        };
      default: // info
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "ℹ",
          textColor: "text-blue-900",
          titleColor: "text-blue-800",
        };
    }
  };

  return (
    <section className="bg-[#FFF9F0] relative overflow-hidden">
      {/* Heart trail SVG on left */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-70 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          width="201"
          height="473"
          viewBox="0 0 201 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", bottom: "-190px" }}
        >
          <path
            d="M-84.2924 279.939C-95.9053 272.798 -105.381 267.611 -119.03 257.994C-123.129 255.092 -126.052 252.933 -128.757 250.914C-135.086 246.332 -138.969 243.1 -150.843 237.158C-167.717 228.221 -187.456 227.477 -194.99 231.361C-202.391 234.796 -203.928 234.516 -212.23 242.968C-219.993 252.035 -223.233 258.645 -227.579 268.151C-232.469 277.587 -240.312 309.009 -241.663 320.738C-243.425 332.357 -245.505 345.607 -246.509 353.616C-246.825 356.113 -247.081 358.074 -247.286 359.574C-247.373 360.209 -247.442 360.5 -247.479 360.496C-247.479 360.496 -247.479 360.496 -247.479 360.496C-247.525 360.491 -247.521 360.03 -247.438 359.21C-247.033 355.226 -246.441 349.259 -245.698 342.213C-244.209 329.081 -243.834 327.699 -240.7 310.112C-237.167 292.698 -235.325 281.855 -226.619 262.612C-221.985 253.141 -218.453 247.589 -213.452 241.806C-208.395 236.433 -201.406 229.134 -186.18 227.355C-156.332 228.417 -152.898 232.721 -128.016 248.02C-127.724 248.224 -127.43 248.431 -127.135 248.64C-103.288 265.777 -72.6914 285.784 -56.2712 291.907C-40.8561 298.79 -13.2728 304.172 4.27664 284.477C14.8097 273.937 22.9849 258.575 30.0262 242.738L30.0577 242.673C35.4232 232.275 41.8304 222.364 48.7789 213.566C65.536 190.923 97.9118 167.257 114.163 159.161C130.332 150.702 134.353 148.979 150.748 142.712C160.235 139.28 173.601 135.224 185.327 134.149C185.704 134.122 185.937 134.111 186.312 134.095C186.669 134.082 186.962 134.079 187.206 134.083C187.613 134.089 188.2 134.131 188.433 134.19C188.566 134.222 188.638 134.239 188.797 134.306C188.915 134.362 188.953 134.416 188.967 134.45C188.985 134.522 188.957 134.515 188.932 134.489C188.783 134.237 186.874 134.251 183.95 134.659C175.442 135.926 168.551 137.828 164.335 139.214C155.896 142.143 152.39 143.429 141.836 147.341C131.306 151.403 126.885 154.263 121.006 157.196C115.436 160.52 114.278 158.642 87.4513 178.26C61.2823 198.952 50.9248 214.381 43.7376 224.585C40.6814 229.111 36.4032 235.784 32.2079 243.789L32.2396 243.723C27.32 254.653 21.1323 266.686 14.1388 276.362C8.33229 284.575 -3.29216 297.536 -19.1142 300.157C-34.7226 302.953 -49.2865 297.211 -57.115 294.226C-72.748 287.568 -72.5365 286.839 -84.2924 279.939ZM187.275 120.618C185.904 119.323 184.27 118.99 182.648 117.78C181.836 117.196 181.413 116.858 180.937 116.598C180.473 116.366 179.897 116.143 179.163 116.624C178.084 117.372 177.264 119.097 176.873 120.278C176.755 120.636 176.728 120.98 176.762 121.234C176.95 122.156 176.321 122.37 176.92 123.728C177.613 125.002 178.115 125.678 179.096 126.496C179.316 126.668 179.667 126.884 180.128 127.051C182.109 127.756 184.292 129.763 185.359 130.441C186.726 131.327 187.742 132.897 188.455 133.717C188.677 133.972 188.845 134.187 188.966 134.354C189.018 134.426 189.02 134.477 188.996 134.505C188.996 134.505 188.996 134.505 188.995 134.505C188.965 134.539 188.892 134.536 188.802 134.462C188.383 134.116 187.755 133.6 186.953 133.061C185.454 132.072 185.57 131.653 183.644 130.259C182.23 129.292 181.082 128.711 179.769 128.31C179.098 128.126 178.387 127.789 177.727 127.219C176.545 126.149 175.94 125.378 175.366 124.373C174.873 123.374 174.243 121.978 175.089 119.71C175.103 119.679 175.117 119.648 175.131 119.617C176.034 117.701 176.503 116.647 177.335 115.548C178.04 114.492 180.127 113.36 182.455 114.332C185.148 115.414 187.04 117.558 188.767 118.977L186.952 119.267C187.978 117.937 189.06 116.905 189.871 116.222C190.883 115.372 192.271 114.418 194.179 114.195C196.057 113.943 198.31 114.832 199.503 116.585C200.159 117.517 200.633 118.692 200.647 120C199.696 123.905 197.437 125.476 195.461 127.541C192.664 130.141 188.447 133.431 186.371 134.779C186.148 134.928 185.941 135.063 185.754 135.184C184.996 135.68 184.478 136.086 184.141 136.569C184.064 136.682 183.999 136.816 183.987 136.916C183.98 137.022 183.987 137.035 184.069 137.095C184.255 137.213 184.698 137.232 185.169 137.147C186.358 136.904 188.309 136.355 188.877 134.989C188.984 134.641 188.98 134.461 189.062 134.497C189.128 134.529 189.272 134.795 189.185 135.254C188.797 136.603 187.666 136.951 187.213 137.416C186.705 137.865 186.28 138.138 185.766 138.305C185.504 138.386 185.229 138.439 184.874 138.44C184.517 138.415 184.121 138.466 183.455 138.018C183.095 137.781 182.868 137.179 182.947 136.823C182.997 136.481 183.108 136.278 183.209 136.085C183.396 135.743 183.575 135.486 183.727 135.257C184.053 134.785 184.302 134.428 184.692 134.161C184.759 134.116 184.823 134.075 184.887 134.038C185.48 133.68 185.95 133.736 188.908 130.906C192.098 127.787 193.724 125.978 194.816 124.723C195.278 124.185 196.013 123.427 196.755 122.553C197.127 122.113 197.501 121.642 197.817 121.162C198.129 120.714 198.396 120.088 198.37 120C198.37 119.698 198.316 119.397 198.219 119.119C197.935 118.135 196.746 116.74 195.201 116.618C193.671 116.429 192.146 117.419 191.449 118.117C190.125 119.514 189.878 119.418 188.782 120.547L188.265 121.345L187.428 120.763C187.379 120.717 187.328 120.668 187.275 120.618Z"
            fill="black"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 flex items-center min-h-[calc(100vh-160px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-6">
            {/* Welcome badge */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* <span className="text-2xl text-gray-700">☕︎</span> */}
              <span className="text-lg font-medium text-gray-700 tracking-wide">
                WELCOME!
              </span>
            </motion.div>

            {/* Main tagline */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="text-[#C84B6B] inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Donuts Made Daily,
              </motion.span>
              <br />
              <motion.span
                className="text-[#C84B6B] inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Happiness Made Fresh.
              </motion.span>
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button href="/menu" variant="primary">
                View Menu
              </Button>
            </motion.div>

            {/* Hours info */}
            <motion.div
              className="flex items-center gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <img src="/heart-pixel.png" alt="Heart" width={24} height={24} />
              <p className="text-sm text-gray-600">
                Open early to noon—{" "}
                <span className="font-semibold">hours vary by location</span>.
                <br />
                <span className="text-xs text-gray-500">
                  Select holidays excluded.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="relative w-full h-full"
            >
              <Image
                src={asset("/hero/donuts-hero.png")}
                alt="Colorful fresh donuts with sprinkles"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Announcements Section */}
      {announcements.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
          <div className="space-y-3">
            {announcements.map((announcement, index) => {
              const styles = getTypeStyles(announcement.type);
              return (
                <motion.div
                  key={announcement.id}
                  className={`${styles.bg} ${styles.border} border rounded-xl p-4 shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl flex-shrink-0">{styles.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`${styles.titleColor} font-bold text-base mb-1`}
                      >
                        {announcement.title}
                      </h3>
                      <p className={`${styles.textColor} text-sm`}>
                        {announcement.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
