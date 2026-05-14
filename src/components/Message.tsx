"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";
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
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute inset-0 bg-glow-gradient opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass max-w-3xl w-full p-8 md:p-16 rounded-[3rem] relative overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-pink-500 mb-8 flex justify-center"
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
          A Message for You
        </h2>

        <div className="text-2xl md:text-4xl text-rose-100 leading-relaxed text-center min-h-[250px] font-romantic">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-10 bg-accent ml-1 translate-y-2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: displayedText.length === fullText.length ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={onComplete}
            className="glass px-12 py-4 rounded-full text-white font-semibold text-xl hover:bg-white/10 transition-all font-elegant italic border-accent/30"
          >
            See Our Surprise
          </button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full" />
      </motion.div>
    </div>
  );
}
