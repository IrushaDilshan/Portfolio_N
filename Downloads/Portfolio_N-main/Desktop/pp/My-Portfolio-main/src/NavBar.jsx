import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuLogo from "./Images/menu.svg";
import CloseLogo from "./Images/close.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-0 lg:top-6"
        } flex justify-center px-4`}>
        <div
          className={`w-full max-w-6xl transition-all duration-300 rounded-2xl border ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg py-2.5 px-4"
            : "bg-white/50 backdrop-blur-lg border-white/20 shadow-sm py-3 px-6"
            } flex items-center justify-between`}
        >
          <div
            className="group cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("home")}
          >
            <h1 className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-black transition-colors duration-300">
              Irusha Dilshan
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/40 rounded-full p-1 border border-white/20 backdrop-blur-sm">
            {[
              { id: "home", label: "Home" },
              { id: "aboutMe", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "certificates", label: "Certificates" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </button>

            <button
              className="md:hidden p-2 text-gray-600 hover:bg-black/5 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <img src={MenuLogo} alt="Menu" className="w-6 h-6 opacity-70" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-24"></div>

      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-white transition-transform duration-300 ease-out shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src={CloseLogo} alt="Close" className="w-5 h-5 opacity-70" />
            </button>
          </div>

          <div className="flex flex-col p-4 gap-2">
            {[
              { id: "home", label: "Home" },
              { id: "aboutMe", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "certificates", label: "Certificates" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 w-full py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md active:scale-95 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
