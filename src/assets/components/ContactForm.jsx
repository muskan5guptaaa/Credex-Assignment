import { useState } from "react";
import React from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", license: "", message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto text-left">
        {["name", "email", "company"].map((f) => (
          <input key={f} name={f} value={form[f]} onChange={handleChange}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            className="w-full px-4 py-2 border rounded" required />
        ))}
        <select name="license" value={form.license} onChange={handleChange} required className="w-full px-4 py-2 border rounded">
          <option value="">Select License Type</option>
          <option value="windows">Windows</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"
          className="w-full px-4 py-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}
