import React, { useState } from "react";
import { motion } from "framer-motion";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.completedQuestions) {
        localStorage.setItem("completedQuestions", JSON.stringify(data.completedQuestions));
      }

      alert(data.message || (isLogin ? "Logged in!" : "Registered!"));
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 text-green-400">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black border border-green-800/50 p-8 rounded-2xl shadow-green-500/30 shadow-lg w-full max-w-md space-y-4"
      >
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text drop-shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </motion.h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-green-700/50 p-2 rounded text-green-300 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-green-700/50 p-2 rounded text-green-300 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-green-700/50 p-2 rounded text-green-300 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition text-black font-bold py-2 w-full rounded shadow-md"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center text-sm text-green-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="text-emerald-300 hover:underline font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </motion.form>
    </div>
  );
};

export default Auth;
