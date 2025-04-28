import React from "react";
import { skins } from "../skins";
import { Link } from "react-router-dom";
export const TrendingSkins = () => (
    <section id="skins" className="py-20 px-6  text-white">
        <h3 className="text-3xl font-bold text-center mb-12">🔥 Trending Skins</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {skins.map((skin, idx) => (
                <div key={idx} className=" bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition shadow-lg">
                    <img src={skin.image} alt={skin.name} className="rounded-lg mb-4" />
                    <h4 className="text-xl font-semibold">{skin.name}</h4>
                    <p className="text-purple-400 font-medium">{skin.price}</p>
                    <Link to={`/skins/${skin.id}`}>
                        <button className="mt-4 w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-500">View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    </section>
);