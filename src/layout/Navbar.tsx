import React, { useState, useEffect } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (sectionId: string) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className={`w-full fixed px-8 md:px-16 lg:px-24 transition-all duration-300 ${scrolled ? 'bg-black/10 backdrop-blur-sm' : 'bg-transparent'} z-50`}>
            <div className="container py-6 flex justify-center md:justify-between items-center text-white">
                <div className="font-tinos font-bold text-2xl md:inline">
                    <a onClick={() => scrollToSection('#home')} className="cursor-pointer">Monica Nguyen</a>
                </div>
                <div className="flex space-x-6 text-lg">
                    <a onClick={() => scrollToSection('#projects')} className="font-montserrat hover:text-gray-400 cursor-pointer">Works</a>
                    <a onClick={() => scrollToSection('#about')} className="font-montserrat hover:text-gray-400 cursor-pointer">About Me</a>
                    <a onClick={() => scrollToSection('#contact')} className="font-montserrat hover:text-gray-400 cursor-pointer">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;