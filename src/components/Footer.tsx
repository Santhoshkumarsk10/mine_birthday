"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaHeart, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-6 px-4 relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <p className="text-white/40 text-sm flex items-center gap-2">
            Developed with <FaHeart size={14} className="text-pink-500 fill-current" /> by 
            <span className="text-white/80 font-medium tracking-wide">Santhoshkumar B</span>
          </p>
          <p className="text-white/20 text-xs">
            © {currentYear} All Rights Reserved
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-6"
        >
          <a 
            href="https://www.instagram.com/itzsandy05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-500 transition-colors hover:scale-110 transform"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="https://www.facebook.com/santhoshkumar2510" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-blue-500 transition-colors hover:scale-110 transform"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/santhoshkumar-b-18213b129" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-blue-400 transition-colors hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a 
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-green-500 transition-colors hover:scale-110 transform"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
