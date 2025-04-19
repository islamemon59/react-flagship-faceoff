import React from "react";
import { NavLink } from "react-router";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/cart"><BsFillCartCheckFill size={20} /></NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/favorite"><MdFavorite size={20} /></NavLink>
          </li>
          </ul>
        </div>
        <a className="md:text-3xl font-medium">FlagshipFaceOff</a>
      </div>
      <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/cart"><BsFillCartCheckFill size={20} /></NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'text-indigo-600' : '')} to="/favorite"><MdFavorite size={20} /></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
