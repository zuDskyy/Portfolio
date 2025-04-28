import React from "react";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => (
    <nav className="flex items-center justify-between overflow-hidden px-6 py-4 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] shadow-xl">
        <h1 className="text-2xl font-bold tracking-wider text-white">ZudskyyHub</h1>
        <div className="flex items-center space-x-4">
            <a href="#skins" className="hover:text-purple-300 transition">Marketplace</a>
            <a href="#how" className="hover:text-purple-300 transition">How It Works</a>
            <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
            <ShoppingCart className="hover:text-purple-300 cursor-pointer" />
        </div>
    </nav>
);