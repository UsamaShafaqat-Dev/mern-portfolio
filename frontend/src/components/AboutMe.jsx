import React from "react";

const AboutMe = () => {
  return (
    <section className="px-8 py-16 w-full max-w-7xl mx-auto">
      <div className="bg-cardBg border border-gray-800 rounded-[2rem] p-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 shadow-2xl relative overflow-hidden group">
        {/* Glow Effect (Behind picture) */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>

        {/* 👇 New Column: Profile Picture */}
        <div className="lg:w-1/4 w-full flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-full lg:h-auto lg:aspect-square bg-background border border-gray-800 rounded-[2rem] p-3 shadow-inner group overflow-hidden">
            {/* Note: Make sure 'usama_pic.jpg' exists in your /public folder */}
            <img
              src="/usama_hero.jpg"
              alt="Usama Shafaqat"
              className="w-full h-full object-cover object-top rounded-[1.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        {/* Column: About Text (Adjusted width) */}
        <div className="lg:w-2/4 w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="text-primary bg-primary/10 p-2.5 rounded-xl">
              {/* Custom SVG Icon from UI */}
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            I'm a passionate MERN Stack Developer who loves building clean,
            efficient and scalable web applications. I focus on writing clean
            code and delivering great user experiences. I strive to create
            impactful real-world solutions that turn ideas into reality.
          </p>
        </div>

        {/* Right Side: Stats Grid (Updated Styling) */}
        <div className="lg:w-1/4 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-5 bg-background border border-gray-800 p-6 rounded-[1.5rem] shadow-inner mt-8 lg:mt-0">
          <div className="flex flex-col items-center justify-center text-center border border-gray-800 bg-cardBg p-5 rounded-2xl shadow-md transition-colors hover:border-primary/50">
            <h3 className="text-3xl font-bold text-primary mb-1.5">5+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Projects Completed
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center border border-gray-800 bg-cardBg p-5 rounded-2xl shadow-md transition-colors hover:border-primary/50">
            <h3 className="text-3xl font-bold text-primary mb-1.5">5+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Happy Clients
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center border border-gray-800 bg-cardBg p-5 rounded-2xl shadow-md transition-colors hover:border-primary/50">
            <h3 className="text-3xl font-bold text-primary mb-1.5">1+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Years Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center border border-gray-800 bg-cardBg p-5 rounded-2xl shadow-md transition-colors hover:border-primary/50">
            <h3 className="text-3xl font-bold text-primary mb-1.5">100%</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
