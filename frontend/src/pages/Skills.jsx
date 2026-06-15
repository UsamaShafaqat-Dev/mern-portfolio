import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"],
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB Atlas", "PostgreSQL", "Cloudinary", "Mongoose"],
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "Visual Studio Code",
        "Render",
        "Vercel",
        "Postman",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            A diverse toolkit of modern technologies, frameworks, and tools I
            use to build robust full-stack applications.
          </p>
          <div className="w-24 h-[3px] bg-primary rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-cardBg border border-gray-800 p-8 rounded-3xl shadow-xl hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-background border border-gray-700 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
