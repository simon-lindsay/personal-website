import React from "react";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-700 text-white py-6 px-4 text-center shadow">
        <h1 className="text-3xl sm:text-4xl font-bold">Simon Lindsay</h1>
        <p className="text-base sm:text-lg mt-2">
          Specialist in Automation and Financial Data
        </p>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-6 space-y-16">
        <section className="text-center mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Welcome</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I build powerful, scalable automation systems and data tools for the
            finance industry. With hands-on experience in operations,
            reconciliations, settlements, and regulatory workflows, I help
            financial firms move faster and smarter through clean, modern code.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Entity Mapper:</strong> Automated entity-to-parent mapping
              for credit risk
            </li>
            <li>
              <strong>Workflow Automation:</strong> Python-based tools that
              eliminated manual ops tasks
            </li>
            <li>
              <strong>Reconciliation Dashboard:</strong> Visual tool for faster
              exception management
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              Python
            </span>
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              Pandas
            </span>
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              Selenium
            </span>
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              SQL
            </span>
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              Git
            </span>
            <span className="bg-white px-4 py-2 rounded shadow text-center">
              Internet Computer
            </span>
          </div>
        </section>

        <ContactForm />
      </main>

      <footer className="text-center text-xs sm:text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Simon Lindsay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
