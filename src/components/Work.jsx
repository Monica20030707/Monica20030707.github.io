import React from "react";

const projects = [
    {
        id:1,
        title: "Stock tracking Dashboard",
        description: "Used JPMorgan Chase’s open-source library, Perspective, to build a live graph that tracks stock ratios, highlights historical correlations, and provides real-time updates with threshold alerts, offering traders a clear and visually engaging monitoring tool."
    },
    {
        id:2,
        title: "Traffic Violation Tracker",
        description: "Developed a traffic violation detection system using AWS S3 for storing license plate images with metadata, integrating California DMV data to identify vehicles, classify violations, and send automated email notices with ticket details."
    },
    {
        id:3,
        title: "Stock tracking Dashboard",
        description: "Used JPMorgan Chase’s open-source library, Perspective, to build a live graph that tracks stock ratios, highlights historical correlations, and provides real-time updates with threshold alerts, offering traders a clear and visually engaging monitoring tool."
    },
]

const Work = () => {
    return(
        <div className='bg-wine text-beige py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-montserrat font-bold text-left mb-12'>Selected Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                </div>
            </div>
        </div>
    );
};

export default Work;