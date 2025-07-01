import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white px-6 pt-20 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

        {/* Logo + Tagline */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-300 bg-clip-text text-transparent">
            EtherIgnis
          </h2>
          <p className="mt-3 text-sm text-gray-400 italic">
            Ignite • Innovate • Decentralize
          </p>
        </div>

        {/* Quick Links */}
<div data-aos="fade-up" data-aos-delay="100">
  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
    Quick Links
  </h3>
  <ul className="space-y-2 text-sm text-gray-300 flex flex-col items-start">
    <li>
      <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
    </li>
    <li>
      <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
    </li>
    <li>
      <a href="#products" className="hover:text-orange-400 transition-colors">Products</a>
    </li>
    <li>
      <a href="#roadmap" className="hover:text-orange-400 transition-colors">Roadmap</a>
    </li>
   
  </ul>
</div>


        {/* Newsletter Signup */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-3">Stay updated with our latest innovations.</p>
          <div className="flex items-center bg-[#1a1a1a] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full text-sm text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold text-sm hover:brightness-110 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Socials */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            Connect
          </h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-300">
            {[FaGithub, FaTwitter, FaLinkedin, FaGlobe].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-orange-400">EtherIgnis</span>. All rights reserved.
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg hover:scale-110 transition"
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
