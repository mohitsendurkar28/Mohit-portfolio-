"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "PROJECTS", path: "/projects" },
        { name: "SKILLS", path: "/skills" },
        { name: "EXPERIENCE", path: "/experience" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    MOHIT<span className="text-accentGold">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} className="hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <a href="/resume.pdf" download className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full transition-all">
                        <Download size={16} />
                        RESUME
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-offwhite" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-charcoal border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl"
                    >
                        {links.map((link) => (
                            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">
                                {link.name}
                            </Link>
                        ))}
                        <a href="/resume.pdf" download className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full mt-4">
                            <Download size={18} /> DOWNLOAD RESUME
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}