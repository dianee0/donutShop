"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

interface AnnouncementsProps {
  announcements: Announcement[];
}

export default function Announcements({ announcements }: AnnouncementsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (!announcements || announcements.length === 0) {
    return null;
  }

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          icon: "⚠️",
          iconBg: "bg-orange-100",
          textColor: "text-orange-900",
          titleColor: "text-orange-800",
        };
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: "✓",
          iconBg: "bg-green-100",
          textColor: "text-green-900",
          titleColor: "text-green-800",
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: "✕",
          iconBg: "bg-red-100",
          textColor: "text-red-900",
          titleColor: "text-red-800",
        };
      default: // info
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "ℹ",
          iconBg: "bg-blue-100",
          textColor: "text-blue-900",
          titleColor: "text-blue-800",
        };
    }
  };

  return (
    <div ref={ref} className="w-full">
      <div className="space-y-4">
        {announcements.map((announcement, index) => {
          const styles = getTypeStyles(announcement.type);
          return (
            <motion.div
              key={announcement.id}
              className={`${styles.bg} ${styles.border} border rounded-xl p-4 sm:p-5 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`${styles.iconBg} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg`}
                >
                  {styles.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`${styles.titleColor} font-bold text-base sm:text-lg mb-1`}
                  >
                    {announcement.title}
                  </h3>
                  <p className={`${styles.textColor} text-sm sm:text-base`}>
                    {announcement.message}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
