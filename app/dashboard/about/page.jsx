import React from 'react';

function About() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></div>
      </div>
      {/* Header/Hero Section */}
      <div className="py-20 px-4 md:px-8">

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2015, our innovative team started with a simple idea: to create technology that makes a difference.
              </p>
              <p>
                Today, we're proud to be at the forefront of the industry, constantly pushing boundaries and exploring new possibilities.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be the leading technology partner for businesses seeking innovative, reliable, and transformative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="border-blue-200 my-10" />
      </div>

      {/* Our Mission Section */}
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Our Mission</h2>
        <div className="bg-white rounded-xl p-8 shadow-md">
          <p className="text-gray-700 mb-6 text-lg">
            Our mission is to empower businesses with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Quality First", "Best Practices", "Long-term Value"].map((title, i) => (
              <li key={i} className="bg-blue-50 p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600">
                  {i === 0 && "Deliver high-quality, reliable implementations that exceed expectations"}
                  {i === 1 && "Use the best practices of development at reasonable cost"}
                  {i === 2 && "Establish rapport for long-term loyalty and mutual growth"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="border-blue-200 my-10" />
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center">Our Team</h2>
        <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto text-lg">
          Our success is driven by our talented team of professionals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Zack Reynolds",
              title: "CTO & Co-Founder",
              img: "public/lovable-uploads/f31e0133-3c27-4b2d-b233-8183cded3a2c.png",
              desc: "Leading our technical initiatives with over 10 years of experience.",
            },
            {
              name: "Sarah Johnson",
              title: "CEO & Co-Founder",
              img: "public/lovable-uploads/320cb4ac-b56a-4b1c-964a-aed37ed13611.png",
              desc: "Visionary leader with expertise in business strategy and development.",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center"
            >
              <div className="bg-blue-400 h-8 -mt-8 mb-4 rounded-t-lg"></div>
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-4 mx-auto overflow-hidden bg-white">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-800">{member.name}</h3>
              <p className="text-blue-500 font-medium">{member.title}</p>
              <p className="text-gray-600 mt-2">{member.desc}</p>
              <div className="mt-4 flex justify-center gap-3">
                <button className="px-4 py-1 border border-blue-300 text-blue-600 rounded-full hover:bg-blue-50">
                  LinkedIn
                </button>
                <button className="px-4 py-1 border border-blue-300 text-blue-600 rounded-full hover:bg-blue-50">
                  Twitter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <hr className="border-blue-200 my-10" />
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { title: "Excellence", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Integrity", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 shadow-md rounded-lg border hover:scale-105 transition-transform duration-300 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{val.title}</h3>
              <p className="text-gray-600">
                {val.title === "Innovation" && "We explore new ideas to solve complex problems."}
                {val.title === "Excellence" && "We deliver the highest quality in all we do."}
                {val.title === "Integrity" && "We conduct business with honesty and ethics."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 md:px-8">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Contact us today to discuss your project.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
