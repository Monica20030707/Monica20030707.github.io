import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-beige py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Let's Connect */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#facebook" className="hover:text-gray-400">Facebook</a>
            <a href="#twitter" className="hover:text-gray-400">Twitter</a>
            <a href="#linkedin" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>

        {/* Middle: Email */}
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-sm">Contact me at:</p>
          <a href="mailto:your-email@example.com" className="text-beige font-semibold hover:underline">
            thuybohr@gmail.com
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} by Monica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
