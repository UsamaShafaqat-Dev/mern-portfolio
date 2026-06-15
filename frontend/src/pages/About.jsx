import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24 px-8 pb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-gray-800 pb-4 inline-block mx-auto flex justify-center w-fit">
          About <span className="text-primary ml-2">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center bg-cardBg border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* 👇 Image Yahan Update Ki Hai */}
          <div className="w-full md:w-1/3">
             <div className="w-full aspect-[4/5] bg-gray-900 rounded-2xl border-2 border-gray-800 flex items-center justify-center overflow-hidden relative group">
                <img 
                  src="/usama_hero.jpg" 
                  alt="Usama Shafaqat" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
             </div>
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3 space-y-6 text-gray-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-white">
              Hi, I'm <span className="text-primary">Usama Shafaqat</span>
            </h3>
            <p>
              I am a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). My journey into technology began after completing my F.Sc in Pre-Engineering, which provided me with a strong analytical foundation and a problem-solving mindset.
            </p>
            <p>
              I thrive on building scalable, responsive, and user-centric applications. My primary development environment is Visual Studio Code, and I utilize modern web technologies including Tailwind CSS, Bootstrap, and PostgreSQL. From managing databases on MongoDB Atlas and integrating Cloudinary for seamless media management, to deploying applications on Render and Vercel, I focus on delivering end-to-end solutions.
            </p>
            <p>
              I believe in continuous growth and professional development, continually enhancing my communication and technical skills to collaborate effectively on real-world projects.
            </p>
            
            {/* Personal Details Grid */}
            <div className="pt-6 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div>
                 <p className="text-sm text-gray-500 mb-1">Role</p>
                 <p className="text-white font-semibold text-sm">Full Stack Developer</p>
              </div>
              <div>
                 <p className="text-sm text-gray-500 mb-1">Education</p>
                 <p className="text-white font-semibold text-sm">F.Sc Pre-Engineering</p>
              </div>
              <div>
                 <p className="text-sm text-gray-500 mb-1">Location</p>
                 <p className="text-white font-semibold text-sm">Pakistan</p>
              </div>
              <div>
                 <p className="text-sm text-gray-500 mb-1">Experience</p>
                 <p className="text-white font-semibold text-sm">Open for Work</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;