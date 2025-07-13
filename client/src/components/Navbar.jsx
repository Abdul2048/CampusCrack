import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Practice", path: "/practice-questions" },
  { name: "Important Topics", path: "/important-topics" },
  { name: "Notes", path: "/notes" },
  { name: "Study Plan", path: "/study-plan" },
  { name: "Reviews", path: "/reviews" },
  { name: "Login / Register", path: "/auth" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="relative z-50 bg-black text-white shadow-lg px-6 py-4 flex justify-between items-center"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-400 via-emerald-600 to-black opacity-30 blur-2xl animate-spin"
        style={{ animationDuration: "60s", borderRadius: "40%" }}
      />

      {/* Logo */}
      <motion.h1
        className="text-2xl font-extrabold bg-gradient-to-r from-green-300 via-lime-400 to-green-500 bg-clip-text text-transparent z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        StudyHub
      </motion.h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 z-10">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to={link.path}
              className={`transition duration-300 font-medium ${
                link.name === "Login / Register"
                  ? "border border-green-400 rounded-lg px-3 py-1 hover:bg-green-500 hover:text-black text-white shadow-md"
                  : "text-white hover:text-green-300"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-10">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-lg transition ${
                    link.name === "Login / Register"
                      ? "border border-green-400 rounded-lg px-3 py-1 hover:bg-green-500 hover:text-black text-white shadow-md"
                      : "text-white hover:text-green-300"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glowing bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 via-lime-300 to-green-500 blur-sm"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.nav>
  );
};

export default Navbar;
