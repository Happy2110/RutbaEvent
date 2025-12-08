import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { navLinkData } from "../../Constants";
import rutbaLogo from "../../Assets/logo/rutbalogorbg.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-10 px-5 bg-white text-sm font-sans font-medium shadow-md border-b w-full max-w-full overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Website Title */}
          <img
            src={rutbaLogo}
            alt="RUTBA EVENT"
            className=" h-15 md:h-15 lg:h-20"
          />

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-pink-600 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>

          {/* Desktop Navbar Links */}
          <ul className="hidden sm:flex flex-wrap items-center lg:w-1/2 justify-between">
            {navLinkData.map(({ id, title, link }) => (
              <li
                key={id}
                className="hover:text-amber-500 transition duration-300"
              >
                <Link
                  activeClass="text-yellow-600 underline  underline-offset-4"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer">
                {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`max-w-full sm:hidden flex flex-col items-center bg-white transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Navbar Links */}
          {navLinkData.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-lg hover:text-red-600 transition duration-300 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
