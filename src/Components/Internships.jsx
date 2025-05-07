import { motion } from "framer-motion";

const internships = [
  {
    role: "Internship Trainee",
    company: "Nxtlogic",
    duration: "June 2024 - July 2024",
    description:
      "I worked as a Full Stack Web Developer Intern, during my internship I gained hands on experience in full stack web development. I explored various fascinating front-end and back-end technologies, which deepened my understanding of building cohesive,dynamic and user friendly web applications.",
  },
  {
    role: "Machine Learning Internship Trainee",
    company: "Internship Studio",
    duration: "July 2024 - August 2024",
    description:
      "I worked as a Machine Learning Intern, where I developed a strong foundation in the basic concepts of Machine Learning(ML). As a part of the internship, I successfully applied my learning to create a project, demonstrating practical knowledge and implementing the skills in machine learning.",
  },
  {
    role: "Project Intern",
    company: "Kalv.",
    duration: "August 2024 - Present",
    description:
      "Worked in a collaborative team to develop a responsive web application for a company streamlining university admissions in the UK. Focused on building intuitive, high-performance front-end components to enhance user experience for students and partners.",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🚀 Internships</h2>
        <div className="space-y-12">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 border border-indigo-600 rounded-xl p-6 shadow-lg hover:shadow-indigo-700/50 transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">{item.role}</h3>
              <p className="text-sm text-gray-400">{item.company} • {item.duration}</p>
              <p className="mt-3 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
