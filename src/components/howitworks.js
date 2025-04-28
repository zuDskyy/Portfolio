import React from "react";

export const HowItWorks = () => (
    <section id="how" className="py-20 px-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
        <h3 className="text-3xl font-bold text-center mb-12">📦 How It Works</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div>
                <h4 className="text-xl font-bold mb-2">1. Browse Skins</h4>
                <p className="text-gray-400">Find the perfect skin across hundreds of categories.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">2. Add to Cart</h4>
                <p className="text-gray-400">Use our secure cart system to store what you love.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">3. Trade & Enjoy</h4>
                <p className="text-gray-400">Instant delivery. Safe and easy skin trading experience.</p>
            </div>
        </div>
    </section>
);