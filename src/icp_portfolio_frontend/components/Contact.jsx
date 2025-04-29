import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submit

    emailjs
      .sendForm(
        "service_dl31dbe",
        "template_fyjzrcl",
        form.current,
        "mzGF4fDidm5LyDha_"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-900 min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-center">
      <div className="w-[90%] max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-accent">
          Contact
        </h2>

        <p className="text-lg md:text-xl text-primary mb-12">
          If you'd like to collaborate, discuss a project, or just connect —
          drop me a message below or reach out via{" "}
          <a
            href="https://www.linkedin.com/in/simon-lindsay-46b27552/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8BFFFE] hover:text-[#4DE5F2] transition-colors duration-300 no-underline"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="mailto:simon@simondlindsay.co.uk"
            className="text-[#8BFFFE] hover:text-[#4DE5F2] transition-colors duration-300 no-underline"
          >
            email
          </a>
          .
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto grid grid-cols-1 gap-6 mt-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="border border-gray-700 bg-gray-800 text-[#4DE5F2] placeholder-[#4DE5F2] rounded p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="border border-gray-700 bg-gray-800 text-[#4DE5F2] placeholder-[#4DE5F2] rounded p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            required
            className="border border-gray-700 bg-gray-800 text-[#4DE5F2] placeholder-[#4DE5F2] rounded p-3 focus:outline-none focus:ring-2 focus:ring-navy"
          ></textarea>
          <button
            type="submit"
            className="bg-navy text-[#4DE5F2] py-3 rounded hover:bg-[#4DE5F2] hover:text-navy transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
