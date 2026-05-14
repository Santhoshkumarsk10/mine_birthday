"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mb-6 text-accent"
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-rose-300 to-pink-500 text-glow-romantic font-elegant leading-tight">
          {siteConfig.welcomeMessage}
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Something special is waiting for you. Are you ready to begin the journey?
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="glass px-16 py-5 rounded-full text-2xl font-semibold text-white hover:bg-white/10 transition-all relative group overflow-hidden border-accent/30"
        >
          <span className="relative z-10 font-elegant italic">Begin Our Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </motion.div>
    </div>
  );
}
