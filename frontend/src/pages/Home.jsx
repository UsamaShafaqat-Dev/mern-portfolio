import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact"; // Contact import kiya
import Footer from "../components/Footer"; // Footer import kiya

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <AboutMe />
      <Contact /> {/* Contact section */}
      
    </main>
  );
};

export default Home;
