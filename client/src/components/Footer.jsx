import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaDribbble, FaGithub, FaGamepad } from "react-icons/fa";

const Footer = () => {
  const iconStyle = "hover:text-green-400 transition duration-300 text-lg";
  const links = [
    { name: "About Us" },
    { name: "Blog" },
    { name: "Github" },
    { name: "Free Products" },
  ];

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-40 bg-black text-green-400 px-6 py-12 overflow-hidden"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-400 via-emerald-600 to-black opacity-10 blur-3xl animate-pulse"
        style={{ animationDuration: "40s", borderRadius: "40%" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {/* Logo and Socials */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-300 via-lime-400 to-green-500 bg-clip-text text-transparent">
            Material Tailwind
          </h1>
          <p className="text-sm text-green-300 mt-2">
            Easy to use React components for Tailwind CSS and Material Design.
          </p>
          <div className="flex gap-4 mt-4 text-white">
            <FaTwitter className={iconStyle} />
            <FaFacebook className={iconStyle} />
            <FaDribbble className={iconStyle} />
            <FaGithub className={iconStyle} />
            <FaGamepad className={iconStyle} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold text-white mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            {links.map(link => (
              <li key={link.name} className="hover:text-green-500 cursor-pointer">
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="font-semibold text-white mb-3">Help and Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Knowledge Center</li>
            <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-green-500 cursor-pointer">Premium Support</li>
            <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-white mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Documentation</li>
            <li className="hover:text-green-500 cursor-pointer">Custom Development</li>
            <li className="hover:text-green-500 cursor-pointer">Discord</li>
            <li className="hover:text-green-500 cursor-pointer">Tailwind Components</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="font-semibold text-white mb-3">Technologies</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 cursor-pointer">React</li>
            <li className="hover:text-green-500 cursor-pointer">HTML</li>
          </ul>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="border-t border-green-700 mt-10 pt-6 text-sm text-green-400 flex flex-col items-center relative z-10">
        <p>
          Copyright © 2025 Material Tailwind by Creative Tim. Made with <span className="text-pink-500">❤</span> for a better web.
        </p>
        <p className="mt-2 text-xs">Powered by <span className="font-bold">▲Vercel</span></p>
      </div>

      {/* Glowing top border animation */}
      <motion.div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 via-lime-300 to-green-500 blur-sm"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.footer>
  );
};

export default Footer;
