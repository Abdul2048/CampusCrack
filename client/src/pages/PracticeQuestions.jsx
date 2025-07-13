import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, Circle, Trophy, Target, Code } from "lucide-react";
import dummyData from "./dummyData"; // Import your question data

const PracticeQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState(() => {
    const saved = localStorage.getItem("completedQuestions");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [visibleTopics, setVisibleTopics] = useState([]);
  const [filteredData, setFilteredData] = useState(dummyData);

  useEffect(() => {
    dummyData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTopics((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(dummyData);
      return;
    }
    const filtered = dummyData
      .map((topic) => {
        const matchingSubtopics = topic.subtopics.filter(
          (sub) =>
            sub.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            topic.topic.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingSubtopics.length || topic.topic.toLowerCase().includes(searchTerm.toLowerCase())) {
          return {
            ...topic,
            subtopics: matchingSubtopics.length ? matchingSubtopics : topic.subtopics
          };
        }
        return null;
      })
      .filter(Boolean);

    setFilteredData(filtered);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("completedQuestions", JSON.stringify(Array.from(completedQuestions)));
  }, [completedQuestions]);

  const toggleQuestionCompletion = (questionId) => {
    setCompletedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.has(questionId) ? newSet.delete(questionId) : newSet.add(questionId);
      return newSet;
    });
  };

  const getTotalQuestions = () => dummyData.reduce((sum, t) => sum + t.subtopics.length, 0);
  const getCompletedCount = () => completedQuestions.size;
  const progressPercentage = (getCompletedCount() / getTotalQuestions()) * 100;

  const getTopicProgress = (topic) => {
    const total = topic.subtopics.length;
    const done = topic.subtopics.filter((q) => completedQuestions.has(`${topic.topic}-${q.text}`)).length;
    return (done / total) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 text-green-400 font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-md border-b border-green-700/30 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 space-y-4 lg:space-y-0">
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 drop-shadow-lg flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Code className="mr-2 sm:mr-3" size={30} />
              <span className="hidden sm:inline">CodeMaster Platform</span>
              <span className="sm:hidden">CodeMaster</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-green-900/30 px-3 py-2 rounded-full border border-green-700/50">
                <Trophy className="text-yellow-400" size={18} />
                <span className="text-green-300 font-semibold text-sm">
                  {getCompletedCount()}/{getTotalQuestions()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="text-red-400" size={18} />
                <span className="text-green-300 text-sm">
                  {progressPercentage.toFixed(1)}% Complete
                </span>
              </div>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
            <input
              type="text"
              placeholder="Search topics and questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900/60 border border-green-700/50 rounded-lg pl-10 pr-4 py-3 text-sm sm:text-base text-green-300 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <AnimatePresence>
          {filteredData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <Search className="mx-auto mb-4 text-green-600" size={48} />
              <p className="text-green-500 text-lg px-4">
                No topics found matching "{searchTerm}"
              </p>
            </motion.div>
          ) : (
            filteredData.map((topicItem, idx) => {
              const originalIndex = dummyData.findIndex((item) => item.topic === topicItem.topic);
              const topicProgress = getTopicProgress(topicItem);

              return (
                visibleTopics.includes(originalIndex) && (
                  <motion.div
                    key={topicItem.topic}
                    className="mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-gray-900/80 to-green-900/20 backdrop-blur-sm rounded-xl border border-green-700/30 overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-green-300 flex items-center">
                            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                            {topicItem.topic}
                          </h3>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="text-xs sm:text-sm text-green-500">
                              {topicItem.subtopics.filter(q => completedQuestions.has(`${topicItem.topic}-${q.text}`)).length}/{topicItem.subtopics.length}
                            </div>
                            <div className="w-12 sm:w-16 bg-gray-800 rounded-full h-2">
                              <div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
                                style={{ width: `${topicProgress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-2 sm:gap-3">
                          {topicItem.subtopics.map((sub, i) => {
                            const id = `${topicItem.topic}-${sub.text}`;
                            const done = completedQuestions.has(id);

                            return (
                              <motion.div
                                key={id}
                                className={`flex items-center justify-between p-2 sm:p-3 rounded-lg border transition-all duration-300 ${done ? 'bg-green-900/40 border-green-500/50 shadow-md' : 'bg-gray-800/50 border-gray-700/50 hover:border-green-600/50'}`}
                                whileHover={{ scale: 1.01, x: 2 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                <div className="flex items-center space-x-3">
                                  <button onClick={() => toggleQuestionCompletion(id)} className="focus:outline-none p-1">
                                    {done ? <CheckCircle className="text-green-400" size={18} /> : <Circle className="text-green-600" size={18} />}
                                  </button>
                                  <span className="text-green-200 text-sm sm:text-base">
                                    {sub.text}
                                  </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                  <a
                                    href={sub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-green-200 border border-green-600 px-3 py-1 rounded-md hover:bg-green-700/20 transition"
                                  >
                                    Question
                                  </a>
                                  <span
                                    className={`text-xs font-semibold rounded px-2 py-0.5 ${
                                      sub.difficulty === "Easy"
                                        ? "bg-green-700 text-green-100"
                                        : sub.difficulty === "Medium"
                                        ? "bg-yellow-700 text-yellow-100"
                                        : "bg-red-700 text-red-100"
                                    }`}
                                  >
                                    {sub.difficulty}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PracticeQuestions;
