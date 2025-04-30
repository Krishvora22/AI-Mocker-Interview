"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [load, setLoad] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send email.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoad(false);
    }
  };

  return (
<section className="min-h-screen flex items-center justify-center px-4 py-12">
<div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
                <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></div>
            </div>
<div className="w-full max-w-2xl bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-white/10">
        <h2 className="text-4xl font-bold text-center mb-2 text-blue-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Have any questions, feedback, or just want to connect? Drop me a message!
        </p>

        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-xl bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-white/20 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 rounded-xl bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-white/20 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 rounded-xl bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-white/20 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              disabled={load}
              className="px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-full text-lg font-semibold flex items-center justify-center gap-2 w-full md:w-1/2 mx-auto transition-transform transform hover:scale-105"
            >
              {load ? (
                <>
                  <LoaderCircle className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
