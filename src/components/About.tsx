import React from 'react'
import raccoonGif from '../assets/pedroRacoon.gif';

const About = () => {
    return(
        <div className='bg-deepPurple text-beige py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-montserrat font-bold text-left mb-12'>About Me</h2>
                <div className='flex md:flex-row items-center md:space-x-12'>
                    <img src={raccoonGif} alt="Pedro Pedro dance" className=" mx-auto mb-8 h-64 w-64 
                    overflow-hidden rounded-full border-5 border-white object-cover flex-shrink-0 md:mr-8" />
                    <div className='flex-1'>
                        <p className=' font-montserrat text-lg mb-8'>
                        I’m a Software Engineering student deeply passionate about Machine Learning and 
                        Data Analytics. I love the challenge of turning raw data into meaningful insights 
                        that people can understand and use. One of my favorite projects was creating 
                        real-time stock graphs for a fintech app, making complex financial data simple 
                        and interactive. <br /><br />

                        While my studies have built a strong foundation in software development, I’m 
                        currently exploring full-stack web and mobile development because I enjoy building 
                        tools that save time and make life easier. I believe technology should empower 
                        people to focus on what truly matters.<br /><br />

                        I’m driven by curiosity and a love for learning, whether it’s diving into new 
                        machine learning concepts or crafting user-friendly apps. For me, it’s all about 
                        creating solutions that are both impactful and meaningful.
                        </p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default About