"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

interface QuizProps {
  onComplete: () => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [message, setMessage] = useState("");

  const currentQuestion = siteConfig.questions[currentStep];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (answer.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim()) {
      setStatus("correct");
      setMessage("Yay! That's correct! ✨");
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        if (currentStep < siteConfig.questions.length - 1) {
          setCurrentStep(currentStep + 1);
          setAnswer("");
          setStatus("idle");
          setMessage("");
        } else {
          onComplete();
        }
      }, 1500);
    } else {
      setStatus("wrong");
      setMessage(currentQuestion.retryMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-md px-10">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / siteConfig.questions.length) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-center text-white/40 text-sm">
          Question {currentStep + 1} of {siteConfig.questions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass max-w-2xl w-full p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            {currentQuestion.question}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (status === "wrong") setStatus("idle");
                }}
                placeholder="Type your answer here..."
                className={cn(
                  "w-full bg-white/5 border rounded-2xl px-6 py-4 text-xl outline-none transition-all",
                  status === "correct" ? "border-green-500/50 bg-green-500/10" : 
                  status === "wrong" ? "border-red-500/50 bg-red-500/10" : "border-white/10 focus:border-primary/50"
                )}
                autoFocus
              />
              <AnimatePresence>
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {status === "correct" ? (
                      <CheckCircle2 className="text-green-500" size={28} />
                    ) : (
                      <AlertCircle className="text-red-500" size={28} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-6 text-center">
              <AnimatePresence>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "text-lg",
                      status === "correct" ? "text-green-400" : "text-red-400"
                    )}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={!answer || status === "correct"}
              className="w-full py-4 rounded-2xl bg-primary text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next Question <ChevronRight size={20} />
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
