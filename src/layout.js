import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen z-15 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white font-mono">
            <header className="px-6 py-6 border-b border-gray-800 shadow-lg  shadow-green-500/10 flex justify-between items-center">
                <h1 className="text-4xl font-bold tracking-widest text-green-400">
                    CS2 Skins Market
                </h1>
                <nav className="flex gap-6 text-sm text-green-300">
                    <Link to="/" className="hover:text-green-500">Home</Link>
                    <Link to="/about" className="hover:text-green-500">About</Link>
                    <Link to="/contact" className="hover:text-green-500">Contact</Link>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="px-6 py-10 text-center text-gray-600 border-t border-gray-800">
                <p className="text-sm">© 2025 SkinzZone. All rights reserved.</p>
            </footer>
        </div>
    )
};