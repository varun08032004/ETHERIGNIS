import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import FireParticles from "../components/FireParticles";
import logo from "../assets/logo.png";
import { Rocket, ChevronsDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-transparent"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* 🔥 Fire Particle Background */}
      <div className="absolute inset-0 z-0">
        <FireParticles />
      </div>

      {/* 💫 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white space-y-6">
        {/* 🔸 Tagline */}
        <motion.p
          className="text-sm md:text-base uppercase tracking-widest text-orange-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Powering Decentralized Innovation
        </motion.p>

        {/* 🔷 Glowing Logo with Ring */}
        <motion.div
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center animate-pulse ring-4 ring-orange-500/30"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={logo}
            alt="EtherIgnis Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </motion.div>

        {/* 🧠 Brand Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          EtherIgnis
        </motion.h1>

        {/* ✨ Typewriter Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-white/90 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Typewriter
            words={["Ignite • Innovate • Decentralize"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* 🔍 Extra Description */}
        <motion.p
          className="text-sm md:text-base text-white/70 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          A revolutionary Web3 ecosystem designed to empower users through sustainable innovation and decentralized solutions.
        </motion.p>

        {/* 🚀 Centered CTA Button */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="#products">
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl text-white font-medium shadow-md transition-all hover:scale-105">
              <Rocket size={18} />
              Explore DApps
            </button>
          </a>
        </motion.div>

        {/* ⬇️ Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-6 animate-bounce text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <ChevronsDown size={32} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
