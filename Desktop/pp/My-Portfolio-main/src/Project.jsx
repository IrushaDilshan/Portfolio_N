import React, { useState } from "react";

import feedbackImg from './Images/feedback.png'
import ServSyncImg from './Images/ServSync.png'
import veegoImg from './Images/veego.png'
import habbitImg from './Images/habbit.png'
import deliveryImg from './Images/delivery.png'


const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (title) => {
    setLoadedImages(prev => ({ ...prev, [title]: true }));
  };
  const projects = [
    {
      title: "VeeGo - Vehicle Rental App",
      description:
        "VeeGo is a modern mobile application for vehicle rentals. Find, book, and rent bikes, cars, or vans instantly through your mobile device with an intuitive interface.",
      image: veegoImg,
      techStack: ["Kotlin", "Android Studio", "Material Design"],
      link: "https://github.com/IrushaDilshan/Vehicle-Rental-Android-App-VeeGo-", 
    },
    {
      title: "Habit Tracker App",
      description:
        "A comprehensive habit tracking application built with Kotlin. Helps users build better habits and track their daily progress with meaningful insights.",
      image: habbitImg,
      techStack: ["Kotlin", "Android SDK", "SQLite"],
      link: "https://github.com/IrushaDilshan/Habit-tracker-app", 
    },
    {
      title: "ServSync - Service Management",
      description:
        "ServSync is an innovative service management platform that streamlines business operations and enhances customer service delivery through modern technology.",
      image: ServSyncImg,
      techStack: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
      link: "https://github.com/IrushaDilshan", 
    },
    {
      title: "Delivery App Business Platform",
      description:
        "A comprehensive delivery business platform for end-to-end delivery operations, from order management to real-time tracking and customer notifications.",
      image: deliveryImg,
      techStack: ["JavaScript", "Business Logic", "API Integration"],
      link: "https://github.com/IrushaDilshan/Delivery-App", 
    },
    {
      title: "Customer Feedback Management",
      description:
        "This system empowers customers to provide feedback and raise service-related complaints, allowing management to monitor service quality and track issue resolution.",
      image: feedbackImg,
      techStack: ["JavaScript", "Web Technologies", "Database Management"],
      link: "https://github.com/IrushaDilshan/Customer-Complaints-Feedback-Management-", 
    },
    
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-white py-16 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
       
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Some of the work I&apos;ve done recently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
            
              <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                {!loadedImages[project.title] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                      <p className="mt-2 text-gray-500 text-sm">Loading...</p>
                    </div>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.title)}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages[project.title] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

             
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.link && (
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
