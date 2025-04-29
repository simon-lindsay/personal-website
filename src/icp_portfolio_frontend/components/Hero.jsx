import React from "react";

const Hero = () => {
  return (
    // <section className="hero-section w-full flex flex-col justify-center items-center text-center"></section>
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <h1 className="text-accent">Automation & Data Specialist</h1>
          <p className="text-primary">
            Transforming operations and insights through smart automation and
            powerful data solutions.
          </p>
          <div class="hero-buttons">
            <a
              href="#projects"
              className="mt-6 inline-block bg-navy text-[#4DE5F2] py-3 px-6 rounded hover:bg-[#4DE5F2] hover:text-navy transition text-lg font-bold"
            >
              View Projects
            </a>
            <a
              href="/cv/simon-lindsay-cv.pdf"
              download
              className="mt-6 inline-block bg-navy text-[#4DE5F2] py-3 px-6 rounded hover:bg-[#4DE5F2] hover:text-navy transition text-lg font-bold"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
