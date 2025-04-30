"use client"

import { motion } from "framer-motion"
import React from "react"

const testimonials = [
  {
    name: "Alex Johnson",
    initials: "AJ",
    role: "Software Engineer at Google",
    improvement: "82% Improvement",
    quote:
      "After 5 interview practice sessions with data-backed feedback, I improved my success metrics by 82% and landed a role at Google!",
  },
  {
    name: "Sarah Chen",
    initials: "SC",
    role: "Senior Developer at Microsoft",
    improvement: "65% Improvement",
    quote:
      "The performance analytics helped me identify exactly where I was weakest in system design interviews. Three sessions later, I received an offer from Microsoft.",
  },
  {
    name: "Miguel Rodriguez",
    initials: "MR",
    role: "Frontend Developer at Amazon",
    improvement: "74% Improvement",
    quote:
      "As a career changer, the data insights were invaluable. I could see my progress in real-time and focus my preparation on areas needing improvement.",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Animated background blobs */}
   

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Success Metrics
          </h2>
          <p className="text-lg text-gray-600">
            Real performance improvements from our users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative p-6 rounded-2xl backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-400 w-full"></div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-6xl text-blue-100 absolute -top-6 -left-2">"</span>
                  <div className="bg-blue-100 rounded-full p-2 flex items-center gap-2">
                    <span className="font-bold text-blue-600">{t.improvement}</span>
                  </div>
                </div>
                <p className="relative text-gray-600 pt-2">{t.quote}</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full flex items-center justify-center w-12 h-12 font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
