"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heart, Cake, Gift, PartyPopper } from "lucide-react";

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient -z-10" />
      
      {/* Floating Birthday Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-[15%] text-accent/20 hidden md:block"
      >
        <Cake size={80} />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-[15%] text-accent/20 hidden md:block"
      >
        <Gift size={100} />
      </motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/3 right-[10%] text-accent/20 hidden md:block"
      >
        <PartyPopper size={60} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl z-10"
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
          Your special day is finally here. I've prepared a little journey for you. Are you ready?
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="glass px-16 py-5 rounded-full text-2xl font-semibold text-white hover:bg-white/10 transition-all relative group overflow-hidden border-accent/30 shadow-romantic-lg"
        >
          <span className="relative z-10 font-elegant italic">Start Your Birthday Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </motion.div>
    </div>
  );
}
