"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  smallPrice: number | null;
  largePrice: number | null;
  imageUrl: string | null;
  flavors: string | null;
  isActive: boolean;
}

interface MenuCategoryProps {
  category: {
    id: string;
    name: string;
    items: MenuItem[];
  };
  index: number;
}

export default function MenuCategory({ category, index }: MenuCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={index > 0 ? "mt-20" : ""}>
      {/* Category Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 capitalize">
          {category.name}
        </h2>
        <motion.div
          className="w-20 h-1 bg-[#C84B6B]"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        {(category.id === "croissants" || category.id === "bagels") && (
          <motion.p
            className="text-sm text-gray-600 mt-4 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            *Cream cheese on Ham & Cheese items + $1.00
          </motion.p>
        )}
      </motion.div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
          >
            {/* Item Image */}
            <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
              {item.imageUrl ? (
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <Image
                    src="/choc-donut-with-sprinkles-pixel.png"
                    alt="Default donut"
                    width={80}
                    height={80}
                    className="opacity-30"
                  />
                </div>
              )}
            </div>

            {/* Item Details */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 flex-1">
                  {item.name}
                </h3>
                {item.smallPrice && item.largePrice ? (
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-sm font-bold text-[#C84B6B]">
                      Small: ${(item.smallPrice / 100).toFixed(2)}
                    </span>
                    <span className="text-sm font-bold text-[#C84B6B]">
                      Large: ${(item.largePrice / 100).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-[#C84B6B] ml-2">
                    ${(item.price / 100).toFixed(2)}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {item.description}
                </p>
              )}
              {item.flavors && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Flavors
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.flavors.split(", ").map((flavor, flavorIndex) => (
                      <motion.span
                        key={flavorIndex}
                        className="inline-block bg-[#FFF9F0] text-[#C84B6B] text-xs px-2 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: itemIndex * 0.05 + flavorIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {flavor}
                      </motion.span>
                    ))}
                  </div>
                  {category.id === "bagels" && (
                    <p className="text-xs text-gray-600 mt-2 italic">
                      *Flavored bagels (Everything, Sesame Seed, Jalapeño) +
                      $0.50
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {category.items.length === 0 && (
        <motion.div
          className="text-center py-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>No items available in this category yet.</p>
        </motion.div>
      )}
    </div>
  );
}
