import React, { useState } from "react";
import { submitMessage } from "../backend/submitMessage";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = Date.now();

    try {
      const res = await submitMessage({ ...formData, timestamp });
      setStatus(res);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        {status && <p className="text-green-700 mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
