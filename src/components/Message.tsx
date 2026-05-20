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
        initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
        animate={{ opacity: 1, rotate: -0.5, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="paper-sheet max-w-4xl w-full relative"
      >
        <div className="paper-content">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-rose-500 mb-8 flex justify-start"
          >
            <Heart size={48} fill="currentColor" className="opacity-80" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-left ink-black font-elegant leading-tight">
            A Birthday Letter to You
          </h2>

          <div className="text-2xl md:text-4xl ink-blue leading-[32px] text-left min-h-[400px] font-romantic italic">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-8 bg-blue-400 ml-1 translate-y-1"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: displayedText.length === fullText.length ? 1 : 0, y: displayedText.length === fullText.length ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mt-12 flex justify-end"
          >
            <button
              onClick={onComplete}
              className="bg-white/50 border-2 border-dashed border-rose-300 px-8 py-3 rounded-lg text-rose-600 font-bold text-xl hover:bg-rose-50 hover:scale-105 active:scale-95 transition-all font-romantic italic shadow-md rotate-2"
            >
              See Your Grand Surprise
            </button>
          </motion.div>
        </div>

        {/* Decorative ink blots */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-blue-900/5 blur-sm rounded-full" />
        <div className="absolute bottom-20 left-12 w-6 h-6 bg-rose-900/5 blur-md rounded-full" />
      </motion.div>
    </div>
  );
}
