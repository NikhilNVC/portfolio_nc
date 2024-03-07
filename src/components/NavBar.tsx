import { useState } from "react";
import image from "./../assets/moon-dark-theme.svg";
import closeimage from "./../assets/close.png";

const NavBar = () => {
  const [displayHamburger, setDisplayHamburger] = useState(false);

  console.log(displayHamburger);

  const HamburgerMenu = () => {
    return (
      <ul className="md:hidden absolute bg-indigo-900  left-0 top-0 w-full p-10 rounded-b-2xl text-white text-center">
        <li>
          <a href="#">homepage</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">works</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <div
            className="flex place-content-center justify-center align-middle pt-4 cursor-pointer"
            onClick={() => setDisplayHamburger(!displayHamburger)}
          >
            <img
              src={closeimage}
              className="font-bold underline uppercase w-4"
            />
          </div>
        </li>
      </ul>
    );
  };

  return (
    <nav className="fixed w-full top-0 bg-white z-10 h-20">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <span className="text-2xl font-bold p-2 text-indigo-900">NIKHIL</span>
        <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
          <li className="hover:text-gray-300">
            <a href="#">homepage</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">about me</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#projects">projects</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">contact</a>
          </li>
        </ul>
        <img
          className="h-8 w-6 cursor-pointer hidden md:block hover:shadow-inner rounded"
          src={image}
          alt="dark mode"
        />

        {/* Hamgurger icon div */}
        <div
          className="space-y-1 md:hidden cursor-pointer"
          onClick={() => setDisplayHamburger(!displayHamburger)}
        >
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div>

        {/* //display hamburger menu based on state variable */}
        {displayHamburger && <HamburgerMenu />}
      </div>
    </nav>
  );
};
export default NavBar;
