import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern web applications with best practices.",
      icon: (
        <svg
          className="w-10 h-10 text-purple-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Frontend Development",
      description:
        "Creating interactive UIs using React.js, Tailwind CSS and modern tools.",
      icon: (
        <svg
          className="w-10 h-10 text-cyan-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          ></path>
        </svg>
      ),
    },
    {
      title: "Backend Development",
      description:
        "Developing robust APIs and server-side applications with Node.js & Express.js.",
      icon: (
        <svg
          className="w-10 h-10 text-green-400 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <text
            x="12"
            y="15"
            fontSize="8"
            fill="currentColor"
            stroke="none"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            JS
          </text>
        </svg>
      ),
    },
    {
      title: "Database Management",
      description:
        "Designing and managing databases with MongoDB for scalable applications.",
      icon: (
        <svg
          className="w-10 h-10 text-green-500 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.42 2 6 5.86 6 10.5c0 3.86 1.88 6.94 4.19 8.68 1.15.86 1.63 2.16 1.63 2.82h.36c0-.66.48-1.96 1.63-2.82C16.12 17.44 18 14.36 18 10.5 18 5.86 15.58 2 12 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="px-8 py-4 w-full max-w-7xl mx-auto">
      {/* Main Single Card Container jisme sab kuch hai */}
      <div className="bg-cardBg border border-gray-800 p-8 md:p-10 rounded-[2rem] shadow-lg">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            What I do
          </h2>
          <div className="w-12 h-[3px] bg-primary rounded-full"></div>
        </div>

        {/* Services Layout - Horizontal icon and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {servicesData.map((service, index) => (
            <div key={index} className="flex items-start gap-4 group">
              {/* Icon Container */}
              <div className="mt-1 transition-transform group-hover:-translate-y-1 duration-300">
                {service.icon}
              </div>

              {/* Text Container */}
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pr-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
