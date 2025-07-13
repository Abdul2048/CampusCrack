//import React from "react";
//import { useNavigate } from "react-router-dom";
//
//const Home = () => {
//  const navigate = useNavigate();
//
//  return (
//    <div className="flex flex-col items-center justify-center p-8 text-center">
//      <h2 className="text-3xl font-bold mb-4">Welcome to StudyHub</h2>
//      <p className="text-lg max-w-2xl mb-6">
//        StudyHub is your one-stop platform for effective exam preparation.
//        Explore practice questions, access notes, review important topics, plan
//        your study schedule, and benefit from expert insights. Whether you're
//        studying at home or on the go, we've got you covered!
//      </p>
//      <blockquote className="italic text-xl text-gray-600 mb-6">
//        "Success is the sum of small efforts, repeated day in and day out."
//      </blockquote>
//      <button
//        onClick={() => navigate("/practice-questions")}
//        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//      >
//        Start Practicing
//      </button>
//    </div>
//  );
//};
//
//export default Home;
//
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  BookText,
  CalendarClock,
  Brain,
  Sparkles,
  CodeSquare,
} from "lucide-react";
import EnhancedPracticeButton from "../components/EnhancedPracticeButton";
const features = [
  {
    icon: <Code2 size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Coding Practice",
    desc: "Ace DSA with curated coding questions and challenges.",
  },
  {
    icon: <BookText size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Subjectwise Notes",
    desc: "Concise notes on Operating System, DBMS, DSA, and more.",
  },
  {
    icon: <CalendarClock size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Important Questions",
    desc: "Plan your study with important topics and questions.",
  },
  {
    icon: <Brain size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Notes",
    desc: "Access detailed notes on key CS concepts.",
  },
  {
    icon: <CalendarClock size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Study Plan",
    desc: "Create a personalized study schedule to stay on track.",
  },
  {
    icon: <CodeSquare size={40} className="text-green-400 drop-shadow-glow" />,
    title: "Reviews",
    desc: "Get experience from experienced students and professionals.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden ">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none font-mono text-green-400 text-sm animate-matrix whitespace-pre">
        {Array(200).fill("<code/> ").join("")}
      </div>

      {/* Hero Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 z-10 text-green-400 drop-shadow-glow "
      >
        Empowering Your Placement Journey –
        <span className="text-white"> Welcome to StudyHub</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg max-w-2xl mb-6 text-gray-300 z-10"
      >
        The ultimate platform for mastering coding, CS concepts, and cracking
        placements. From DSA to system design — all in one hub.
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="italic text-xl text-green-300 mb-10 z-10"
      >
        "Code. Learn. Crack the Interview. Repeat."
      </motion.blockquote>

     <EnhancedPracticeButton />


      {/* Feature Cards with Flexbox */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 z-10 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            className="w-full sm:w-[45%] lg:w-[22%] bg-gray-900 hover:bg-gray-800 border border-green-700 rounded-xl p-6 flex flex-col items-center space-y-4 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-green-500/50"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-green-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      

      {/* Floating Sparkle */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 right-10 text-green-400"
      >
        <Sparkles size={32} />
      </motion.div>
    </div>
  );
};

export default Home;


