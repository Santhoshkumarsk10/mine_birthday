"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: 2, // Appear after some time
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0px rgba(34, 197, 94, 0)",
            "0 0 0 15px rgba(34, 197, 94, 0.2)",
            "0 0 0 0px rgba(34, 197, 94, 0)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0">
          Chat with me! 💬
        </div>

        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 active:scale-95"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </motion.div>
    </motion.div>
  );
}
