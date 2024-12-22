import React from "react";
import tradingDashboard from '../assets/stockDashboard.png';
import licenseReader from '../assets/license-plate-reader.jpg';
import handwritten from '../assets/MLdata.png';

const projects = [
    {
        id:1,
        name: "Stock tracking Dashboard",
        technologies: "Python, Typescript",
        image: tradingDashboard,
        description: "Used JPMorgan Chase’s open-source library, Perspective, to build a live graph that tracks stock ratios, highlights historical correlations, and provides real-time updates with threshold alerts, offering traders a clear and visually engaging monitoring tool.",
        github: "https://github.com/Monica20030707/tradingDashboard-UI"
    },
    {
        id:2,
        name: "Traffic Violation Tracker",
        technologies: "AWS S3, AWS EventBridge, AWS Lambda, AWS Rekcognition",
        image: licenseReader,
        description: "Developed a traffic violation detection system using AWS S3 for storing license plate images with metadata, integrating California DMV data to identify vehicles, classify violations, and send automated email notices with ticket details.",
        github: "https://github.com/Monica20030707/AWS_rekonigition-N-read-database"
    },
    {
        id:3,
        name: "Read Handwritten Dataset",
        technologies: "Python - Machine Learning",
        image: handwritten,
        description: "Built an Artificial Neural Network (ANN) from scratch using Backpropagation to classify handwritten digits (0-9).",
        github: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML"
    },
    {
        id:4,
        name: "Read Handwritten Dataset",
        technologies: "Python - Machine Learning",
        image: handwritten,
        description: "Built an Artificial Neural Network (ANN) from scratch using Backpropagation to classify handwritten digits (0-9).",
        github: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML"
    }
]

const Work = () => {
    return(
        <div className='bg-wine text-beige py-20' id='work'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-montserrat font-bold text-left mb-12'>Selected Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(projects => (
                        <div key = {projects.id}
                        className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                                {projects.id}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-green-400 to-blue-500">
                                {projects.title}
                            </h3>
                            <p className="mt-2 text-gray-300"> {projects.description} </p>
                            <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;