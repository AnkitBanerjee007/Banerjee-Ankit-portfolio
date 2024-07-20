import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const ModalProjects = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-3/4 max-h-[80vh] relative overflow-hidden">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>
        {project && (
          <div className="p-6 h-full overflow-y-auto">
            {/* Modal Heading */}
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

            {/* Modal Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />

            {/* Live and Code Links */}
            <div className="flex gap-2 mb-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-md text-center ${
                  project.liveLink
                    ? "bg-black text-white hover:bg-slate-400"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                aria-disabled={!project.liveLink}
              >
                Live
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-white text-black border-2 border-black font-medium rounded-md text-center hover:bg-slate-500 hover:text-white"
              >
                Code
              </a>
            </div>

            {/* Modal Description */}
            <p className="text-base">{project.longDescription}</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ModalProjects;
