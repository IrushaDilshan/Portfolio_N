import React, { useEffect } from 'react'
import Image1 from './Images/image1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import CV from './CV/irusha cv.pdf'

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,         
      easing: "ease-out-cubic",
      once: true,             
    });
  }, []);

  function downloadCV(){

    const link = document.createElement("a");
    link.href = CV;
    link.download = "Irusha_Dilshan_Resume.pdf";
    link.click();

  }

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
              Mobile App Specialist | MERN Stack Developer<br/> Building Innovative Digital Solutions
            </div>

            <button onClick={downloadCV} className='bg-black text-white w-40 h-10 mt-5 rounded-xl cursor-pointer font-bold'>Download Resume</button>

        </div>
        

    </div>
  )
}

export default Home
