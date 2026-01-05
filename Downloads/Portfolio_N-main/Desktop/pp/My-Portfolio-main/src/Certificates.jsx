import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aimlCert from "./Images/aiml_certificate.png";
import powerBiCert from "./Images/powerbi_certificate.png";
import pythonCert from "./Images/python_certificate.png";

const Certificates = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const certificates = [
        {
            title: "AI/ML Engineer - Stage 1",
            issuer: "SLIIT",
            date: "Issued Dec 2025",
            link: "https://www.linkedin.com/in/irusha-dilshan-a15645354/details/certifications/",
            image: aimlCert,
        },
        {
            title: "Diploma in Microsoft Power BI for Beginners",
            issuer: "Alison",
            date: "Issued Dec 2025",
            link: "https://www.linkedin.com/in/irusha-dilshan-a15645354/details/certifications/",
            image: powerBiCert,
        },
        {
            title: "Programming in Python - 1. Python for Beginners",
            issuer: "University of Moratuwa",
            date: "Issued Dec 2025",
            link: "https://www.linkedin.com/in/irusha-dilshan-a15645354/details/certifications/",
            image: pythonCert,
        },
    ];

    return (
        <section
            id="certificates"
            className="w-full min-h-screen bg-gray-50 py-20 flex items-center relative overflow-hidden"
        >
            {/* Background elements for modern feel */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-10 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="mb-16 text-center" data-aos="fade-down">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight mb-4">
                        Certificates & Licenses
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional milestones and technical validations marking my journey in tech.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Certificate Image Area with Overlay */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-300" />

                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <span className="text-gray-400">No Image</span>
                                    </div>
                                )}

                                {/* Floating Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex flex-col flex-1 relative bg-white">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-blue-500 mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {cert.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {cert.title}
                                    </h3>

                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-700 hover:text-white rounded-xl transition-all duration-300 font-semibold group/button"
                                    >
                                        <span>View Credential</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 transform group-hover/button:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.linkedin.com/in/irusha-dilshan-a15645354/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:text-blue-600 hover:shadow-lg hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                        <span>View All Certifications on LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
