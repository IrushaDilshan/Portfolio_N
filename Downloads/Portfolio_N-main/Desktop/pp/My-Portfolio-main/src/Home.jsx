import React, { useEffect } from 'react'
import Image1 from './Images/irusha_user_upload.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from './CV/Irusha-Resume.pdf'
import MatrixBackground from './MatrixBackground';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Downloads are handled via <a download> links below for better semantics

  return (
    <div id='home'
      className='relative overflow-hidden h-[89vh] w-full flex flex-row rounded-t-4xl max-md:flex-col max-md:overflow-hidden items-center max-md:h-auto 
    max-md:pt-24 max-md:pb-0'
      data-aos="fade-up"
    >
      <MatrixBackground />

      <div
        className='relative z-10 w-1/2 h-full flex flex-col justify-center items-center px-10 max-md:px-4 max-md:w-full max-md:min-h-[50vh]'
        data-aos="fade-right"
        data-aos-delay="250"
      >

        <div className='text-3xl font-medium mb-5 max-lg:text-3xl text-gray-800  w-full text-center'>
          Hi, I'm
        </div>
        <div className='text-6xl font-bold mb-5 max-lg:text-4xl text-gray-900 w-full text-center leading-tight'>
          Irusha Dilshan
        </div>
        <div className='text-5xl mb-6 font-bold max-lg:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent w-full text-center'>
          Full-Stack Developer
        </div>
        <div className='text-xl text-gray-600 w-[90%] text-center mx-auto'>
          Mobile App Specialist | MERN Stack Developer<br /> Building Innovative Digital Solutions
        </div>

        <div className='mt-8 flex gap-4 justified-center w-full justify-center max-md:flex-col max-md:w-[80%] max-md:items-center'>
          <a
            href={Resume}
            download="Irusha_Resume.pdf"
            className='group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white bg-gray-900 shadow-lg hover:bg-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
            aria-label='Download Resume'
          >
            <span>Download Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className='h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5'
            >
              <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1Z" />
              <path d="M5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5Z" />
            </svg>
          </a>
        </div>

      </div>

      <div
        className='relative z-10 w-1/2 h-full flex justify-end items-end max-md:w-full max-md:justify-center max-md:items-end'
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <img
          src={Image1}
          alt="Irusha Dilshan pointer-events-none"
          className='w-auto h-[95%] max-h-[850px] object-contain max-md:w-[95%] max-md:h-auto hover:brightness-105 transition-all duration-500'
        />
      </div>


    </div>
  )
}

export default Home
