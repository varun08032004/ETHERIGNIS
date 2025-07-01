// src/components/FireParticles.jsx
import React, { useCallback, useEffect, useState, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

const FireParticles = () => {
  const [intensity, setIntensity] = useState(25);

  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  // 🔥 Scroll listener to control intensity dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIntensity = Math.min(60, 25 + scrollY / 30); // Clamp between 25 and 60
      setIntensity(newIntensity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particleOptions = useMemo(() => ({
    preset: "fire",
    fullScreen: { enable: false },
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    background: {
      color: {
        value: "#000000",
      },
    },
    particles: {
      number: {
        value: intensity,
        density: {
          enable: true,
          area: 800,
        },
      },
      size: {
        value: { min: 2, max: 6 },
      },
      move: {
        speed: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push", // fallback instead of custom "explode"
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 10,
        },
      },
    },
  }), [intensity]);

  return (
    <Particles
      id="fire"
      init={particlesInit}
      options={particleOptions}
    />
  );
};

export default FireParticles;
