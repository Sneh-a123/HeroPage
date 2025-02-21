import React, { useState } from "react";
import Image1 from "../assets/logo.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Image1} alt="Logo" className="w-28" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-7 text-lg">
        <li className="hover:text-gray-300 cursor-pointer">Our vision</li>
        <li className="hover:text-gray-300 cursor-pointer">Our team</li>
        <li className="hover:text-gray-300 cursor-pointer">Our projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact us</li>
        <li className="relative hover:text-gray-300 cursor-pointer">
          FR/EN
          <hr className="w-[22px] absolute left-[30px] mt-1" />
        </li>
      </ul>

      {/* Mobile Menu Icon (Fixed Position) */}
      <div className="md:hidden fixed top-5 right-5 z-50 text-white text-2xl">
        <i onClick={toggleMenu} className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} cursor-pointer`}></i>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 text-lg transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40`}
      >
        <ul className="space-y-5 text-center">
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Our vision</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Our team</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Our projects</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Contact us</li>
          <li className="relative hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>
            FR/EN
            <hr className="w-[22px] absolute left-[30px] mt-1" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
