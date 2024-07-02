import React from "react";
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 cursor-pointer">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaGithub/>
        <FaLinkedin/>
        <FaFacebook/>
      </div>
    </nav>
  );
};

export default Navbar;
