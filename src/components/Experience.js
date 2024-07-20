import React, { useState } from 'react';
import Modal from './Modal';
import experienceData from '../data/ExperienceData.json';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const handleReadMoreClick = (fullDescription) => {
    setSelectedExp(fullDescription);
  };

  const handleCloseModal = () => {
    setSelectedExp(null);
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      {experienceData.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Left Half: Years */}
          <div className="flex-shrink-0 w-full md:w-1/4 bg-black p-4 text-center border-b md:border-b-0 md:border-r">
            <p className="text-lg font-semibold text-white">{exp.years}</p>
            <p className="text-sm font-light text-white">{exp.tenure}</p>
          </div>

          {/* Right Half: Company Details */}
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
            <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
            <p className="text-base mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-200 text-black rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => handleReadMoreClick(exp.fullDescription)}
              className="text-blue-600 hover:underline"
            >
              Read More
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal
        isOpen={!!selectedExp}
        onClose={handleCloseModal}
        content={selectedExp}
      />
    </div>
  );
};

export default Experience;