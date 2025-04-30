"use client"

import React from 'react'

function Upgrade() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-cool-gray-800 to-cool-gray-900">
            {/* Animated background blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
                <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Data-Driven Plans
                    </h2>
                    <p className="text-lg text-cool-gray-400">
                        Choose the analytics package that fits your career goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Starter Plan */}
                    <div className="border shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-cool-gray-700 bg-cool-gray-800/50 rounded-lg">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <div className="p-6 text-cool-gray-100">
                            <h3 className="text-xl">Starter Analytics</h3>
                            <div className="mt-4 flex items-baseline text-cool-gray-100">
                                <span className="text-4xl font-extrabold tracking-tight">$0</span>
                                <span className="ml-1 text-xl text-cool-gray-400">/month</span>
                            </div>
                            <p className="pt-3">Basic interview performance metrics</p>
                            <ul className="space-y-3 text-sm mt-4 text-cool-gray-300">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>3 interviews with basic metrics</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Performance summary reports</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Core skills assessment</li>
                            </ul>
                            <button className="w-full mt-6 border border-blue-500/50 p-2 rounded-md hover:bg-blue-500/10 text-blue-500">Get Started</button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="border border-blue-500 shadow-lg relative group hover:shadow-xl transition-all duration-300 bg-cool-gray-800/50 rounded-lg">
                        <div className="absolute -top-4 inset-x-0 flex justify-center">
                            <span className="bg-blue-500 text-xs text-white px-3 py-1 rounded-full font-medium">
                                DATA INSIGHTS
                            </span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                        <div className="p-6 text-cool-gray-100">
                            <h3 className="text-xl flex items-center gap-2">
                                Pro Analytics <span className="h-5 w-5 text-blue-500">📊</span>
                            </h3>
                            <div className="mt-4 flex items-baseline text-cool-gray-100">
                                <span className="text-4xl font-extrabold tracking-tight">$19</span>
                                <span className="ml-1 text-xl text-cool-gray-400">/month</span>
                            </div>
                            <p className="pt-3">Comprehensive performance tracking</p>
                            <ul className="space-y-3 text-sm mt-4 text-cool-gray-300">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Unlimited interviews with full metrics</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Advanced data visualization reports</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Skill growth tracking over time</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Company-specific benchmark data</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Performance prediction algorithms</li>
                            </ul>
                            <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-500/90 hover:to-blue-700/90 p-2 rounded-md text-white">Subscribe</button>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="border shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-cool-gray-700 bg-cool-gray-800/50 rounded-lg">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        <div className="p-6 text-cool-gray-100">
                            <h3 className="text-xl">Enterprise Analytics</h3>
                            <div className="mt-4 flex items-baseline text-cool-gray-100">
                                <span className="text-4xl font-extrabold tracking-tight">$49</span>
                                <span className="ml-1 text-xl text-cool-gray-400">/month</span>
                            </div>
                            <p className="pt-3">Team-wide performance analysis</p>
                            <ul className="space-y-3 text-sm mt-4 text-cool-gray-300">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>All Pro analytics features</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Team performance dashboard</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Custom data analysis</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>Comparative team metrics</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span>API access to performance data</li>
                            </ul>
                            <button className="w-full mt-6 border border-blue-500/50 p-2 rounded-md hover:bg-blue-500/10 text-blue-500">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upgrade
