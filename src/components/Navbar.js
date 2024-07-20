import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-2 py-2">
      <nav className="flex justify-center space-x-2">
        {/* <NavLink to="/" className="text-black" activeClassName="font-bold">Home</NavLink> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-slate-100 rounded-full px-4 py-2"
              : "text-black-500 px-4 py-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-slate-100 rounded-full px-4 py-2"
              : "text-black px-4 py-2"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-slate-100 rounded-full px-4 py-2"
              : "text-black px-4 py-2"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-slate-100 rounded-full px-4 py-2"
              : "text-black px-4 py-2"
          }
        >
          Contact
        </NavLink>
      </nav>
    </footer>
  );
};

export default Navbar;