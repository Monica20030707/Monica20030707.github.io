import React, { useState, useEffect } from "react";

const Navbar = () => {
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

    return (
        <nav className={`w-full fixed px-8 md:px-16 lg:px-24 transition-all duration-300 ${scrolled ? 'bg-black/10 backdrop-blur-sm' : 'bg-transparent'} z-50`}>
            <div className="container py-6 flex justify-center md:justify-between items-center text-white">
                <div className="font-tinos font-bold text-2xl md:inline">
                    <a href="#home" className="smooth-scroll">Monica Nguyen</a>
                </div>
                <div className="flex space-x-6 text-lg">
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#projects">Works</a>
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#about">About Me</a>
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;