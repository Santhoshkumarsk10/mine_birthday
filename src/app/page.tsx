"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Welcome from "@/components/Welcome";
import Quiz from "@/components/Quiz";
import Gallery from "@/components/Gallery";
import Message from "@/components/Message";
import FinalSurprise from "@/components/FinalSurprise";
import Footer from "@/components/Footer";

type Step = "welcome" | "quiz" | "gallery" | "message" | "surprise";

export default function Home() {
  const [step, setStep] = useState<Step>("welcome");

  const nextStep = (next: Step) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(next);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Welcome onStart={() => nextStep("quiz")} />
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Quiz onComplete={() => nextStep("gallery")} />
          </motion.div>
        )}

        {step === "gallery" && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Gallery onComplete={() => nextStep("message")} />
          </motion.div>
        )}

        {step === "message" && (
          <motion.div
            key="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Message onComplete={() => nextStep("surprise")} />
          </motion.div>
        )}

        {step === "surprise" && (
          <motion.div
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FinalSurprise onReplay={() => nextStep("welcome")} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer integrated into the page flow */}
      <Footer />
    </div>
  );
}
