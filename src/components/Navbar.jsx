import React from "react";

const Navbar = () => {
  return (
    <header className="z-50 bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white shadow-lg fixed w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-red-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          EtherIgnis
        </a>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center gap-5 text-sm md:text-base text-gray-300 font-medium">
          <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#products" className="hover:text-orange-400 transition-colors">Products</a>
          <a href="#stats" className="hover:text-orange-400 transition-colors">Stats</a>
          <a href="#feedback" className="hover:text-orange-400 transition-colors">Feedback</a>
          <a href="#roadmap" className="hover:text-orange-400 transition-colors">Roadmap</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </nav>
      </div>

      {/* 🔥 Neon Glow Line Below Navbar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 shadow-[0_0_10px_#ff6a00,0_0_20px_#f9d423] animate-pulseGlow" />
    </header>
  );
};

export default Navbar;
