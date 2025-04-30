"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Analytics = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          Interview Performance Analytics
        </h2>
        <p className="text-gray-600 mb-12">
          Explore comprehensive data insights across different interview domains
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Technical Skills Analysis
            </h3>
            <p className="text-sm text-gray-600">
              Get detailed metrics on your coding performance, algorithms, and technical knowledge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              System Design Evaluation
            </h3>
            <p className="text-sm text-gray-600">
              Comprehensive assessment of your architecture skills with performance visualization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Behavioral Insights
            </h3>
            <p className="text-sm text-gray-600">
              Data-driven feedback on your communication skills and behavioral responses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 rounded-full p-3 w-fit mb-4 mx-auto">
              {/* Icon Placeholder */}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Company Success Rates
            </h3>
            <p className="text-sm text-gray-600">
              View your performance metrics benchmarked against company-specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
