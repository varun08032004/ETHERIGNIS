import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Testimonials data
const feedbacks = [
  {
    name: "Ananya Sharma",
    role: "Sustainability Officer, GreenCorp",
    feedback:
      "EtherTrack helped us streamline our carbon credit tracking. The platform is user-friendly and efficient.",
    gradient: "from-[#1de9b6] to-[#1dc4e9]",
    glow: "shadow-cyan-400/40",
  },
  {
    name: "Ravi Patel",
    role: "CTO, SunVolt Energy",
    feedback:
      "EtherPulse revolutionized how we trade surplus energy with our partners. Truly a game-changer!",
    gradient: "from-[#ff6e7f] to-[#bfe9ff]",
    glow: "shadow-pink-500/30",
  },
  {
    name: "Maria Lopez",
    role: "Environmental Analyst, EarthFirst",
    feedback:
      "I appreciate the transparency and security EtherTrack offers through blockchain integration.",
    gradient: "from-[#f7971e] to-[#ffd200]",
    glow: "shadow-yellow-400/40",
  },
  {
    name: "Daniel Kim",
    role: "VP of Innovation, EcoSpark",
    feedback:
      "The seamless integration of Web3 tools in EtherIgnis blew us away. Truly next-gen.",
    gradient: "from-[#42e695] to-[#3bb2b8]",
    glow: "shadow-green-400/30",
  },
  {
    name: "Sophia Zhang",
    role: "Climate Researcher, TerraNova",
    feedback:
      "With EtherTrack, our emission monitoring is finally transparent and immutable. Highly recommend!",
    gradient: "from-[#ff9a9e] to-[#fad0c4]",
    glow: "shadow-red-300/40",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60 },
  },
};

const ClientFeedbackSection = () => {
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
          Our Clients' Feedback
        </motion.h2>

        <motion.div
          className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide px-2 pb-4 md:px-0 md:pb-6 cursor-grab active:cursor-grabbing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {feedbacks.map((client, index) => (
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
                  className={`bg-gradient-to-br ${client.gradient} p-[2px] rounded-xl shadow-lg ${client.glow} hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.3)] transition-all duration-300`}
                >
                  <div className="bg-[#0e0e0e] rounded-xl p-8 h-full flex flex-col justify-between text-left">
                    <div className="mb-6">
                      <Quote className="text-white/40 mb-4" size={28} />
                      <p className="text-white/90 text-md italic leading-relaxed">
                        “{client.feedback}”
                      </p>
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-lg font-semibold">{client.name}</h4>
                      <p className="text-sm text-white/60">{client.role}</p>
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

export default ClientFeedbackSection;
