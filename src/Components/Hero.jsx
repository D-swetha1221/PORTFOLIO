import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import WavingImage from "../Assets/hi.png"; // Use your actual image path

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start h-full md:w-1/2 pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-md text-sm mb-6 font-semibold"
        >
          Welcome to my Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi! I'm <br />
          D. Swetha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-2xl font-semibold text-gray-300 h-10"
        >
          <Typewriter
            options={{
              strings: [
                "Software Development Engineer",
                "Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </motion.div>
      </div>

      {/* Right Image with wave animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="md:w-1/2 flex justify-center items-center"
      >
        <motion.img
          src={WavingImage}
          alt="Waving Cartoon"
          className="w-[450px] md:w-[550px] object-contain"
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
