"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[#8B4513] hover:bg-[#6B3410] text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-white hover:bg-gray-50 text-[#8B4513] border-2 border-[#8B4513]",
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  if (href) {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="inline-block"
      >
        <Link href={href} className={buttonClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      {children}
    </motion.button>
  );
}
