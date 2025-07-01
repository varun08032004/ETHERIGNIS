import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const stats = [
  {
    title: "1M+ Transactions Handled",
    detail: "Trusted for secure and high-volume blockchain operations.",
    gradient: "from-[#00c6ff] to-[#0072ff]",
    glow: "shadow-blue-400/40",
  },
  {
    title: "500K+ Active Users",
    detail: "Growing community of eco-conscious individuals & companies.",
    gradient: "from-[#f7971e] to-[#ffd200]",
    glow: "shadow-yellow-300/40",
  },
  {
    title: "100+ Govt Accreditations",
    detail: "Recognized by leading environmental authorities globally.",
    gradient: "from-[#1de9b6] to-[#1dc4e9]",
    glow: "shadow-cyan-400/40",
  },
  {
    title: "40+ University Partners",
    detail: "Collaborating with top institutions on sustainability research.",
    gradient: "from-[#42e695] to-[#3bb2b8]",
    glow: "shadow-green-400/30",
  },
  {
    title: "10,000+ Tons CO₂ Offset",
    detail: "Empowering real, measurable impact on climate goals.",
    gradient: "from-[#ff9a9e] to-[#fad0c4]",
    glow: "shadow-red-300/40",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60 },
  },
};

const StatsAchievementsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-[#0b0b0b] text-white overflow-hidden">
      {/* 🔥 Fire Particles Background */}
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
          Stats & Achievements
        </motion.h2>

        <motion.div
          className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide px-2 pb-4 md:px-0 md:pb-6 cursor-grab active:cursor-grabbing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {stats.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="flex-shrink-0 w-[300px] md:w-[350px]">
              <Tilt
                glareEnable
                glareMaxOpacity={0.25}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="rounded-xl"
              >
                <div
                  className={`bg-gradient-to-br ${item.gradient} p-[2px] rounded-xl shadow-lg ${item.glow} hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.3)] transition-all duration-300`}
                >
                  <div className="bg-[#0e0e0e] rounded-xl p-8 h-full flex flex-col justify-between text-left">
                    <div className="mb-6">
                      <Trophy className="text-white/40 mb-4" size={28} />
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            View More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsAchievementsSection;
