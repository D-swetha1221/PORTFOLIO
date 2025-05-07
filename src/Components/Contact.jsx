import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import ContactIllustration from "../Assets/man.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src={ContactIllustration}
            alt="Contact Illustration"
            className="w-full max-w-md object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right: Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start space-y-6"
        >
          <h2 className="text-4xl font-bold">Let's Connect</h2>

          {/* Small Icon Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/D-swetha1221"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://leetcode.com/u/D_Swetha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition"
              title="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/swetha-d-9b0716321"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="dswetha1221@gmail.com"
              className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition"
              title="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Resume Link */}
          <motion.a
            href="https://drive.google.com/file/d/1lvjUn6P_a_1AJRS-0czrg0KGrPQHiXJP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            <BsFillFileEarmarkTextFill size={22} />
            View My Resume
          </motion.a>

          {/* Footer Text */}
          <p className="text-sm text-gray-200 mt-6">© 2025 D. Swetha. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
