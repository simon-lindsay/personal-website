import React from "react";

const Projects = () => {
  return (
    <section className="bg-charcoal text-accent px-6 min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-96px)] flex flex-col md:justify-center pt-12 pb-12">
      <div className="flex-grow w-[90%] max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-accent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              Unmatched Trade Tool
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Developed a Python tool to aggregate Prime Broker alleges, detect
              unmatched trades, and trace root causes, improving trade matching
              accuracy and reducing operational breaks.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              Unmatched Trade Analysis
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Led a data-driven investigation into trade breaks, built an
              interactive dashboard to track accountability, set corrective
              action plans, and monitored implementation to drive lasting
              operational improvements.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              FX Trade Compression Tool
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Developed a tool to identify compression-eligible FX trades from
              counterparty data, link them to internal trades, and group them
              for compression based on trading desk criteria.
            </p>
          </div>
          {/* Project Card 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              Trade Term Sheet Reconciliation Tool
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Built a reconciliation engine that extracted JSON data from the
              front office booking system to validate trades against client term
              sheets, enhancing accuracy and reducing booking errors.
            </p>
          </div>

          {/* Project Card 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              Entity-to-Parent Credit Risk Mapping
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Developed a tool to map trading entities to parent counterparties,
              providing clear visibility into ultimate credit risk exposure and
              improving counterparty risk management.
            </p>
          </div>

          {/* Project Card 6 w*/}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-3">
              Options Trade Lifecycle Management Tool
            </h3>
            <p className="text-lg md:text-xl text-primary">
              Built a tool to monitor options expiry, determine in-the-money or
              out-of-the-money status, handle barrier event triggers, and
              automate appropriate post-expiry actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
