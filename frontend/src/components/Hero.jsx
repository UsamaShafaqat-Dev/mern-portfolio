import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-20 w-full max-w-7xl mx-auto min-h-[80vh] gap-12 lg:gap-0">
      {/* Left Column: Text & Buttons */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 mt-12 lg:mt-0">
        <h3 className="text-xl text-gray-300 font-medium">Hi, I'm</h3>

        {/* Updated Name to USAMA SHAFAQAT */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          USAMA
          <br />
          SHAFAQAT
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          MERN-STACK
        </h2>

        <p className="text-gray-400 text-lg max-w-md leading-relaxed mt-2">
          I build beautiful, responsive and high-performance web applications
          using MongoDB, Express.js, React and Node.js. I love turning ideas
          into real world products that make impact.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 mt-6">
          <Link
            to="/contact"
            className="bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25"
          >
            Hire Me
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </Link>

          <Link
            to="/projects"
            className="text-gray-300 flex items-center gap-2 px-4 py-3 hover:text-white transition-all duration-300 group"
          >
            View Projects
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-8">
          <span className="text-gray-400 text-sm">Follow me</span>
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/UsamaShafaqat-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-cardBg border border-gray-800"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/usama-shafaqat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors p-2 rounded-lg bg-cardBg border border-gray-800"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Image & Badges (Updated) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0">
        {/* Glow Background Effect */}
        <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-primary/15 rounded-full blur-[100px] -z-10"></div>

        {/* Image Container */}
        <div className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] bg-cardBg rounded-[2rem] border border-gray-800 flex items-center justify-center overflow-hidden z-10 relative shadow-2xl">
          {/* 👇 Aapki Pic yahan adjust ki ha */}
          <img
            src="/usama_hero.jpg"
            alt="Usama Shafaqat"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating Badge 1: Experience (Adjusted position to look good with pic) */}
        <div className="absolute top-5 -left-4 md:-left-10 lg:left-0 bg-cardBg/90 backdrop-blur-sm border border-gray-800 p-4 rounded-2xl flex flex-col items-center shadow-2xl z-20 transition-transform hover:scale-105">
          <span className="text-primary mb-2 bg-primary/10 p-2 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
          <span className="text-white font-bold text-2xl tracking-tight">
            1+
          </span>
          <span className="text-gray-400 text-[10px] uppercase tracking-wider text-center mt-1 font-medium">
            Years of
            <br />
            Experience
          </span>
        </div>

        {/* Floating Badge 2: Available (Adjusted position) */}
        <div className="absolute bottom-8 -right-4 lg:-right-6 bg-cardBg/90 backdrop-blur-sm border border-gray-800 px-5 py-3 rounded-full flex items-center gap-3 shadow-2xl z-20">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-300 text-sm font-medium">
            Available for work
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
