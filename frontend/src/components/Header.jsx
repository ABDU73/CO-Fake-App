import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FaBars, FaTimes } from 'react-icons/fa';  // Make sure you're importing the icons

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 py-2">
      <div className="max-w-screen-xl px-4 m-6 flex items-center justify-center">
        {/* Logo (left side) */}
        <div className="flex items-center">
          <img src="./img/logo.png" className="w-1/4" alt="Logo" />
        </div>

        {/* Menu (right side) */}
        <div className="hidden md:flex w-full">
          <ul className="font-medium flex flex-row space-x-8 mt-0 border-0 bg-white dark:bg-gray-800">
            <li>
              <Link
                to="/"
                className="underline-animation py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-blue-500 transition duration-300 transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/servers"
                className="underline-animation py-2 px-3 text-gray-400 rounded md:bg-transparent md:p-0 hover:text-blue-500 transition duration-300 transform hover:scale-105"
              >
                Servers
              </Link>
            </li>
            <li>
              <Link
                to="/apply"
                className="underline-animation py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 transition duration-300 transform hover:scale-105"
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="underline-animation py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 transition duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-slate-400">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-800 text-white mt-4 px-4 py-6 rounded-lg`}
      >
        <ul className="font-medium flex flex-col space-y-4">
          <li>
            <Link
              to="/"
              className="underline-animation block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/servers"
              className="underline-animation block py-2 px-3 text-white hover:bg-gray-700 rounded hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              Servers
            </Link>
          </li>
          <li>
            <Link
              to="/apply"
              className="underline-animation block py-2 px-3 text-white hover:bg-gray-700 rounded hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="underline-animation block py-2 px-3 text-white hover:bg-gray-700 rounded hover:text-blue-500 transition duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
