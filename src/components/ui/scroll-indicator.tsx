'use client'

import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-neutral-600">Scroll Down</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="animate-bounce"
        >
          <path 
            d="M12 4L12 20M12 20L18 14M12 20L6 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}; 