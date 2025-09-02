import React from "react"

const Navbar = () => {
    return (
        <nav className="w-full fixed bg-transparent px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="font-tinos font-bold text-2xl md:inline">
                    <a href="#home" className="smooth-scroll">Monica Nguyen</a>
                </div>
                <div className="flex space-x-6 text-lg">
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#work">Works</a>
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#about">About Me</a>
                    <a className="font-montserrat hover:text-gray-400 cursor-pointer smooth-scroll" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )}

export default Navbar