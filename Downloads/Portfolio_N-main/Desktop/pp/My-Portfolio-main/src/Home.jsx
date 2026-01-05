import React, { useEffect } from 'react'
import Image1 from './Images/image1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import CV from './CV/irusha cv.pdf'
import ProResume from './CV/Professional Modern CV Resume.pdf'

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
      className='h-[89vh] w-full  flex flex-row rounded-t-4xl max-md:flex-col max-md:justify-center items-center max-md:h-auto 
    max-md:pt-20 max-md:pb-20'
      data-aos="fade-up"
    >

      <div
        className='w-1/2 h-full  flex justify-center items-center max-md:pb-20'
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <img
          src={Image1}
          className='h-100  w-100 object-cover rounded-full max-xl:h-80 max-xl:w-80 border-gray-800 shadow-lg max-md:w-60 max-md:h-60'
        />
      </div>

      <div
        className='w-1/2 h-full flex flex-col justify-center max-md:w-full max-md:items-center lg:pl-15'
        data-aos="fade-left"
        data-aos-delay="250"
      >

        <div className='text-3xl font-medium mb-5 max-lg:text-3xl text-gray-800  w-[60%] max-md:text-center'>
          Hi, I'm
        </div>
        <div className='text-5xl font-bold mb-5 max-lg:text-4xl  w-[60%] max-md:text-center'>
          Irusha Dilshan
        </div>
        <div className='text-5xl mb-5 font-bold max-lg:text-4xl  w-[60%] max-md:text-center'>
          Full-Stack Developer
        </div>
        <div className='text-2xl max-lg:text-xl text-gray-700  w-[60%] max-md:text-center'>
          Mobile App Specialist | MERN Stack Developer<br /> Building Innovative Digital Solutions
        </div>

        <div className='mt-6 flex gap-3 max-md:flex-col max-md:w-[60%] max-md:items-center'>
          <a
            href={ProResume}
            download="Irusha_Dilshan_Professional_Resume.pdf"
            className='group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg shadow-gray-900/20 hover:from-black hover:to-gray-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
            aria-label='Download Professional Resume'
          >
            <span>Download Professional Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className='h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5'
            >
              <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1Z" />
              <path d="M5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5Z" />
            </svg>
          </a>

          <a
            href={CV}
            download="Irusha_Dilshan_Resume.pdf"
            className='group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-gray-900 border border-gray-300 bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'
            aria-label='Download Resume'
          >
            <span>Download Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className='h-4 w-4 text-gray-700 transition-transform duration-200 group-hover:translate-y-0.5'
            >
              <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1Z" />
              <path d="M5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5Z" />
            </svg>
          </a>
        </div>

      </div>


    </div>
  )
}

export default Home
