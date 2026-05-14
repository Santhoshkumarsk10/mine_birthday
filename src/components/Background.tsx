"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadHeartShape } from "@tsparticles/shape-heart";
import type { Engine } from "@tsparticles/engine";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadHeartShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff4d4d", "#e2b1b1", "#ff9999", "#ffffff", "#ffcc00"],
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: { min: 0.3, max: 0.8 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          shape: {
            type: ["heart", "star"],
          },
          size: {
            value: { min: 1, max: 4 },
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 10
          },
        },
        detectRetina: true,
      }}
    />
  );
}
