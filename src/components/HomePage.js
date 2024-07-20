import React from 'react';
import Layout from './Layout';
import Typewriter from 'typewriter-effect';

const HomePage = () => {

// Function to handle PDF download
    const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the PDF
    link.href = '/docs/Ankit_Banerjee_Resume_N.pdf'; // Update the path to your PDF file
    // Set the download attribute to specify the filename
    link.download = 'Ankit_Banerjee_Resume_N.pdf';
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Programmatically click the anchor element
    link.click();
    // Remove the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <header>
        <h1 className="text-lg font-bold text-center mb-8 text-black">
        <Typewriter className="font-extrabold"
            options={{
              strings: ['Welcome', 'नमस्ते', '¡Bienvenido'],
              autoStart: true,
              loop: true,
              cursor: '|',
              delay: 75,
            }}
          />
          </h1>
          <p className="text-lg font-normal">Hi, I'm Ankit Banerjee, a Software Engineer.</p>
        </header>
        <button
          onClick={handleDownload}
          className="mt-8 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          Download Resume
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;