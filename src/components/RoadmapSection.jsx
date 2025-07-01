import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Q1 2024",
    title: "Foundation Laid",
    description: "Initial research, team formation, and proof of concept development.",
    gradient: "from-purple-500 to-indigo-600",
    glow: "hover:shadow-purple-500/50"
  },
  {
    phase: "Q2 2024",
    title: "MVP Launch",
    description: "Release of the minimum viable product with core functionalities.",
    gradient: "from-blue-500 to-teal-500",
    glow: "hover:shadow-teal-400/50"
  },
  {
    phase: "Q3 2024",
    title: "Beta Testing",
    description: "Community onboarding, feedback, and performance enhancements.",
    gradient: "from-green-500 to-lime-500",
    glow: "hover:shadow-lime-400/50"
  },
  {
    phase: "Q4 2024",
    title: "Mainnet Integration",
    description: "Smart contract audits and mainnet deployment with real-time tracking.",
    gradient: "from-yellow-500 to-orange-500",
    glow: "hover:shadow-yellow-400/50"
  },
  {
    phase: "Q1 2026",
    title: "Global Expansion",
    description: "Scaling infrastructure, partnerships, and global ecosystem building.",
    gradient: "from-red-500 to-pink-500",
    glow: "hover:shadow-pink-400/50"
  }
];

const Roadmap = () => {
  return (
    <section className="py-20 px-6 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-xl"
        >
          Roadmap
        </motion.h2>

        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex gap-8 flex-nowrap">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-shrink-0 w-[280px]"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div
                    className={`cursor-pointer bg-gradient-to-br ${item.gradient} p-[2px] rounded-xl shadow-lg ${item.glow} transition-all duration-300`}
                  >
                    <div className="bg-[#0e0e0e] rounded-xl p-6 min-h-[280px] h-full flex flex-col justify-between text-left">
                      <div>
                        <h4 className="text-xl font-bold text-white">{item.phase}</h4>
                        <h3 className="text-lg font-semibold text-white/90 mt-1">{item.title}</h3>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
