import React from "react";
import { motion } from "framer-motion";
import { TrendingSkins } from "./trendingskins";

export const Hero = () => (
  <section className="p-10 bg-[url('./hero-bg.jpg')] bg-cover bg-center flex items-center justify-center relative">
    <div className="absolute inset-0 bg-black/60 z-0" />
    <motion.div
      className="z-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold mb-4">Buy, Sell & Showcase Your Skins</h2>
      <p className="text-lg text-gray-300 mb-6">
        The ultimate CS2 skin marketplace with real-time prices, trade support, and trusted reviews.
      </p>
      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white transition">
        Explore Skins
      </button>
      <TrendingSkins />
    </motion.div>
  </section>
);