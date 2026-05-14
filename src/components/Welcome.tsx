"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Sparkles } from "lucide-react";

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6 text-primary"
        >
          <Sparkles size={48} />
        </motion.div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-glow">
          {siteConfig.welcomeMessage.replace("[Friend Name]", siteConfig.friendName)}
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
          className="glass px-12 py-4 rounded-full text-xl font-semibold text-white hover:bg-white/10 transition-colors relative group overflow-hidden"
        >
          <span className="relative z-10">Start Experience</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-sm"
      >
        Scroll down or click to begin
      </motion.div>
    </div>
  );
}
