import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Rocket, MonitorSmartphone } from "lucide-react";

const products = [
  {
    title: "EtherTrack",
    description: "Carbon Emission Monitoring & Decentralized Trading",
    highlights: ["Blockchain", "Emission Data", "Carbon Credits"],
    link: "/ethertrack",
    demo: "/ethertrack/demo",
    gradient: "from-[#1de9b6] to-[#1dc4e9]",
    glow: "shadow-cyan-400/40",
  },
  {
    title: "EtherPulse",
    description: "Peer-to-Peer Renewable Energy Trading Platform",
    highlights: ["Energy Tokens", "P2P Trading", "Smart Grids"],
    link: "/etherpulse",
    demo: "/etherpulse/demo",
    gradient: "from-[#ff6e7f] to-[#bfe9ff]",
    glow: "shadow-pink-500/30",
  },
  {
    title: "EtherFlow",
    description: "Smart Water Management with Leak Detection",
    highlights: ["IoT Sensors", "Live Monitoring", "Water Analytics"],
    link: "/etherflow",
    demo: "/etherflow/demo",
    gradient: "from-[#6a11cb] to-[#2575fc]",
    glow: "shadow-indigo-400/30",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

const ProductsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-[#0b0b0b] text-white overflow-hidden">
      {/* 🔥 Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/fire-particles.gif')] bg-cover opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-xl"
        >
          Our Products
        </motion.h2>

        <motion.div
          className="flex flex-nowrap gap-8 overflow-x-auto md:justify-center md:overflow-visible px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="min-w-[320px] max-w-sm flex-shrink-0"
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.25}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="rounded-xl h-full"
              >
                <div
                  className={`bg-gradient-to-br ${product.gradient} p-[2px] rounded-xl shadow-lg ${product.glow} hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.3)] transition-all duration-300 h-full`}
                >
                  <div className="bg-[#0e0e0e] rounded-xl p-8 h-full flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                      <h3 className="text-3xl font-bold mb-2 tracking-tight drop-shadow">
                        {product.title}
                      </h3>
                      <p className="text-white/90 text-md mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 mb-6">
                        {product.highlights.map((tag, i) => (
                          <li
                            key={i}
                            className="text-xs bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Link
                        to={product.link}
                        className="inline-flex items-center gap-2 px-4 py-2 font-medium rounded-full bg-white text-black shadow hover:bg-gray-200 transition duration-200 w-full justify-center text-sm"
                      >
                        <MonitorSmartphone size={16} />
                        Live Preview
                      </Link>

                      <a
                        href={product.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 font-medium rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-md hover:scale-105 transition-transform duration-200 w-full justify-center text-sm"
                      >
                        <Rocket
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12"
                        />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
