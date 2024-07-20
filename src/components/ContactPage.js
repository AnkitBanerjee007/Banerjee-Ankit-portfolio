import Layout from './Layout';
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const LINKEDIN_URI = 'https://www.linkedin.com/in/banerjee-ankit';
  const GITHUB_URI = 'https://github.com/AnkitBanerjee007';
  const TWITTER_URI = 'https://x.com/AnkitBanerjee31';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(form)
      });

      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        form.reset();
      } else {
        setError('Failed to send your message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-screen-lg">
        {/* First Half: Information */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">I am open to taking up projects and new jobs. Feel free to reach out!</p>
          <p className="text-lg mb-4 text-red-600">Form is under maintainance!</p>
          <p className="text-lg mb-4">Please send an email at</p>
          <p className="text-xl font-semibold mb-4">ankitbanerjee983@gmail.com</p>

          {/* Vertical line with social media icons */}
          
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href={LINKEDIN_URI} target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-gray-700">
                <FaLinkedin />
              </a>
              <a href={GITHUB_URI} target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-700">
                <FaGithub />
              </a>
              <a href={TWITTER_URI} target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-300 hover:text-gray-700">
                <FaTwitter />
              </a>
            </div>
        </div>

        {/* Second Half: Form */}
        <div className="flex-1">
          <form action="https://formsubmit.co/your-email" method="POST" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://your-website-url" />

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-slate-500"
            >
              Send Message
            </button>

            {success && <p className="mt-4 text-green-500">{success}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactPage;