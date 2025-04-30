"use client"

import { motion } from "framer-motion"
import React from "react"

const FeatureSecation = () => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          Smart Interview Preparation
        </h2>
        <p className="text-gray-600 mb-12">
          Our data-centric approach helps you identify and improve key interview skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Data-Driven Interviews
            </h3>
            <p className="text-sm text-gray-600">
              AI-powered interviews based on real industry data and trending interview questions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Performance Analytics
            </h3>
            <p className="text-sm text-gray-600">
              Comprehensive metrics on your strengths, weaknesses, and specific improvement opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Progress Tracking
            </h3>
            <p className="text-sm text-gray-600">
              Monitor your improvement over time with detailed performance graphs and insights.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Success Prediction
            </h3>
            <p className="text-sm text-gray-600">
              AI algorithms that predict your interview success rate based on your performance data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSecation
