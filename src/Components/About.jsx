import { motion } from "framer-motion";
import profilePic from "../Assets/cropped.jpg"; 
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Profile Image with glowing effect */}
        <motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
  <div className="relative w-80 h-80 md:w-[350px] md:h-[350px] bg-gradient-to-tr from-indigo-500/20 to-indigo-400/10 backdrop-blur-md border border-indigo-500/30 rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.3)] hover:shadow-[0_0_90px_rgba(99,102,241,0.8)] transition-all duration-500 transform hover:scale-105 group">
    
    <img
      src={profilePic}
      alt="Profile"
      className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-500"
    />

    {/* Optional decorative circle glow effect */}
    <div className="absolute inset-0 rounded-[2rem] border-2 border-indigo-500/30 pointer-events-none animate-pulse"></div>
  </div>
</motion.div>


        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="glass-card p-8 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md bg-opacity-10"
        >
          <h2 className="text-4xl font-bold text-indigo-400 mb-6">About Me</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I'm <span className="text-white font-bold">D.Swetha</span>, a passionate Software Development Engineer from India. I'm currently pursuing a B.E in Computer Science and Engineering(Artificial Intelligence and Machine Learning) .
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 mb-8">
            <p><span className="font-medium text-white">DOB:</span> 21 Dec 2004</p>
            <p><span className="font-medium text-white">Age:</span> 20</p>
            <p><span className="font-medium text-white">Email:</span> dswetha1221@gmail.com</p>
            <p><span className="font-medium text-white">Phone:</span> +91-9865753970</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">📘 Education</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="border-l-4 border-indigo-500 pl-4"
              >
                <span className="text-white font-semibold">10th:</span> VAV International School – 92%
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="border-l-4 border-indigo-500 pl-4"
              >
                <span className="text-white font-semibold">12th:</span>  VAV International School – 89%
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="border-l-4 border-indigo-500 pl-4"
              >
                <span className="text-white font-semibold">B.E CSE(AI&ML):</span> DR.Mahalingam College of Engineering and Technology (2022–202)
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
