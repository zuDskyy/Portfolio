import React from "react";
import { motion } from "framer-motion";
const reviews = [
    { name: "PlayerOne", text: "Easily the best skin site I've ever used. Fast delivery and amazing UI." },
    { name: "ClutchKing", text: "Got a sick Dragon Lore here for a great price. Totally recommend!" },
];

export const Testimonials = () => (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
        <h3 className="text-3xl font-bold text-center mb-12">⭐ What Players Say</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i}
                    className="bg-gray-800 p-6 rounded-lg shadow-md"
                >
                    <p className="italic text-gray-300 mb-4">“{review.text}”</p>
                    <h4 className="font-bold text-purple-400">- {review.name}</h4>
                </motion.div>

            ))}
        </div>
    </section>
);