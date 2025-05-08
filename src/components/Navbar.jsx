import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md dark:shadow-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50">
      <a href="#home" className="text-xl font-bold">Chang Chen</a>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#history" className="hover:underline">History</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {theme === "dark" ? (
            <FaSun className="h-5 w-5 text-yellow-400" />
          ) : (
            <FaMoon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
