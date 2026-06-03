import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/IrushaDilshan",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22 0 1.6-.02 2.89-.02 3.28 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/irusha-dilshan-a15645354",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 7h4v11h-4V10.5Zm7 0h3.8v1.82h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05V21.5h-4v-4.67c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46V21.5h-4V10.5Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:irushadilsha2@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 13.065 1.8 6.75h20.4L12 13.065Zm0 2.435L1.5 8.25V18h21V8.25L12 15.5Z" />
        </svg>
      ),
    },
  ];

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#aboutMe" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <footer className="w-full bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top area */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand / Intro */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold tracking-wide text-white">
              Irusha Dilshan
            </h3>
            <p className="mt-2 text-gray-400 max-w-md">
              Full-Stack Developer & Mobile App Specialist 
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gray-800" />

        {/* Bottom area */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {year} Irusha Dilshan. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={s.name}
                className="
                  group inline-flex items-center justify-center
                  h-11 w-11 rounded-full
                  bg-gray-900/60 border border-gray-800
                  hover:border-gray-600 hover:bg-gray-800
                  transition-all
                "
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
