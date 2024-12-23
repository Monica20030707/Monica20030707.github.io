import React from 'react';
import MailIcon from '../../public/email.png';

const Footer = () => {
  return (
    <footer className="bg-black text-beige py-8" id='contact'>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Let's Connect */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#twitter" className="hover:text-gray-400">GitHub</a>
            <a href="#facebook" className="hover:text-gray-400">LinkedIn</a>
            <a href="#linkedin" className="hover:text-gray-400">Handshake</a>
          </div>
        </div>

        {/* Middle: Email */}
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-sm">Contact me at:</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            
            <img src={MailIcon} alt="Mail Icon" className="w-6 h-6 " />
            <a
              href="mailto:thuybohr@gmail.com"
              className=" font-semibold hover:underline"
            >
              thuybohr@gmail.com
            </a>
          </div>
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
