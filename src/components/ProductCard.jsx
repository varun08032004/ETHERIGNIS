// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ title, description, icon }) => {
  return (
    <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-xl hover:shadow-orange-500/40 transition duration-300">
      <div className="text-orange-400 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
};

export default ProductCard;
