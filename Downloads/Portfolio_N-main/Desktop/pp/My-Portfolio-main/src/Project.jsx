import React, { useState, useEffect } from "react";

import feedbackImg from './Images/feedback.png'
import ServSyncImg from './Images/ServSync.png'
import veegoImg from './Images/veego.png'
import habbitImg from './Images/habbit.png'
import deliveryImg from './Images/delivery.png'
// import githubLogo from './Images/githublogo.png'
import projectPlaceholder from './Images/project_placeholder.png'
import salesImg from './Images/sales_management.png'
import todoImg from './Images/todo_app.png'
import libraryImg from './Images/library_management.png'
import rentalDesignImg from './Images/vehicle_rental_design.png'


const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const manualProjects = [
    {
      title: "Sales Management System (NLDB)",
      description:
        "A comprehensive Full-Stack Web & Mobile Application for the National Livestock Development Board. Features streamlined orders, real-time tracking, and intelligent insights to optimize sales operations.",
      image: salesImg,
      techStack: ["MERN Stack", "React Native", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/IrushaDilshan/sales-management-system",
      category: "Personal Project",
    },
    {
      title: "Todo App",
      description:
        "The Ultimate To-Do App to boost productivity and simplify life. Features a clean UI for managing tasks effectively.",
      image: todoImg,
      techStack: ["React Native", "TypeScript"],
      link: "https://github.com/IrushaDilshan/Todo-App",
      category: "Personal Project",
    },
    {
      title: "Library Management System",
      description:
        "LIBRA-SYS is a complete library management solution featuring a user-friendly dashboard for book search, user account management, and circulation tracking.",
      image: libraryImg,
      techStack: ["C#"],
      link: "https://github.com/IrushaDilshan/Library-management-System",
      category: "Personal Project",
    },
    {
      title: "Vehicle Rental App - UI/UX Design",
      description:
        "A modern and intuitive user interface design for a vehicle rental platform, created using Figma. Focuses on seamless user experience and clean aesthetics.",
      image: rentalDesignImg,
      techStack: ["Figma", "UI/UX", "Prototyping"],
      link: "https://github.com/IrushaDilshan/Vehicle-Rental-App-Design-Figma-",
      category: "University Project",
    },
    {
      title: "VeeGo - Vehicle Rental App",
      description:
        "VeeGo is a modern mobile application for vehicle rentals. Find, book, and rent bikes, cars, or vans instantly through your mobile device with an intuitive interface.",
      image: veegoImg,
      techStack: ["Kotlin", "Android Studio", "Material Design"],
      link: "https://github.com/IrushaDilshan/Vehicle-Rental-Android-App-VeeGo-",
      category: "University Project",
    },
    {
      title: "Habit Tracker App",
      description:
        "A comprehensive habit tracking application built with Kotlin. Helps users build better habits and track their daily progress with meaningful insights.",
      image: habbitImg,
      techStack: ["Kotlin", "Android SDK", "SQLite"],
      link: "https://github.com/IrushaDilshan/Habit-tracker-app",
      category: "University Project",
    },
    {
      title: "ServSync - Service Management",
      description:
        "ServSync is an innovative service management platform that streamlines business operations and enhances customer service delivery through modern technology.",
      image: ServSyncImg,
      techStack: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
      link: "https://github.com/IrushaDilshan",
      category: "University Project",
    },
    {
      title: "Delivery App Business Platform",
      description:
        "A comprehensive delivery business platform for end-to-end delivery operations, from order management to real-time tracking and customer notifications.",
      image: deliveryImg,
      techStack: ["JavaScript", "Business Logic", "API Integration"],
      link: "https://github.com/IrushaDilshan/Delivery-App",
      category: "Personal Project",
    },
    {
      title: "Customer Feedback Management",
      description:
        "This system empowers customers to provide feedback and raise service-related complaints, allowing management to monitor service quality and track issue resolution.",
      image: feedbackImg,
      techStack: ["JavaScript", "Web Technologies", "Database Management"],
      link: "https://github.com/IrushaDilshan/Customer-Complaints-Feedback-Management-",
      category: "University Project",
    },
  ];

  const [projects, setProjects] = useState(manualProjects);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/IrushaDilshan/repos?sort=pushed&direction=desc');
        const data = await response.json();

        if (Array.isArray(data)) {
          const manualLinks = new Set(manualProjects.map(p => p.link));
          const excludedRepos = new Set([
            'Portfolio_N', 'IrushaDilshan', 'irusha.github.io', 'Portfolio-N',
            'NM-ToDo-App', 'Todo-App', 'todo-app',
            'sales-management-system', 'Library-management-System', 'Vehicle-Rental-App-Design-Figma',
            'Vehicle_Rental_App_Design_Figma'
          ]);

          const githubProjects = data
            .filter(repo =>
              !manualLinks.has(repo.html_url) &&
              !repo.fork &&
              !excludedRepos.has(repo.name)
            )
            .map(repo => ({
              title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
              description: repo.description || "A project available on GitHub.",
              image: projectPlaceholder, // Use a default GitHub logo for auto-fetched projects
              techStack: repo.language ? [repo.language] : [],
              link: repo.html_url,
              category: "Personal Project", // Default fetched projects to Personal
            }));

          setProjects([...manualProjects, ...githubProjects]);
        }
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGithubProjects();
  }, []);

  const handleImageLoad = (title) => {
    setLoadedImages(prev => ({ ...prev, [title]: true }));
  };

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-white py-16 flex items-center"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Some of the work I&apos;ve done recently.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {["All", "Personal Project", "University Project"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.link || project.title} // Use link as key if available for uniqueness
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
                  className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${loadedImages[project.title] ? 'opacity-100' : 'opacity-0'
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


                {project.techStack && project.techStack.length > 0 && (
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
                  <div className="mt-auto flex justify-between items-center">
                    {/* Show category label slightly faded */}
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{project.category}</span>
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
