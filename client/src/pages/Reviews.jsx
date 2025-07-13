import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.message) return;
    setReviews([...reviews, form]);
    setForm({ name: "", role: "", message: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Expert Reviews</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Your Role/Job Title"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Review"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded h-24"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Review
        </button>
      </form>

      <div className="space-y-4">
        {reviews.map((rev, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold">{rev.name}</h4>
            <p className="text-sm text-gray-600">{rev.role}</p>
            <p className="mt-2">{rev.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
