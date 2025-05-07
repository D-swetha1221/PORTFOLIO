import { Link } from "react-scroll";
import { motion } from "framer-motion";

const links = ["home", "about","skills", "projects", "internships","certifications","contact"];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400 tracking-wide cursor-pointer hover:scale-105 transition">
          MyPortfolio
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="relative cursor-pointer text-white font-medium hover:text-indigo-400 transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Let's Connect Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-6 hidden md:inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md transition duration-300"
        >
          Let’s Connect
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
