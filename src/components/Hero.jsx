import React from 'react'
import raccoonGif from '../assets/pedroRacoon.gif';


const Hero = () => {
    return(
        <div className="flex flex-col justify-center items-center h-full px-4 text-center">
            <img src={raccoonGif} alt="My Animation" className="h-52 w-52 overflow-hidden rounded-full border-5 border-white object-cover" />
            <h1 className="text-5xl font-bold mb-4">Hey there! I'm Monica Nguyen</h1>
            <p className="text-xl max-w-2xl">I am a Software Enginner, Web Developer and a wanna be Mobile Developer</p>
            <button className='bg-gradient-to-r from-plum to-deepPurple text-beige hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>View My Work</button>
        </div>
    )
}

export default Hero