import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const topicsData = {
  OS: [
    {
      title: "Process Scheduling",
      subtopics: [
        { name: "Process Introduction", url: "https://example.com/os/1" },
        { name: "CPU Scheduling Algorithms", url: "https://example.com/os/2" },
        { name: "Starvation and Aging", url: "https://example.com/os/3" },
      ],
    },
    {
      title: "Process Synchronization",
      subtopics: [
        { name: "Peterson's Algorithm", url: "https://example.com/os/4" },
        { name: "Semaphores", url: "https://example.com/os/5" },
      ],
    },
  ],
  DSA: [
    {
      title: "Trees",
      subtopics: [
        { name: "Binary Trees", url: "https://example.com/dsa/1" },
        { name: "AVL Trees", url: "https://example.com/dsa/2" },
      ],
    },
    {
      title: "Graphs",
      subtopics: [
        { name: "DFS", url: "https://example.com/dsa/3" },
        { name: "BFS", url: "https://example.com/dsa/4" },
      ],
    },
  ],
  DBMS: [
    {
      title: "Transactions",
      subtopics: [
        { name: "ACID", url: "https://example.com/dbms/1" },
        { name: "Concurrency Control", url: "https://example.com/dbms/2" },
      ],
    },
    {
      title: "Indexing",
      subtopics: [
        { name: "B-Trees", url: "https://example.com/dbms/3" },
        { name: "Hash Index", url: "https://example.com/dbms/4" },
      ],
    },
  ],
};

const ImportantTopics = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [expandedTopicIndex, setExpandedTopicIndex] = useState(null);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setExpandedTopicIndex(null);
  };

  const handleTopicClick = (index) => {
    setExpandedTopicIndex(expandedTopicIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-10 font-mono drop-shadow-glow">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 border-b border-green-500 pb-4 drop-shadow-glow"
      >
        💻 Learn Smart: Important Computer Science Topics
      </motion.h1>

      <div className="max-w-2xl mx-auto">
        <motion.select
          onChange={handleSubjectChange}
          defaultValue=""
          className="w-full bg-green-900 text-green-200 border border-green-500 p-3 rounded mb-8 shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <option value="" disabled>
            🔍 Select a Subject
          </option>
          {Object.keys(topicsData).map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </motion.select>

        <AnimatePresence>
          {selectedSubject &&
            topicsData[selectedSubject].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div
                  onClick={() => handleTopicClick(index)}
                  className="cursor-pointer bg-green-800 hover:bg-green-700 px-4 py-3 rounded-lg text-xl font-semibold transition-all duration-200 shadow-md"
                >
                  📘 {topic.title}
                </div>

                <AnimatePresence>
                  {expandedTopicIndex === index && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="ml-6 mt-2 space-y-2 overflow-hidden"
                    >
                      {topic.subtopics.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 hover:text-green-100 hover:underline"
                          >
                            🔗 {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <footer className="text-center mt-16 border-t border-green-500 pt-6">
        <p className="text-green-500">Made with 💚 for passionate learners.</p>
      </footer>
    </div>
  );
};

export default ImportantTopics;
