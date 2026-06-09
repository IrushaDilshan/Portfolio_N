import React, { useState, useEffect, useCallback } from "react";

import feedbackImg from '../assets/images/feedback.png'
import ServSyncImg from '../assets/images/ServSync.png'
import veegoImg from '../assets/images/veego.png'
import habbitImg from '../assets/images/habbit.png'
import deliveryImg from '../assets/images/delivery.png'
import projectPlaceholder from '../assets/images/project_placeholder.png'
import salesImg from '../assets/images/sales_management.png'
import todoImg from '../assets/images/todo_app.png'
import libraryImg from '../assets/images/library_management.png'
import rentalDesignImg from '../assets/images/vehicle_rental_design.png'

// ─── GlowCard ────────────────────────────────────────────────────────────────
const GlowCard = ({ children, className, onClick }) => {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPos({ x: -999, y: -999 }); }}
      style={{
        backgroundImage: hovered
          ? `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.18), rgba(168,85,247,0.09) 55%, transparent 80%)`
          : 'none',
        borderColor: hovered ? 'rgba(99,102,241,0.55)' : undefined,
        transition: 'border-color 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

// ─── Helper: extract YouTube video ID from any YouTube URL ───────────────────
const getYouTubeId = (url) => {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([\w-]+)/,
    /youtube\.com\/watch\?v=([\w-]+)/,
    /youtube\.com\/embed\/([\w-]+)/,
    /youtube\.com\/shorts\/([\w-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
};

// ─── Project Modal ────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [openChallenge, setOpenChallenge] = useState(null);
  const [showDemo, setShowDemo] = useState(false);

  const youtubeId = getYouTubeId(project.demoLink);
  const isLinkedIn = project.demoLink?.includes('linkedin.com');
  const hasDemo = !!project.demoLink;

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const screenshots = project.screenshots || [project.image];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-4xl sm:mx-4 max-h-[95vh] sm:max-h-[92vh] flex flex-col overflow-hidden
                   rounded-t-3xl sm:rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalIn 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
      >

        {/* ══ HERO ZONE ══ */}
        <div className="relative flex-shrink-0 h-64 sm:h-80 overflow-hidden bg-gray-950">
          {/* Blurred ambient background */}
          <img
            src={screenshots[activeScreenshot]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top scale-110 blur-xl opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-transparent to-purple-950/40" />

          {/* Sharp screenshot */}
          <div className="absolute inset-x-0 top-4 bottom-10 flex items-center justify-center">
            <div className="relative h-full max-w-md sm:max-w-lg mx-auto px-6">
              <img
                src={screenshots[activeScreenshot]}
                alt={project.title}
                className="h-full w-full object-cover object-top rounded-xl shadow-2xl ring-1 ring-white/10 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Screenshot thumbnails */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`w-10 h-7 rounded-md overflow-hidden border transition-all duration-200 ${
                    i === activeScreenshot
                      ? 'border-white scale-110 shadow-lg'
                      : 'border-white/30 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={s} className="w-full h-full object-cover object-top" alt="" />
                </button>
              ))}
            </div>
          )}

          {/* Top bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title — hero, no demo button here anymore */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 z-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-lg">
              {project.title}
            </h2>
          </div>
        </div>

        {/* ══ CONTENT ZONE ══ */}
        <div className="flex-1 overflow-y-auto bg-white">

          {/* Action strip — GitHub + Demo buttons side by side */}
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50 flex-wrap">
            <p className="text-sm text-gray-500 hidden sm:block flex-1 min-w-0 truncate">
              View source code and full documentation.
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Demo button — LinkedIn or YouTube */}
              {hasDemo && (
                isLinkedIn || !youtubeId ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                               bg-[#0A66C2] text-white text-sm font-bold
                               hover:bg-[#004182] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {/* LinkedIn icon */}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Watch Demo
                  </a>
                ) : (
                  <button
                    onClick={() => setShowDemo(v => !v)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                               bg-red-600 text-white text-sm font-bold
                               hover:bg-red-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {showDemo ? 'Hide Demo' : 'Watch Demo'}
                  </button>
                )
              )}
              {/* GitHub button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                             bg-gray-900 text-white text-sm font-bold
                             hover:bg-black transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          </div>

          {/* ── YouTube inline player ── */}
          {showDemo && youtubeId && (
            <div className="w-full bg-black" style={{ animation: 'modalIn 0.3s ease both' }}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="Project Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-8">

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">🛠️</span>
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => {
                    const colors = [
                      'bg-blue-50 text-blue-700 border-blue-200',
                      'bg-purple-50 text-purple-700 border-purple-200',
                      'bg-emerald-50 text-emerald-700 border-emerald-200',
                      'bg-amber-50 text-amber-700 border-amber-200',
                      'bg-rose-50 text-rose-700 border-rose-200',
                      'bg-cyan-50 text-cyan-700 border-cyan-200',
                    ];
                    return (
                      <span key={tech} className={`text-xs font-bold px-3 py-1.5 rounded-full border ${colors[i % colors.length]}`}>
                        {tech}
                      </span>
                    );
                  })}
                </div>
                {project.techDetails && (
                  <p className="text-sm text-gray-500 leading-relaxed">{project.techDetails}</p>
                )}
              </div>
            )}

            {/* Challenges & Solutions accordion */}
            {project.challenges?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">⚡</span>
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">Challenges &amp; Solutions</h3>
                </div>
                <div className="space-y-3">
                  {project.challenges.map((item, i) => (
                    <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300">
                      <button
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-gray-50 to-white hover:from-indigo-50/50 hover:to-white transition-colors duration-200 text-left"
                        onClick={() => setOpenChallenge(openChallenge === i ? null : i)}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-extrabold">
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-gray-800 line-clamp-1">
                            {item.challenge.split(' ').slice(0, 8).join(' ')}…
                          </span>
                        </div>
                        <svg
                          className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${openChallenge === i ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {openChallenge === i && (
                        <div className="border-t border-gray-100">
                          <div className="px-5 py-4 bg-red-50/60 border-b border-red-100/80">
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 text-base mt-0.5">⚠️</span>
                              <div>
                                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">Challenge</p>
                                <p className="text-sm text-gray-700 leading-relaxed">{item.challenge}</p>
                              </div>
                            </div>
                          </div>
                          <div className="px-5 py-4 bg-emerald-50/60">
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 text-base mt-0.5">✅</span>
                              <div>
                                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">Solution</p>
                                <p className="text-sm text-gray-700 leading-relaxed">{item.solution}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="h-6" />
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ─── Main Projects Component ──────────────────────────────────────────────────
const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const manualProjects = [
    {
      title: "Sales Management System (NLDB)",
      description:
        "A comprehensive Full-Stack Web & Mobile Application for the National Livestock Development Board. Features streamlined orders, real-time tracking, and intelligent insights to optimize sales operations.",
      longDescription:
        "Developed for the National Livestock Development Board (NLDB), this system handles the full sales lifecycle — from order creation to delivery tracking. The web dashboard (React + Node.js) provides managers with real-time analytics, while the React Native mobile app allows field agents to update orders on the go. The backend uses a RESTful API architecture with MongoDB for flexible data modeling.",
      image: salesImg,
      screenshots: [salesImg],
      techStack: ["MERN Stack", "React Native", "TypeScript", "Tailwind CSS"],
      techDetails:
        "Built with React (frontend), Node.js + Express (API), MongoDB (database), and React Native for the mobile client. TypeScript was used across both web and mobile codebases for type safety. Tailwind CSS powers the responsive dashboard UI.",
      link: "https://github.com/IrushaDilshan/sales-management-system",
      demoLink: "https://www.linkedin.com/posts/irusha-dilshan-a15645354_softwareengineering-reactjs-reactnative-activity-7425826077916327936-okDE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhfM3EBmWbFICguU9fjMZEDskMQLGHu9dc",
      category: "Personal Project",

      challenges: [
        {
          challenge: "Keeping the mobile app and web dashboard in sync in real time without overcomplicating the architecture.",
          solution: "Implemented polling with optimistic UI updates on the mobile side, and used MongoDB change streams on the backend to push updates to the web dashboard via WebSockets."
        },
        {
          challenge: "Designing a flexible data model for products with varying attributes (livestock types, weights, grades).",
          solution: "Used MongoDB's document model with a dynamic `attributes` sub-document, allowing each product type to define its own schema without rigid table structures."
        }
      ]
    },
    {
      title: "Todo App",
      description:
        "The Ultimate To-Do App to boost productivity and simplify life. Features a clean UI for managing tasks effectively.",
      longDescription:
        "A feature-rich cross-platform to-do application built with React Native and TypeScript. Users can create, categorize, prioritize, and complete tasks with a smooth and intuitive interface. Supports offline data persistence via AsyncStorage.",
      image: todoImg,
      screenshots: [todoImg],
      techStack: ["React Native", "TypeScript"],
      techDetails:
        "Built with React Native for cross-platform support (iOS & Android). TypeScript ensures type-safe component props and state. AsyncStorage handles local data persistence with no backend dependency.",
      link: "https://github.com/IrushaDilshan/Todo-App",
      demoLink: "https://www.linkedin.com/posts/irusha-dilshan-a15645354_reactnative-expo-typescript-activity-7406415844383182848-7k45?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhfM3EBmWbFICguU9fjMZEDskMQLGHu9dc",
      category: "Personal Project",
      challenges: [
        {
          challenge: "Persisting task data reliably without a backend while supporting app restarts.",
          solution: "Used React Native AsyncStorage with a custom hook that serializes/deserializes task arrays to JSON on every state change."
        }
      ]
    },
    {
      title: "Library Management System",
      description:
        "LIBRA-SYS is a complete library management solution featuring a user-friendly dashboard for book search, user account management, and circulation tracking.",
      longDescription:
        "LIBRA-SYS is a Windows desktop application built in C# with a SQL Server backend. It enables library staff to manage the complete book lifecycle — cataloging, member registration, issuing, returning, and fine calculation — through a clean WinForms interface.",
      image: libraryImg,
      screenshots: [libraryImg],
      techStack: ["C#", "WinForms", "SQL Server"],
      techDetails:
        "Built with C# WinForms for the desktop UI and SQL Server for data storage. ADO.NET is used for database connectivity with parameterized queries to prevent SQL injection.",
      link: "https://github.com/IrushaDilshan/Library-management-System",
      demoLink: null, // 👉 Add your LinkedIn video URL here
      category: "Personal Project",

      challenges: [
        {
          challenge: "Handling fine calculations for overdue books with varying return dates and rule sets.",
          solution: "Created a FineCalculator service class with configurable rules, making it easy to update fine rates without touching the UI layer."
        }
      ]
    },
    {
      title: "Vehicle Rental App - UI/UX Design",
      description:
        "A modern and intuitive user interface design for a vehicle rental platform, created using Figma. Focuses on seamless user experience and clean aesthetics.",
      longDescription:
        "A complete UI/UX design system for a vehicle rental mobile app, created entirely in Figma. Includes user flows, wireframes, high-fidelity mockups, and an interactive prototype covering the full booking journey from browsing vehicles to payment confirmation.",
      image: rentalDesignImg,
      screenshots: [rentalDesignImg],
      techStack: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      techDetails:
        "Designed using Figma with a custom component library (design system) for consistent spacing, typography, and color tokens. Interactive prototype demonstrates the full user journey with realistic transitions.",
      link: "https://github.com/IrushaDilshan/Vehicle-Rental-App-Design-Figma-",
      demoLink: "https://www.linkedin.com/posts/irusha-dilshan-a15645354_uiux-uiuxdesign-uidesign-activity-7402312931109167104-oKjb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhfM3EBmWbFICguU9fjMZEDskMQLGHu9dc",
      category: "University Project",
      challenges: [
        {
          challenge: "Designing a booking flow that handles complex vehicle availability and date selection without overwhelming the user.",
          solution: "Simplified the flow into a 3-step process (Search → Select → Confirm) with a persistent summary bar that keeps users oriented throughout."
        }
      ]
    },
    {
      title: "VeeGo - Vehicle Rental App",
      description:
        "VeeGo is a modern mobile application for vehicle rentals. Find, book, and rent bikes, cars, or vans instantly through your mobile device with an intuitive interface.",
      longDescription:
        "VeeGo is a Kotlin-based Android application that brings vehicle rental to your fingertips. Users can browse available vehicles by category, view details and pricing, make bookings, and manage their rental history. Built following Material Design 3 guidelines for a premium feel.",
      image: veegoImg,
      screenshots: [veegoImg],
      techStack: ["Kotlin", "Android Studio", "Material Design 3", "Room DB"],
      techDetails:
        "Developed in Kotlin with Android Studio. Uses Room Database for local storage, Retrofit for network calls, and ViewModel + LiveData for MVVM architecture. Material Design 3 components ensure a polished, consistent UI.",
      link: "https://github.com/IrushaDilshan/Vehicle-Rental-Android-App-VeeGo-",
      demoLink: "https://www.linkedin.com/posts/irusha-dilshan-a15645354_androiddevelopment-mobileappdevelopment-uiuxdesign-activity-7403109677074673665-Xbgn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhfM3EBmWbFICguU9fjMZEDskMQLGHu9dc",
      category: "University Project",
      challenges: [
        {
          challenge: "Managing complex booking state across multiple screens without losing data on configuration changes (screen rotation).",
          solution: "Adopted the MVVM pattern with ViewModel to survive configuration changes and SharedFlow for one-time UI events like navigation."
        },
        {
          challenge: "Displaying vehicle availability in real time with a smooth calendar UI.",
          solution: "Built a custom RecyclerView-based calendar picker that marks unavailable dates from a local dataset, with smooth animations for month transitions."
        }
      ]
    },
    {
      title: "Habit Tracker App",
      description:
        "A comprehensive habit tracking application built with Kotlin. Helps users build better habits and track their daily progress with meaningful insights.",
      longDescription:
        "A Kotlin Android app designed to help users build and maintain positive habits. Features daily check-ins, streak tracking, progress graphs, and notification reminders. All data is stored locally using SQLite, ensuring full offline functionality.",
      image: habbitImg,
      screenshots: [habbitImg],
      techStack: ["Kotlin", "Android SDK", "SQLite", "MPAndroidChart"],
      techDetails:
        "Built natively in Kotlin. SQLite (via Android's SQLiteOpenHelper) stores habit and log data. MPAndroidChart renders weekly/monthly progress graphs. AlarmManager handles scheduled habit reminder notifications.",
      link: "https://github.com/IrushaDilshan/Habit-tracker-app",
      demoLink: "https://www.linkedin.com/posts/irusha-dilshan-a15645354_androiddevelopment-kotlin-mobileappdevelopment-activity-7403846170470539264-HYSG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhfM3EBmWbFICguU9fjMZEDskMQLGHu9dc",
      category: "University Project",
      challenges: [
        {
          challenge: "Keeping streak counts accurate even when users miss days or check in late.",
          solution: "Stored check-in timestamps and computed streaks dynamically at query time rather than persisting them, preventing stale streak counts."
        }
      ]
    },
    {
      title: "ServSync - Service Management",
      description:
        "ServSync is an innovative service management platform that streamlines business operations and enhances customer service delivery through modern technology.",
      longDescription:
        "ServSync is a smart appointment and queue management system built for NITF. It allows service centers to manage customer queues digitally, reducing wait times and improving satisfaction. The system includes a staff dashboard, customer-facing kiosk view, and real-time queue updates.",
      image: ServSyncImg,
      screenshots: [ServSyncImg],
      techStack: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Socket.io"],
      techDetails:
        "Frontend built with React.js and Tailwind CSS. Backend is Node.js + Express with MongoDB. Socket.io enables real-time queue updates across all connected displays and staff terminals without page refresh.",
      link: "https://github.com/IrushaDilshan",
      demoLink: null, // 👉 Add your LinkedIn video URL here
      category: "University Project",

      challenges: [
        {
          challenge: "Broadcasting live queue position updates to multiple screens (staff dashboard + customer display) simultaneously.",
          solution: "Integrated Socket.io rooms so when a staff member calls the next customer, all displays in that service center receive the update instantly."
        },
        {
          challenge: "Preventing duplicate queue tokens during high concurrent traffic.",
          solution: "Used MongoDB's atomic findAndModify operation to increment the token counter, ensuring uniqueness even under concurrent requests."
        }
      ]
    },
    {
      title: "Delivery App Business Platform",
      description:
        "A comprehensive delivery business platform for end-to-end delivery operations, from order management to real-time tracking and customer notifications.",
      longDescription:
        "A web-based platform for managing delivery business operations. Includes order intake, driver assignment, route tracking, and automated customer notifications. Built with vanilla JavaScript with a clean, responsive interface.",
      image: deliveryImg,
      screenshots: [deliveryImg],
      techStack: ["JavaScript", "HTML/CSS", "REST API", "LocalStorage"],
      techDetails:
        "Pure JavaScript frontend with fetch API for backend communication. LocalStorage caches order data for offline resilience. CSS Grid and Flexbox handle the responsive layout without any framework dependency.",
      link: "https://github.com/IrushaDilshan/Delivery-App",
      demoLink: null, // 👉 Add your LinkedIn video URL here
      category: "Personal Project",

      challenges: [
        {
          challenge: "Managing order state across multiple UI panels without a state management library.",
          solution: "Implemented a simple event bus (pub/sub pattern) in vanilla JS so components could subscribe to order state changes without direct coupling."
        }
      ]
    },
    {
      title: "Customer Feedback Management",
      description:
        "This system empowers customers to provide feedback and raise service-related complaints, allowing management to monitor service quality and track issue resolution.",
      longDescription:
        "A full-stack web application where customers can submit feedback and complaints about services. Management gets a dashboard showing complaint status, resolution times, and satisfaction trends. Built as a university group project.",
      image: feedbackImg,
      screenshots: [feedbackImg],
      techStack: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
      techDetails:
        "PHP backend with MySQL database. The frontend uses Bootstrap for responsive layout and vanilla JavaScript for dynamic form validation and chart rendering. Session-based authentication for the management dashboard.",
      link: "https://github.com/IrushaDilshan/Customer-Complaints-Feedback-Management-",
      demoLink: null, // 👉 Add your LinkedIn video URL here
      category: "University Project",

      challenges: [
        {
          challenge: "Preventing spam feedback submissions from the same user.",
          solution: "Added server-side rate limiting using PHP sessions combined with a CAPTCHA challenge for anonymous submissions."
        }
      ]
    },
  ];

  const [projects, setProjects] = useState(manualProjects);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/IrushaDilshan/repos?sort=updated');
        const data = await response.json();

        if (Array.isArray(data)) {
          const manualLinks = new Set(manualProjects.map(p => p.link));
          const excludedRepos = new Set([
            'Portfolio_N', 'IrushaDilshan', 'irusha.github.io', 'Portfolio-N',
            'NM-ToDo-App', 'Todo-App', 'todo-app',
            'sales-management-system', 'Library-management-System', 'Vehicle-Rental-App-Design-Figma',
            'Vehicle_Rental_App_Design_Figma'
          ]);

          const potentialRepos = data.filter(repo =>
            !manualLinks.has(repo.html_url) &&
            !repo.fork &&
            !excludedRepos.has(repo.name)
          );

          const githubProjectsPromises = potentialRepos.map(async (repo) => {
            const baseProject = {
              title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
              description: repo.description || "A project available on GitHub.",
              longDescription: repo.description || "A project available on GitHub.",
              image: projectPlaceholder,
              screenshots: [projectPlaceholder],
              techStack: repo.language ? [repo.language] : [],
              link: repo.html_url,
              category: "Personal Project",
              challenges: [],
            };

            try {
              const readmeRes = await fetch(`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/README.md`);
              if (!readmeRes.ok) return baseProject;
              
              const readmeContent = await readmeRes.text();
              const imgRegex = /!\[.*?\]\(\s*(.*?)\s*\)|<img[^>]+src\s*=\s*["'](.*?)["']/i;
              const match = readmeContent.match(imgRegex);
              
              if (match) {
                const imageUrl = match[1] || match[2];
                if (imageUrl) {
                  let finalImageUrl = imageUrl;
                  if (!imageUrl.startsWith('http') && !imageUrl.startsWith('data:')) {
                      const cleanPath = imageUrl.replace(/^\.\//, '').replace(/^\//, '');
                      finalImageUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/${cleanPath}`;
                  }
                  return {
                    ...baseProject,
                    image: finalImageUrl,
                    screenshots: [finalImageUrl],
                  };
                }
              }
              return baseProject;
            } catch (err) {
              return baseProject;
            }
          });

          const fetchedProjects = await Promise.all(githubProjectsPromises);
          setProjects([...manualProjects, ...fetchedProjects]);
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
    <>
      <section id="projects" className="w-full min-h-screen relative py-24 flex items-center bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight pb-2">
              Featured Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my latest work, from comprehensive management systems to intuitive mobile applications. Click any project to dive deep into details, challenges, and solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {["All", "Personal Project", "University Project"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden ${
                  activeCategory === category
                    ? "text-white shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] bg-indigo-600 hover:bg-indigo-700"
                    : "text-gray-600 hover:text-gray-900 border border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <GlowCard
                key={project.link || project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden border border-gray-200 bg-white hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]"
              >
                <div className="relative w-full h-56 overflow-hidden bg-gray-50 z-10 p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                    {!loadedImages[project.title] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-pulse flex flex-col items-center">
                          <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(project.title)}
                      className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${loadedImages[project.title] ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                    
                    {/* "View Details" floating badge on hover */}
                    <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <span className="px-5 py-2.5 bg-white/90 backdrop-blur-md text-gray-900 text-sm font-bold rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Explore Project
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 relative z-10 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] sm:text-xs font-bold text-indigo-600 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[11px] font-semibold bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg border border-gray-200">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center group/btn">
                    <span className="text-sm font-medium text-gray-500 group-hover/btn:text-indigo-600 transition-colors">
                      View full details
                    </span>
                    <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                      <svg className="w-4 h-4 text-indigo-600 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
