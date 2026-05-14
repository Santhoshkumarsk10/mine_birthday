"use client";

import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X, Star } from "lucide-react";

interface GalleryProps {
  onComplete: () => void;
}

export default function Gallery({ onComplete }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-accent/10 animate-pulse">
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-accent/10 animate-pulse delay-700">
        <Star size={60} fill="currentColor" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-rose-500 to-rose-700 font-elegant leading-tight">
          All About You
        </h2>
        <p className="text-white/60 text-2xl md:text-3xl font-romantic italic max-w-2xl mx-auto">
          A collection of your most radiant smiles and beautiful memories. You make the world brighter just by being in it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass cursor-pointer border border-white/5 shadow-romantic-lg"
            onClick={() => setSelectedImage(item.url)}
          >
            <Image
              src={item.url}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white font-romantic text-4xl mb-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                {item.caption}
              </p>
              <div className="text-white/70 flex items-center gap-2 text-base translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                <Maximize2 size={18} /> Click to relive this moment
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 flex flex-col items-center gap-8"
      >
        <button
          onClick={onComplete}
          className="glass px-14 py-5 rounded-full text-white font-bold text-2xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all font-elegant italic border border-accent/40 shadow-romantic-xl"
        >
          Read Your Birthday Message
        </button>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors">
              <X size={48} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Memory"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
