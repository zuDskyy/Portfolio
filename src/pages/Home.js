import React from "react";

import { Hero } from "../components/hero";
import { TrendingSkins } from "../components/trendingskins";
import { HowItWorks } from "../components/howitworks";
import { Testimonials } from "../components/testimonials";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function Home() {
    return (
        <main className=" bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white font-sans">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Testimonials />
            <Footer />

        </main>
    )


    // return (
    //     <div className="px-6 py-16">
    //         <motion.h2
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 0.6 }}
    //             className="text-3xl md:text-5xl font-bold text-center text-green-300 mb-12"
    //         >
    //             Top Trending Skins
    //         </motion.h2>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    //             {skins.map((skin) => (
    //                 <motion.div
    //                     key={skin.id}
    //                     whileHover={{ scale: 1.05 }}
    //                     transition={{ type: "spring", stiffness: 200 }}
    //                     className="bg-[#161616] border border-green-800 rounded-lg overflow-hidden shadow-md shadow-green-500/20"
    //                 >
    //                     <Link to={`/skins/${skin.id}`}>
    //                         <img
    //                             src={skin.image}
    //                             alt={skin.name}
    //                             className="w-full h-64 object-cover border-b border-green-900"
    //                         />
    //                     </Link>
    //                     <div className="p-6">
    //                         <h3 className="text-xl font-semibold text-green-300 mb-2">{skin.name}</h3>
    //                         <p className="text-gray-400 mb-4">{skin.price}</p>
    //                         <button className="bg-green-600 text-black hover:bg-green-500 transition w-full">
    //                             <Link to={`/skins/${skin.id}`}>Buy Skin</Link>
    //                         </button>
    //                     </div>
    //                 </motion.div>
    //             ))}
    //         </div>
    //     </div>
    // );
}