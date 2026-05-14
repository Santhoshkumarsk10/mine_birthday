"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface MessageProps {
  onComplete: () => void;
}

export default function Message({ onComplete }: MessageProps) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = siteConfig.personalMessage;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40); // Slightly faster for longer message

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-gradient opacity-40" />
      
      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/20"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{ 
            y: [null, "-20%"],
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          <Sparkles size={24 + Math.random() * 24} />
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass max-w-4xl w-full p-10 md:p-20 rounded-[4rem] relative overflow-hidden border border-white/10 shadow-romantic-2xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-pink-500 mb-12 flex justify-center"
        >
          <Heart size={64} fill="currentColor" className="drop-shadow-glow" />
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-white font-elegant leading-tight">
          A Birthday Letter to You
        </h2>

        <div className="text-2xl md:text-5xl text-rose-100/90 leading-relaxed text-center min-h-[300px] font-romantic italic px-4">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-12 bg-accent ml-2 translate-y-2 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: displayedText.length === fullText.length ? 1 : 0, y: displayedText.length === fullText.length ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={onComplete}
            className="glass px-16 py-5 rounded-full text-white font-bold text-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all font-elegant italic border border-accent/40 shadow-romantic-xl"
          >
            See Your Grand Surprise
          </button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500/10 blur-[100px] rounded-full" />
      </motion.div>
    </div>
  );
}
