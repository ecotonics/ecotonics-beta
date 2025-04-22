"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    const navLinks = [
        { href: "#", label: "HOME" },
        { href: "#", label: "ABOUT US" },
        { href: "#", label: "SOLUTIONS" },
        { href: "#", label: "PROJECTS" }
    ];

    return (
        <section className="relative w-full mx-auto h-150 sm:h-screen mb-10">
            {/* Decorative Elements */}
            <img src="/images/top-left.png" alt="Decorative element" className="absolute top-0 left-0 z-0" />
            <img src="/images/bottom-right.png" alt="Decorative element" className="absolute bottom-0 right-0 z-0" />

            <div className="relative z-10 h-full w-full py-5 px-6 md:px-10 lg:px-16 flex flex-col justify-between">
                {/* Header */}
                <header className="flex justify-between items-center w-full px-4 md:px-8 py-5 text-black border-b">
                    <div className="text-xl font-extrabold">ECOTONICS</div>

                    <nav className="hidden md:flex space-x-8 text-sm font-bold">
                        {navLinks.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href} 
                                className="hover:text-gray-500 transition duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button 
                            className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-800 transition duration-300"
                            aria-label="Contact us"
                        >
                            LET&apos;S TALK
                        </button>
                    </div>

                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden focus:outline-none" 
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <Menu size={28} />
                    </button>
                </header>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div 
                        className="fixed inset-x-3 inset-y-3 bg-white border-2 border-gray-300 flex flex-col justify-center items-center z-50 rounded-3xl p-8 transition-all duration-300 ease-in-out shadow-xl"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                    >
                        <button 
                            onClick={toggleMenu} 
                            className="absolute top-6 right-6 text-black focus:outline-none transition-transform duration-300 hover:rotate-90" 
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>
                        
                        <nav className="flex flex-col space-y-8 text-black text-xl font-bold text-center">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.label}
                                    href={link.href} 
                                    className="hover:text-gray-600 transition-all duration-300 transform hover:translate-x-1"
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="mt-10">
                            <button className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                                LET&apos;S TALK
                            </button>
                        </div>
                    </div>
                )}

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center text-black text-center">
                    <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto px-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-800">
                            SMART SPACES <br /> TAILORED FOR YOU
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;