"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install lucide-react if needed

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Zurab Dalakishvili
                </h1>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-5">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/cv">CV</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>
                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 flex-row-reverse">

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <ModeToggle />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col items-start px-6 pb-4 space-y-4">
                    <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink href="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
                    <NavLink href="/cv" onClick={() => setIsOpen(false)}>CV</NavLink>
                    <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

function NavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="font-medium text-sm hover:text-primary transition-colors"
        >
            {children}
        </Link>
    );
}
