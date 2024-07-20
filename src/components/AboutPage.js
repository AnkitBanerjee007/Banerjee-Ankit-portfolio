import React, { useState } from "react";
import Layout from "./Layout";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Mapping activeTab to the corresponding component
  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      default:
        return <Experience />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen p-4">
        {/* Tabs */}
        <div className="mb-8 w-full max-w-lg">
          <div className="flex flex-wrap justify-center space-x-4">
            {["experience", "skills", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md  font-medium transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-black shadow-lg text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Content */}
        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;