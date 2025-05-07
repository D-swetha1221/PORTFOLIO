import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import Movie_booking from "../Assets/Movie_booking.png";
import youtube from "../Assets/Youtube_adview.png";
import weather from "../Assets/Weather_app.png";
import forgery from "../Assets/Image forgery.png";

const mlProjects = [
  {
    title: "Image Forgery Detection",
    image: forgery,
    github: "https://github.com/D-swetha1221/Image-forgery-detection",
    // website: "https://yourwebsite.com/image-forgery",
  },
  {
    title: "YouTube Adview Prediction",
    image: youtube,
    github: "https://github.com/D-swetha1221/youtube-adview-predictor",
    // website: "https://yourwebsite.com/adview-prediction",
  },
];

const frontendProjects = [
  {
    title: "Weather Prediction App",
    image: weather,
    github: "https://github.com/D-swetha1221/Weather_Application",
    website: "https://weather-application-ruby-eight.vercel.app/",
  },
  {
    title: "Movie Ticket Booking App",
    image: Movie_booking,
    github: "https://github.com/D-swetha1221/Task-7",
    website: "https://yourwebsite.com/movie-ticket-app",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ml");

  const currentProjects = activeTab === "ml" ? mlProjects : frontendProjects;

  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          <button
            onClick={() => setActiveTab("ml")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === "ml"
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-gray-400"
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === "frontend"
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-gray-400"
            }`}
          >
            Frontend Projects
          </button>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-md w-[300px] h-[200px] group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-center px-2">
                  {project.title}
                </h3>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-black bg-white/20 hover:bg-white p-2 rounded-full transition"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-black bg-white/20 hover:bg-white p-2 rounded-full transition"
                    title="Live Site"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
