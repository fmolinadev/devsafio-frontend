import React from 'react';
import logo from '../../assets/images/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png';
import { AiOutlineLinkedin } from 'react-icons/ai';
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-[#1E239A] text-neutral-content text-center flex">
      <div className="items-center">
        <img className="w-20 md:w-40" src={logo} alt="Logo" />
      </div>
      <p className="justify-center mx-auto text-sm md:text-base">
        Copyright © {year} - Devsafio
      </p>
      <div className="justify-items-end">
        <a
          className="flex"
          href="https://www.linkedin.com/company/devsafio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin
            size="2rem"
            href="https://www.linkedin.com/company/devsafio/"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
