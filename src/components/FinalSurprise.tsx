"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { RefreshCw, Heart, Star, Cake, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface FinalSurpriseProps {
  onReplay: () => void;
}

export default function FinalSurprise({ onReplay }: FinalSurpriseProps) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

    setTimeout(() => setShowSlideshow(true), 1500);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + siteConfig.gallery.length) % siteConfig.gallery.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % siteConfig.gallery.length);
  };

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
        animate={{ opacity: showSlideshow ? 1 : 0, y: showSlideshow ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl aspect-video glass rounded-[3rem] overflow-hidden shadow-romantic-2xl relative border border-white/10 bg-black/40"
      >
        {showSlideshow && (
          <>
            {/* Timing Progress Bar at the top edge */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-white/5 z-40 overflow-hidden">
              <motion.div
                key={currentSlide + "-" + isPlaying}
                initial={{ width: "0%" }}
                animate={isPlaying ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => {
                  if (isPlaying) {
                    handleNext();
                  }
                }}
                className="h-full bg-gradient-to-r from-accent via-rose-500 to-pink-500"
              />
            </div>

            {/* Top Control Bar */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between z-30">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="glass px-5 py-2.5 rounded-full text-white/80 hover:text-white flex items-center gap-2 text-sm font-semibold border border-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>
              <div className="glass px-5 py-2.5 rounded-full text-white/80 text-sm font-semibold border border-white/10 select-none">
                {currentSlide + 1} / {siteConfig.gallery.length}
              </div>
            </div>

            {/* Slide Images */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Blurred background image for cinema look */}
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-3xl opacity-45 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${siteConfig.gallery[currentSlide].url})` }}
                  />
                  {/* Main Centered Image */}
                  <motion.div
                    animate={{ scale: [1, 1.05] }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="relative w-full h-full flex items-center justify-center bg-black/30"
                  >
                    <img
                      src={siteConfig.gallery[currentSlide].url}
                      alt={siteConfig.gallery[currentSlide].caption}
                      className="max-w-full max-h-[90%] object-contain z-10 select-none shadow-2xl rounded-2xl"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left/Right Navigation Chevrons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:scale-105 active:scale-95 transition-all z-30 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:scale-105 active:scale-95 transition-all z-30 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={32} />
            </button>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 pt-20 z-20 flex flex-col justify-end">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white font-romantic text-2xl sm:text-3xl md:text-5xl text-center leading-relaxed font-elegant drop-shadow-md"
              >
                {siteConfig.gallery[currentSlide].caption}
              </motion.p>
            </div>
          </>
        )}
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
            className="glass px-10 py-4 rounded-full flex items-center justify-center gap-3 text-white/90 hover:text-white hover:bg-white/20 transition-all font-semibold text-lg border border-white/10 cursor-pointer"
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
