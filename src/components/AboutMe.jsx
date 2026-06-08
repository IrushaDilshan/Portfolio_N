import React, { useEffect } from "react";
import Image2 from "../assets/images/user_uploaded_profile.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section id="aboutMe" className="relative w-full min-h-screen bg-white flex flex-col justify-center py-20 lg:py-0 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full relative z-10">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-16 lg:mb-0" data-aos="fade-right">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">About Me</h2>
          
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Irusha Dilshan</span>.
          </h3>

          <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
            <p>
              I’m a passionate <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">Full-Stack Developer</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Mobile App Specialist</span> currently studying at SLIIT. I specialize in building modern, user-friendly mobile applications using Kotlin, Android Studio, and React Native, and I’m actively expanding my expertise in the MERN Stack for full-stack web development.
            </p>
            <p>
              I’ve worked on projects such as VeeGo (Vehicle Rental App), Habit Tracker, and ServSync (Smart Appointment & Queue Management System for NITF), focusing on clean UI, smooth user experiences, and solving real-world problems through technology. Currently, I’m working on a Sales Management System (Full-Stack Web & Mobile Application) for the National Livestock Development Board (NLDB), where I’m involved in building scalable and efficient solutions.
            </p>
            <p>
              I enjoy creating scalable applications and continuously improving my skills across both mobile and web platforms.
            </p>
          </div>

          {/* Interactive Badges */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">When I'm not coding, you can find me:</h4>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-gray-700 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200 hover:shadow-md cursor-default">
                <span className="text-xl">🚗</span> Exploring Cars
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-gray-700 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:shadow-md cursor-default">
                <span className="text-xl">🌍</span> Traveling
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-gray-700 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 hover:shadow-md cursor-default">
                <span className="text-xl">📷</span> Photography
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative" data-aos="fade-left" data-aos-delay="200">
          <div className="relative group w-72 h-72 sm:w-96 sm:h-96 mt-10 lg:mt-0">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
            
            {/* Floating Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white animate-float">
              <img
                src={Image2}
                alt="Irusha Dilshan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-70 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:12px_12px] opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Call to Action - Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer hidden md:flex" 
           onClick={() => {
              const projectsSection = document.getElementById('projects') || document.getElementById('skills');
              if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
           }}>
        <span className="text-sm font-semibold text-gray-400 mb-2 tracking-wide uppercase">See my work</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Custom Styles for Keyframe Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
