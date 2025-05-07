import React, { useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const skillsData = [
  { name: "C", value: 70 },
  { name: "Java", value: 70},
  {name: "Python", value: 60},
  { name: "HTML", value: 80 },
  { name: "CSS", value: 75 },
  { name: "JavaScript", value: 75 },
  { name: "React.js", value: 60 },
  { name: "MySQL", value: 50 },
  { name: "ML Algorithms", value: 60 },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  const visibleSkills = [
    skillsData[currentIndex],
    skillsData[(currentIndex + 1) % skillsData.length],
    skillsData[(currentIndex + 2) % skillsData.length],
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-zinc-900 p-10 shadow-2xl   transition-all duration-500">
        <h2 className="text-5xl font-extrabold text-center mb-14 tracking-wide">
          ⚡ Skills
        </h2>
        <div className="flex items-center justify-center gap-12 md:gap-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-4 rounded-full bg-zinc-800 hover:bg-indigo-700 transition"
          >
            <FaChevronLeft size={24} />
          </button>

          {visibleSkills.map((skill, index) => (
  <div
    key={index}
    className={`w-36 md:w-44 text-center transition-transform duration-300 ${
      index === 1 ? "scale-110" : "scale-100"
    } hover:scale-110`}
  >
    <CircularProgressbar
      value={skill.value}
      text={`${skill.value}%`}
      styles={buildStyles({
        pathColor: "url(#gradient)",
        textColor: "#fff",
        trailColor: "#333",
        textSize: "18px",
      })}
    />
    <h4 className="mt-5 text-lg md:text-xl font-semibold text-indigo-400">
      {skill.name}
    </h4>
  </div>
))}


          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-zinc-800 hover:bg-indigo-700 transition"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Gradient definition for circular bars */}
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#6a11cb" />
              <stop offset="100%" stopColor="#2575fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
