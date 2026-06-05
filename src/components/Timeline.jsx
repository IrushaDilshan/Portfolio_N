import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "2022",
    type: "education",
    title: "Joined SLIIT",
    subtitle: "Sri Lanka Institute of Information Technology",
    description:
      "Started BSc (Hons) in Information Technology, specializing in Software Engineering. Began learning fundamentals of programming, data structures, and software design.",
    icon: "🎓",
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-200",
    badge: "Education",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    year: "2023",
    type: "project",
    title: "Vehicle Rental App – UI/UX Design",
    subtitle: "Figma · Prototyping · UI/UX",
    description:
      "Designed a modern and intuitive vehicle rental platform UI/UX using Figma. Focused on seamless user flows, clean aesthetics, and prototyping for stakeholder presentations.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    border: "border-purple-200",
    badge: "University Project",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    year: "2023",
    type: "project",
    title: "VeeGo – Vehicle Rental Android App",
    subtitle: "Kotlin · Android Studio · Material Design",
    description:
      "Built a full-featured vehicle rental mobile application using Kotlin and Android Studio. Users can search, book, and rent bikes, cars, or vans with an intuitive interface.",
    icon: "🚗",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-200",
    badge: "University Project",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    year: "2023",
    type: "project",
    title: "Habit Tracker App",
    subtitle: "Kotlin · Android SDK · SQLite",
    description:
      "Developed a comprehensive habit tracking mobile app. Features daily progress tracking, streak counts, and insightful analytics to help users build positive habits.",
    icon: "📈",
    color: "from-orange-500 to-amber-500",
    border: "border-orange-200",
    badge: "University Project",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    year: "2024",
    type: "project",
    title: "ServSync – Service Management Platform",
    subtitle: "MERN Stack · React.js · Node.js · MongoDB",
    description:
      "Built a smart appointment & queue management system for NITF. Streamlines business operations, enhances customer service delivery, and provides real-time queue visibility.",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-200",
    badge: "University Project",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    year: "2024",
    type: "project",
    title: "Customer Feedback Management System",
    subtitle: "JavaScript · Web Technologies · Database Management",
    description:
      "Built a system that empowers customers to submit feedback and raise complaints. Management can monitor service quality, track resolutions, and gain data-driven insights.",
    icon: "💬",
    color: "from-rose-500 to-pink-600",
    border: "border-rose-200",
    badge: "University Project",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    year: "Dec 2025",
    type: "certificate",
    title: "AI/ML Engineer – Stage 1",
    subtitle: "Issued by SLIIT",
    description:
      "Completed Stage 1 of the AI/ML Engineer certification program at SLIIT, gaining foundational knowledge in machine learning algorithms and data preprocessing.",
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
    border: "border-violet-200",
    badge: "Certificate",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    year: "Dec 2025",
    type: "certificate",
    title: "Microsoft Power BI & Python Certifications",
    subtitle: "Alison · University of Moratuwa",
    description:
      "Earned Diploma in Microsoft Power BI for Beginners (Alison) and Programming in Python – Python for Beginners (University of Moratuwa), expanding into data analytics and scripting.",
    icon: "📊",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-200",
    badge: "Certificate",
    badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    year: "Jan 2026",
    type: "certificate",
    title: "MongoDB Developer Certifications",
    subtitle: "MongoDB, Inc. · PHP · C# · Python · Java",
    description:
      "Completed 4 MongoDB certifications covering CRUD operations in C# & Java, Aggregation in Python, and connecting via PHP — demonstrating multi-language database proficiency.",
    icon: "🍃",
    color: "from-green-500 to-emerald-600",
    border: "border-green-200",
    badge: "Certificate",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    year: "2025 – Present",
    type: "project",
    title: "Sales Management System – NLDB",
    subtitle: "MERN Stack · React Native · TypeScript · Tailwind CSS",
    description:
      "Currently building a comprehensive Full-Stack Web & Mobile Application for the National Livestock Development Board. Features include streamlined orders, real-time tracking, and intelligent sales insights.",
    icon: "🏗️",
    color: "from-indigo-500 to-blue-700",
    border: "border-indigo-200",
    badge: "Active Project",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

const TimelineItem = ({ item, index, isVisible }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center w-full mb-12 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Card — full width on mobile, half width on desktop */}
      <div
        className={`w-full md:w-[46%] transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : isLeft
            ? "opacity-0 -translate-x-8"
            : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: `${index * 60}ms` }}
      >
        <div
          className={`relative bg-white rounded-2xl border ${item.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 group`}
        >
          {/* Top row: badge + year */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}
            >
              {item.badge}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              {item.year}
            </span>
          </div>

          {/* Title + subtitle */}
          <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 font-medium mb-3">
            {item.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* Gradient bar at bottom */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </div>

      {/* Center dot + icon */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg text-xl transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 60 + 150}ms` }}
        >
          {item.icon}
        </div>
      </div>

      {/* Mobile: left dot */}
      <div className="flex md:hidden absolute left-0 top-6 flex-col items-center z-10">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md text-base transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 60 + 150}ms` }}
        >
          {item.icon}
        </div>
      </div>

      {/* Spacer for the opposite side on desktop */}
      <div className="hidden md:block md:w-[46%]" />
    </div>
  );
};

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [lineHeight, setLineHeight] = useState(0);

  // Animate the vertical line fill on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = section.scrollHeight;

      // How far we've scrolled through the section
      const scrolled = Math.max(0, windowH - rect.top);
      const progress = Math.min(1, scrolled / (sectionH + windowH * 0.3));
      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for each item
  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Career &amp; Education
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From my first lecture to live production systems — here's the road so far.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Background line (gray track) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
          {/* Mobile background line */}
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Animated fill line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 transition-all duration-200"
            ref={lineRef}
            style={{ height: `${lineHeight}%` }}
          />
          {/* Animated fill line (mobile) */}
          <div
            className="block md:hidden absolute left-4 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 transition-all duration-200"
            style={{ height: `${lineHeight}%` }}
          />

          {/* Items */}
          <div className="pl-14 md:pl-0">
            {timelineData.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <TimelineItem
                  item={item}
                  index={i}
                  isVisible={visibleItems.has(i)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
            <span>🚀</span>
            <span>More milestones coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
