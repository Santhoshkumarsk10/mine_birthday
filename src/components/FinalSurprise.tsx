"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { RefreshCw, Heart } from "lucide-react";

interface FinalSurpriseProps {
  onReplay: () => void;
}

export default function FinalSurprise({ onReplay }: FinalSurpriseProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => setShowVideo(true), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          Best Wishes Forever! ❤️
        </h2>
        <p className="text-2xl text-white/60">May your day be filled with magic.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showVideo ? 1 : 0, y: showVideo ? 0 : 20 }}
        className="w-full max-w-4xl aspect-video glass rounded-[2rem] overflow-hidden shadow-2xl relative"
      >
        <iframe
          src={`https://www.youtube.com/embed/${siteConfig.surpriseVideoId}?autoplay=1&mute=0`}
          title="Birthday Surprise"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-16 flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-2 text-pink-500 animate-pulse">
          <Heart fill="currentColor" />
          <span className="text-xl font-medium">Made with love for {siteConfig.friendName}</span>
          <Heart fill="currentColor" />
        </div>

        <button
          onClick={onReplay}
          className="glass px-8 py-3 rounded-full flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 transition-all"
        >
          <RefreshCw size={20} /> Replay Experience
        </button>
      </motion.div>
    </div>
  );
}
