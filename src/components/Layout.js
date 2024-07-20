import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex-1 w-full">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;