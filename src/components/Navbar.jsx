import React from "react"

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 bg-transparent backdrop-blur-sm flex items-center justify-between px-8 py-4 z-10">
            <div>
                <div className="text-2xl font-bold"><a href="#home">Monica Nguyen</a></div>
                <ul className="flex space-x-6 text-lg">
                    <li className="hover:text-gray-300 cursor-pointer"><a href="#work">Works</a></li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contacts</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar