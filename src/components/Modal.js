import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>
        <div className="text-base">
          {content}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;