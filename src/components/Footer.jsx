import React from 'react';
import MailIcon from '../../public/email.png';
import handshakeIcon from '../../public/handshake.png';
import githubIcon from '../../public/github.png';
import linkedinIcon from '../../public/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-black py-8" id="contact">
      <div className=" text-white container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Let's Connect */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <div className="flex space-x-4 my-4 md:my-0 border-t pt-4">
            <a href="https://github.com/Monica20030707">
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-10 h-10 p-1 rounded-full border-2 border-white transition-transform duration-300 hover:scale-105"
              />
            </a>
            <a href="https://www.linkedin.com/in/thuy-nguyen-46505121b/">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 p-1 rounded-full border-2 border-white transition-transform duration-300 hover:scale-105"
              />
            </a>
            <a href="https://app.joinhandshake.com/profiles/36910406">
              <img
                src={handshakeIcon}
                alt="Handshake"
                className="w-10 h-10 p-1 rounded-full border-2 border-white transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Middle: Email */}
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-sm">Contact me at:</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <img src={MailIcon} alt="Mail Icon" className="w-6 h-6" />
            <a
              href="mailto:thuybohr@gmail.com"
              className="font-semibold hover:underline"
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
