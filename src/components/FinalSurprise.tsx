"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { RefreshCw, Heart, Star, Cake } from "lucide-react";

interface FinalSurpriseProps {
  onReplay: () => void;
}

export default function FinalSurprise({ onReplay }: FinalSurpriseProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const duration = 20 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 35, 
      spread: 360, 
      ticks: 80, 
      zIndex: 0, 
      colors: ['#ff4d4d', '#ff9999', '#ffcc00', '#33ccff', '#ff66cc', '#ffffff'] 
    };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 200);

    // Initial massive burst
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff4d4d', '#ff9999', '#ffcc00', '#33ccff', '#ff66cc', '#ffffff']
    });

    setTimeout(() => setShowVideo(true), 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-romantic-gradient opacity-30 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        className="text-center mb-16 z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-block mb-6 text-accent"
        >
          <Cake size={80} fill="currentColor" />
        </motion.div>
        
        <h2 className="text-6xl md:text-9xl font-extrabold mb-6 text-glow-romantic bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-pink-600 font-elegant leading-tight tracking-tight">
          Happy Birthday, {siteConfig.friendName}! 🎂
        </h2>
        <p className="text-2xl md:text-4xl text-white/80 font-romantic italic max-w-3xl mx-auto leading-relaxed">
          May your beautiful soul always shine as bright as the stars. You deserve all the happiness in the world today and forever. ❤️
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showVideo ? 1 : 0, y: showVideo ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl aspect-video glass rounded-[3rem] overflow-hidden shadow-romantic-2xl relative border border-white/10"
      >
        <iframe
          src={`https://www.youtube.com/embed/${siteConfig.surpriseVideoId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
          title="Birthday Surprise"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-20 flex flex-col items-center gap-10 z-10"
      >
        <div className="flex items-center gap-4 text-accent animate-bounce">
          <Star fill="currentColor" size={28} />
          <Heart fill="currentColor" size={32} className="text-pink-500" />
          <span className="text-2xl font-bold font-elegant italic">Forever Yours, Always</span>
          <Heart fill="currentColor" size={32} className="text-pink-500" />
          <Star fill="currentColor" size={28} />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button
            onClick={onReplay}
            className="glass px-10 py-4 rounded-full flex items-center justify-center gap-3 text-white/90 hover:text-white hover:bg-white/20 transition-all font-semibold text-lg border border-white/10"
          >
            <RefreshCw size={22} /> Replay Experience
          </button>
        </div>
      </motion.div>
      
      {/* Small floating hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500/10 pointer-events-none"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: "-10%",
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            delay: Math.random() * 10
          }}
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}
    </div>
  );
}
