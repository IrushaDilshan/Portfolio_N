import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import aimlCert from "./Images/aiml_certificate.png";
import powerBiCert from "./Images/powerbi_certificate.png";
import pythonCert from "./Images/python_certificate.png";

const Certificates = () => {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const swiperRef = React.useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
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
            className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 flex flex-col justify-center overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="mb-16 text-center" data-aos="fade-down">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Certificates & Licenses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Validating my expertise through professional certifications.
                    </p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="w-full relative">
                    {/* Custom Navigation Arrows with Modern Animations */}
                    <button
                        ref={setPrevEl}
                        className="nav-arrow nav-arrow-prev absolute left-0 top-1/2 z-50 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-white via-white to-blue-50 backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center text-blue-600 transition-all duration-500 group focus:outline-none cursor-pointer border-2 border-white/60 overflow-hidden hover:scale-110 hover:rotate-[-5deg] hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95"
                        aria-label="Previous Slide"
                    >
                        {/* Ripple Effect Background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                        {/* Animated Ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-blue-400 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>

                        {/* Glow Effect */}
                        <span className="absolute inset-0 rounded-full blur-xl bg-blue-500/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-7 h-7 md:w-10 md:h-10 relative z-10 transform group-hover:-translate-x-2 group-hover:scale-110 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-lg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        ref={setNextEl}
                        className="nav-arrow nav-arrow-next absolute right-0 top-1/2 z-50 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-white via-white to-purple-50 backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center text-purple-600 transition-all duration-500 group focus:outline-none cursor-pointer border-2 border-white/60 overflow-hidden hover:scale-110 hover:rotate-[5deg] hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95"
                        aria-label="Next Slide"
                    >
                        {/* Ripple Effect Background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                        {/* Animated Ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-purple-400 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>

                        {/* Glow Effect */}
                        <span className="absolute inset-0 rounded-full blur-xl bg-purple-500/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-7 h-7 md:w-10 md:h-10 relative z-10 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-lg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        slidesPerGroup={1}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 200,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        speed={800}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        loop={true}
                        loopedSlides={4}
                        loopAdditionalSlides={4}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="w-full py-12 px-4"
                    >
                        {[...certificates, ...certificates, ...certificates, ...certificates].map((cert, index) => (
                            <SwiperSlide key={index} className="!w-[320px] sm:!w-[380px]">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full cursor-pointer"
                                >
                                    <div className="certificate-card bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 h-full flex flex-col transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-300/50">
                                        <div className="relative h-60 overflow-hidden group">
                                            {cert.image ? (
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-gray-400">No Preview</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                                <span className="inline-block px-4 py-2 bg-white/25 backdrop-blur-lg text-white text-xs font-bold rounded-full border border-white/40 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                                    ✓ Verified Credential
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="mb-3 flex items-center justify-between">
                                                <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
                                                    {cert.issuer}
                                                </span>
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {cert.date.replace("Issued ", "")}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <div className="mt-auto pt-4">
                                                <span className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-purple-600 transition-all duration-300 group/link">
                                                    Show Credential
                                                    <svg className="w-4 h-4 ml-1 transition-all transform group-hover/link:translate-x-2 group-hover/link:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.linkedin.com/in/irusha-dilshan-a15645354/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-black hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/40 active:scale-95"
                    >
                        <span className="mr-3">View Full Profile on LinkedIn</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Custom Styles for Enhanced Animations */}
            <style jsx>{`
                /* Swiper Pagination Styling */
                .swiper-pagination-bullet {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    opacity: 0.4;
                    transition: all 0.3s ease;
                    width: 10px;
                    height: 10px;
                }
                .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    opacity: 1;
                    width: 28px;
                    border-radius: 5px;
                    box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
                }

                /* Navigation Arrow Pulse Animation (when idle) */
                @keyframes pulse-arrow {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(99, 102, 241, 0.4);
                    }
                    50% {
                        transform: scale(1.05);
                        box-shadow: 0 20px 30px -5px rgba(0, 0, 0, 0.2), 0 0 0 10px rgba(99, 102, 241, 0);
                    }
                }

                .nav-arrow {
                    animation: pulse-arrow 3s ease-in-out infinite;
                }

                .nav-arrow:hover {
                    animation: none;
                }

                /* Card Entrance Animation */
                @keyframes card-entrance {
                    0% {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .certificate-card {
                    animation: card-entrance 0.6s ease-out backwards;
                }

                /* Stagger animation for cards */
                .swiper-slide:nth-child(1) .certificate-card {
                    animation-delay: 0.1s;
                }
                .swiper-slide:nth-child(2) .certificate-card {
                    animation-delay: 0.2s;
                }
                .swiper-slide:nth-child(3) .certificate-card {
                    animation-delay: 0.3s;
                }
                .swiper-slide:nth-child(4) .certificate-card {
                    animation-delay: 0.4s;
                }

                /* Shimmer effect on card hover */
                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                .certificate-card:hover::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.3),
                        transparent
                    );
                    background-size: 1000px 100%;
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                    z-index: 1;
                }

                /* Smooth slide transitions */
                .swiper-slide {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .swiper-slide-active {
                    z-index: 10;
                }

                /* Arrow Icon Bounce */
                @keyframes bounce-horizontal {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(5px);
                    }
                }

                .nav-arrow-next svg {
                    animation: bounce-horizontal 2s ease-in-out infinite;
                }

                .nav-arrow-prev svg {
                    animation: bounce-horizontal 2s ease-in-out infinite;
                    animation-direction: reverse;
                }

                .nav-arrow:hover svg {
                    animation: none;
                }

                /* Ensure arrows are always clickable */
                .nav-arrow {
                    z-index: 50 !important;
                    pointer-events: auto !important;
                }

                /* Prevent swiper from blocking arrow clicks */
                .swiper {
                    overflow: visible !important;
                }

            `}</style>
        </section>
    );
};

export default Certificates;
