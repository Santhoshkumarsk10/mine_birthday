"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface GalleryProps {
  onComplete: () => void;
}

export default function Gallery({ onComplete }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-600 font-elegant">
          Our Love Story
        </h2>
        <p className="text-white/60 text-xl font-romantic italic">A journey through our most beautiful moments.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square rounded-3xl overflow-hidden glass cursor-pointer"
            onClick={() => setSelectedImage(item.url)}
          >
            <Image
              src={item.url}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-white font-romantic text-3xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                {item.caption}
              </p>
              <div className="text-white/60 flex items-center gap-2 text-sm translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                <Maximize2 size={16} /> Click to enlarge
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <button
          onClick={onComplete}
          className="glass px-12 py-4 rounded-full text-white font-semibold text-xl hover:bg-white/10 transition-all font-elegant italic border-primary/30"
        >
          Read Our Message
        </button>
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white/60 hover:text-white">
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full h-full max-w-5xl"
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
    </div>
  );
}
