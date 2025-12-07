import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HtmlLogo from "../src/Images/htmllogo.png";
import CssLogo from "../src/Images/csslogo.png";
import JS from "../src/Images/jslogo.png";
import Figma from "../src/Images/figmalogo.png";
import ReactLogo from "../src/Images/reactlogo.png";
import NodeJS from "../src/Images/node.png";
import MongoDB from "../src/Images/mongodb.svg";
import C from "../src/Images/clogo.png";
import Cplus from "../src/Images/cpplogo.png";
import Java from "../src/Images/java2-removebg-preview.png";
import Git from "../src/Images/gitlogo.png";
import Github from "../src/Images/gitHub.svg";

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: HtmlLogo },
    { name: "CSS", icon: CssLogo },
    { name: "JS", icon: JS },
    { name: "FIGMA", icon: Figma },
    { name: "REACT", icon: ReactLogo },
    { name: "NodeJS", icon: NodeJS },
    { name: "MongoDB", icon: MongoDB },
    { name: "C", icon: C },
    { name: "C++", icon: Cplus },
    { name: "Java", icon: Java },
    { name: "Git", icon: Git },
    { name: "Github", icon: Github },
  ];

  return (
    <section 
      id="skills"
      className="w-full min-h-screen  flex items-center pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
       
        <div className="mb-10 text-center" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Technologies I&apos;ve worked with recently
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
              data-aos="zoom-in"
              data-aos-delay={index * 100} 
            >
              <div className="h-20 w-20 mb-4 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
