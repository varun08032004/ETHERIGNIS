import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SectionTransition from "./components/SectionTransition";
import ProductCard from "./components/ProductCard";
import RoadmapSection from "./components/RoadmapSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import FireParticles from "./components/FireParticles";
import ClientFeedbackSection from "./components/ClientFeedbackSection";
import StatsAchievements from "./components/StatsAchievements";
import ProductsSection from "./components/ProductsSection";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden scroll-smooth">
      {/* 🔥 Animated Fire Background */}
      <div className="absolute inset-0 -z-10">
        <FireParticles />
      </div>

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 🎯 Transition */}
      <SectionTransition />

      {/* ℹ️ About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 🚀 Core Products */}
      <section id="products">
        <ProductsSection />
      </section>

      {/* 📊 Stats & Achievements */}
      <section id="stats">
        <StatsAchievements />
      </section>

      {/* 💬 Client Feedback */}
      <section id="feedback">
        <ClientFeedbackSection />
      </section>

      {/* 🗺️ Roadmap */}
      <section id="roadmap">
        <RoadmapSection />
      </section>

      {/* 📞 Contact */}
      <section id="contact">
        <ContactSection />
      </section>


      {/* 🔚 Footer */}
      <Footer />
    </div>
  );
};

export default App;
