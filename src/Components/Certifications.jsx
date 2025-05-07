import { motion } from "framer-motion";

const certifications = [
  {
    title: "Machine Learning and Deep Learning - Fundamentals and Applications",
    provider: "NPTEL",
    image: "https://sangamuniversity.ac.in/wp-content/uploads/2023/03/nptel.jpg",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    provider: "IBM",
    image: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
  },
  {
    title: "Crash Course on Python",
    provider: "Coursera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
  },
  {
    title: "Fundamentals of Deep Learning",
    provider: "NVIDIA",
    image: "data:image/png;base64,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",
  },
  {
    title: "Data Analysis using Python",
    provider: "NIELT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pNIP7W7MLre7x-vca81dq-javkQZ9XFZqA&s",
  },
  {
    title: "Generative AI for Everyone",
    provider: "Coursera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
  },
  {
    title: "Java(Basic)",
    provider: "HackerRank",
    image: "data:image/png;base64,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",
  },
  // Add more
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">🎓 Certifications</h2>
  
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-8 md:gap-12 px-2 w-max">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-80 bg-zinc-800 border border-indigo-600 rounded-xl p-4 shadow-lg hover:shadow-indigo-700/40 transition flex-shrink-0 w-72"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-indigo-400">{cert.title}</h4>
              <p className="text-sm text-gray-400">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Certifications;
