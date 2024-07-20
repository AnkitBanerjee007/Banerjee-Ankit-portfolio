import React, { useState } from 'react';
import ModalProjects from './ModalProjects';
import Layout from './Layout';
import projectData from '../data/ProjectsData.json';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    
    <Layout>
    <div className="px-4 md:px-8 lg:px-16 py-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {console.log(project)}
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                {/* Project Name */}
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                
                {/* Project Description */}
                <p className="text-base mb-2">{project.description}</p>

                {/* Technology Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-200 text-black rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mb-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 text-white font-normal rounded-md text-center ${project.liveLink ? 'bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black' : 'bg-gray-400 cursor-not-allowed'}`}
                    aria-disabled={!project.liveLink}
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-white text-black border-2 border-black font-normal rounded-md text-center hover:bg-black hover:text-white"
                  >
                    Code
                  </a>
                </div>

                {/* Readmore Button */}
                <button
                  onClick={() => openModal(project)}
                  className="mt-auto py-2 px-4 text-blue-600 font-normal rounded-md text-center hover:text-blue-800"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ModalProjects
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
    </Layout>
  );
};


export default Project;