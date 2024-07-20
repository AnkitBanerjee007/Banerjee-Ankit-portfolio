import React from 'react';
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaJava } from 'react-icons/fa'; // Importing some example icons
import { TbFileTypeSql } from "react-icons/tb";
import { SiCsharp, SiSpringboot, SiDotnet, SiMicrosoftazure, SiTailwindcss, SiDocker } from "react-icons/si";

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-600" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-blue-300" /> },
  { name: 'JAVA', icon: <FaJava size={40} className="text-orange-600" /> },
  { name: 'SQL', icon: <TbFileTypeSql size={40} className="text-orange-600" /> },
  { name: 'C#', icon: <SiCsharp size={40} className="text-purple-600" /> },
  { name: 'SpringBoot', icon: <SiSpringboot size={40} className="text-green-600" /> },
  { name: '.Net', icon: <SiDotnet size={40} className="text-purple-600" /> },
  { name: 'Azure', icon: <SiMicrosoftazure size={40} className="text-blue-600" /> },
  { name: 'Docker', icon: <SiDocker size={40} className="text-blue-400" /> },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="p-4 md:p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 text-center"
        >
          <div className="mb-2">
            {skill.icon}
          </div>
          <p className="text-lg font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;