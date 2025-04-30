"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 py-20 md:py-32 overflow-hidden relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />

            <div className="container px-4 relative z-10">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    
                    {/* Left Side Content */}
                    <div className="space-y-6 animate-fade-up">
                        <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
                            Master Interviews with Real-Time AI Coaching
                        </h1>
                        <p className="text-xl text-gray-700 md:text-2xl">
                            Practice with data-driven feedback to improve your success rate by up to{" "}
                            <span className="text-blue-500 font-semibold">78%</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/dashboard"
                                className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition text-center"
                            >
                                Start Your Interview
                            </Link>
                            <Link
                                href="/metrics"
                                className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition text-center"
                            >
                                View Success Metrics
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Stats Bubble */}
                    <div className="relative mx-auto max-w-sm md:max-w-none animate-fade-in">
                        <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-200 rounded-full p-1 shadow-xl">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden border border-gray-300">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,transparent_70%)] opacity-10" />
                                <div className="text-center p-6 relative z-10 space-y-6">
                                    <div className="text-6xl font-bold text-blue-600 drop-shadow-md">78%</div>
                                    <div className="space-y-1">
                                        <p className="text-xl font-semibold text-gray-800">Interview Success</p>
                                        <p className="text-sm text-gray-500">Avg. improvement after 5 sessions</p>
                                    </div>
                                    <div className="pt-4 grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">5K+</div>
                                            <p className="text-xs text-gray-500">Interviews</p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">93%</div>
                                            <p className="text-xs text-gray-500">Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Blobs */}
                        <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full blur-3xl opacity-40 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
