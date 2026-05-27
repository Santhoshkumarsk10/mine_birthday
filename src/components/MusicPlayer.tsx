"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          // Successfully played, remove interaction listeners
          removeListeners();
        }
      } catch (err) {
        console.log("Autoplay blocked, waiting for user interaction...");
      }
    };

    const handleInteraction = () => {
      playAudio();
    };

    const addListeners = () => {
      window.addEventListener("click", handleInteraction);
      window.addEventListener("touchstart", handleInteraction);
      window.addEventListener("keydown", handleInteraction);
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    // Try playing immediately
    playAudio();

    // Add listeners to start audio upon the first user interaction (e.g. clicking "Start")
    addListeners();

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={siteConfig.musicUrl}
      loop
      className="hidden"
    />
  );
}
