// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          Zuka<span className="text-white">Dev</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/services" className="hover:text-blue-400 transition">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-white space-y-4 py-4 px-4">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;