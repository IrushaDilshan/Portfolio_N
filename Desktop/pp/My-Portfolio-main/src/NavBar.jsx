import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuLogo from "./Images/menu.svg";
import CloseLogo from "./Images/close.svg";
import HomeIcon from "./Images/home2.svg";

const NavBar = () => {
  const [showBackToHome, setShowBackToHome] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
    const sideBar = document.getElementById("sideBar");
    if (sideBar) sideBar.style.display = "none";
  };

  const getSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar) sideBar.style.display = "flex";
  };

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToHome(!entry.isIntersecting);
      },
      {
        threshold: 0.5, 
      }
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      {showBackToHome && (
        <button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-[998] group"
          onClick={() => scrollToSection("navbar")}
        >
          <img src={HomeIcon} className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm" id="navbar">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-row items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              Irusha Dilshan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-row items-center gap-1 max-md:hidden">
            <button 
              className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg" 
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button 
              className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg" 
              onClick={() => scrollToSection("aboutMe")}
            >
              About
            </button>
            <button 
              className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg" 
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button 
              className="px-5 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg" 
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button 
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ml-2" 
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="max-md:flex hidden">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={getSideBar}
            >
              <img src={MenuLogo} className="w-6 h-6" id="hambergerMenu" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile Sidebar */}
      <div
        id="sideBar"
        className="z-[999] flex flex-col h-screen w-[300px] fixed top-0 right-0 bg-white shadow-2xl hidden animate-slide-in"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Menu
          </h2>
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={handleMenuClick}
          >
            <img src={CloseLogo} className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-4 py-6 gap-2">
          <button
            onClick={() => {
              scrollToSection("home");
              handleMenuClick();
            }}
            className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("aboutMe");
              handleMenuClick();
            }}
            className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("skills");
              handleMenuClick();
            }}
            className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection("projects");
              handleMenuClick();
            }}
            className="text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection("contact");
              handleMenuClick();
            }}
            className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all mt-2"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
