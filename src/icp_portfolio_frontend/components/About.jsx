import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-96px)] flex items-center justify-center bg-[#111827]">
      <div className="w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12 md:pt-0">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/simon-avatar.jpg"
            alt="Profile of Simon Lindsay"
            className="rounded-full w-64 h-64 object-cover border-4 shadow-lg"
            style={{ borderColor: "#4DE5F2" }}
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-accent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-primary">
            I’m an automation and data specialist passionate about designing
            smart solutions that simplify complex workflows and unlock business
            insights. With a strong background in operational processes and
            technical development, I bridge the gap between business needs and
            technical execution. I focus on building tools that save time,
            reduce risk, and empower better decision-making through clean,
            actionable data.
            <br />
            <br />
            Whether it’s automating manual processes, streamlining operations,
            or developing intelligent data pipelines, I’m driven by a simple
            goal: to help businesses work smarter, faster, and more confidently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
