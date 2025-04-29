import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <section id="hero" className="bg-[#030303]">
        <Hero />
      </section>

      <section
        id="about"
        className="bg-[#123458] scroll-mt-[104px] md:scroll-mt-24"
      >
        <About />
      </section>

      <section
        id="projects"
        className="bg-[#030303] scroll-mt-[104px] md:scroll-mt-24"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="bg-[#123458] scroll-mt-[104px] md:scroll-mt-24"
      >
        <Contact />
      </section>
    </main>
  );
};

export default Home;
