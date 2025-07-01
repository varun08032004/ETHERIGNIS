import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#0b0b0b] text-white overflow-hidden"
    >
      {/* Background Particles (Optional) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/fire-particles.gif')] bg-cover opacity-5" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center z-10 relative bg-gradient-to-r from-orange-400 via-red-500 to-yellow-300 text-transparent bg-clip-text drop-shadow-xl"
      >
        About EtherIgnis
      </motion.h2>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-4xl mx-auto z-10 relative"
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.1}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="transition-transform duration-300 ease-in-out"
        >
          <div className="bg-[#111111] border border-orange-500 rounded-2xl p-10 shadow-2xl hover:shadow-[0_0_30px_#ff6a00] transition duration-300">
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              <span className="font-semibold text-white">EtherIgnis</span> is a decentralized ecosystem that unites multiple sustainability solutions under one vision. It powers platforms like <span className="text-orange-400">EtherTrack</span> for carbon credit trading, <span className="text-orange-400">EtherPulse</span> for P2P energy sharing, and <span className="text-orange-400">EtherFlow</span> for smart water management.
            </p>

            <p className="mt-6 text-white/80 text-md leading-relaxed">
              Our mission is to combat climate change using next-gen technologies like blockchain, IoT, and AI. We bring transparency to carbon markets, democratize access to renewable energy, and enable real-time monitoring of water systems—empowering individuals, communities, and businesses to become sustainability stakeholders.
            </p>

            <p className="mt-6 text-white/80 text-md leading-relaxed">
              From real-time dashboards to secure smart contracts, EtherIgnis offers seamless, secure, and scalable infrastructure for the green economy. Join us to accelerate the world’s transition to a net-zero future—one block, one sensor, one action at a time.
            </p>
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default AboutSection;
