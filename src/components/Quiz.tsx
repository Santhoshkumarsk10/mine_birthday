"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CheckCircle2, AlertCircle, ChevronRight, Gift } from "lucide-react";
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
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4d4d', '#ff9999', '#ffcc00', '#33ccff', '#ff66cc']
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
        <div className="flex items-center gap-2 mb-2 justify-center">
          <Gift size={20} className="text-accent" />
          <span className="text-accent font-semibold tracking-wider uppercase text-xs">Birthday Progress</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / siteConfig.questions.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
        <div className="mt-2 text-center text-white/40 text-sm font-medium">
          Memory {currentStep + 1} of {siteConfig.questions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="glass max-w-2xl w-full p-8 md:p-12 rounded-[2.5rem] border-primary/20 shadow-romantic-2xl relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-white to-rose-100 font-elegant leading-tight">
            {currentQuestion.question}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
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
                  "w-full bg-white/5 border rounded-2xl px-8 py-5 text-2xl outline-none transition-all font-elegant text-center shadow-inner",
                  status === "correct" ? "border-green-500/50 bg-green-500/10 text-green-400" : 
                  status === "wrong" ? "border-red-500/50 bg-red-500/10 text-red-400" : "border-white/10 focus:border-accent/50 text-white"
                )}
                autoFocus
              />
              <AnimatePresence>
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="absolute right-6 top-1/2 -translate-y-1/2"
                  >
                    {status === "correct" ? (
                      <CheckCircle2 className="text-green-500 shadow-glow-green" size={32} />
                    ) : (
                      <AlertCircle className="text-red-500 shadow-glow-red" size={32} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-8 text-center">
              <AnimatePresence>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "text-xl font-romantic italic",
                      status === "correct" ? "text-green-400" : "text-rose-300"
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
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-accent to-rose-600 text-white font-bold text-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-elegant shadow-romantic-lg"
            >
              Unwrap the Next Memory <ChevronRight size={24} />
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
