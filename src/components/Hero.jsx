import React from 'react'
import avatar from '../assets/avatarGithub.png';

const Hero = () => {
    return(
        <div className="bg-beige text-darkMaroon text-center py-16">
            <img src={avatar} alt="Monica profile pic" className="mx-auto mb-8 h-48 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
            <h1 className="text-4xl font-bold">
                Hey there! I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-wine to-plum'>Monica Nguyen</span>
            </h1>
            <p className="mt-4 text-lg text-deepPurple px-4 md:px-32">
                I'm a Software Enginner, Full-stack developer and a wanna be Mobile Developer.
            </p>
            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-plum to-deepPurple text-beige hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>View My Work
                </button>
            </div>
        </div>
    )
}

export default Hero