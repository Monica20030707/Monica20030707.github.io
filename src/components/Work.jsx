import React from "react";
import tradingDashboard from '../assets/stockDashboard.png';
import licenseReader from '../assets/license-plate-reader.jpg';
import handwritten from '../assets/MLdata.png';
import docConverter from '../assets/doc2pdf.png';

const projects = [
    {
        id:1,
        name: "Stock tracking Dashboard",
        technologies: "Python, Typescript",
        image: tradingDashboard,
        description: "Used JPMorgan Chase’s open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",
        github: "https://github.com/Monica20030707/tradingDashboard-UI"
    },
    {
        id:2,
        name: "Traffic Violation Tracker",
        technologies: "AWS Services",
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
        name: "Docx Converter (Ongoing)",
        technologies: "Python",
        image: docConverter,
        description: "A converter that automatically transforms DOCX files into PDF and update the README files upon upload to GitHub.",
        github: "https://github.com/Monica20030707/Docx2PdfConverter"
    }
]

const Work = () => {
    return (
        <div className="bg-wine text-beige py-20" id="work">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-montserrat font-bold text-left mb-12">Selected Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />

                            {/* Project Name and Technologies */}
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                {project.name}
                            </h3>
                            <h4 className="text-gray-400 mb-4">{project.technologies}</h4>
                            
                            {/* Project Description */}
                            <p className="mt-2 text-gray-300">{project.description}</p>
                            
                            {/* GitHub Button */}
                            <div className="mt-4">
                                <a
                                    href={project.github}
                                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full w-max"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;