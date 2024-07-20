import React from 'react';
import educationData from '../data/EducationData.json';

const Education = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Left Half: Date */}
          <div className="flex-shrink-0 w-full md:w-1/4 bg-black text-white p-4 text-center border-b md:border-b-0 md:border-r">
            <p className="text-lg font-semibold">{edu.date}</p>
          </div>

          {/* Right Half: School Details */}
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
            <h4 className="text-lg font-semibold mb-2">{edu.board}</h4>
            <p className="text-base mb-4">Percentage/GPA : {edu.percentage}</p>
            <p className="text-base">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;