import React, { useEffect } from "react";
import Image2 from "./Images/image2.jpg";

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
    <div id="aboutMe"
      className="h-[100vh] w-full  flex flex-row  rounded-t-4xl max-md:flex-col max-md:justify-center items-center max-md:h-auto 
        max-md:pt-20 max-md:pb-20 lg:pr-10 lg:pl-10 "
    >
      <div
        className="w-1/2 h-full flex flex-col justify-center items-center max-md:w-full "
        data-aos="fade-right "
      >
        <div className=" w-[60%] text-4xl mb-10 font-bold max-lg:text-3xl">
          AboutMe
        </div>

        <div
          className=" w-[60%] text-2xl mb-5 font-medium"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Hi, I'm Irusha Dilshan.
        </div>

        <div
          className=" w-[60%] lg:text-[16px] text-gray-800 font-normal max-md:text-[12px] max-lg:text-[15px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I'm a passionate Full-Stack Developer and Mobile App Specialist currently studying at SLIIT. I specialize in building innovative mobile applications with Kotlin and Android Studio, and I'm actively expanding my expertise in the MERN Stack for full-stack web development.

          <br /><br />

          I've worked on exciting projects like VeeGo (Vehicle Rental App), Habit Tracker, and ServSync. I love creating user-friendly mobile interfaces and solving real-world problems through technology. My interests include Cars 🚗, Traveling 🌍, and Photography 📷.
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-center items-center max-md:mt-20">
        <img
          src={Image2}
          className="h-100 w-100 object-cover rounded-3xl max-xl:h-80 max-xl:w-80 border-2 border-gray-300 shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;
