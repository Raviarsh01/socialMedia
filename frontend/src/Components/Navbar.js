import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="shadow py-3 flex justify-between px-5 items-center navbarFixed">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <h2 className="text-gray-800 text-xl font-semibold ms-2">
            Social Connect
          </h2>
        </div>
        <div>
          <Link to="/home" className="font-medium">
            Home
          </Link>
          <Link to="/posts" className="mx-8 font-medium">
            Posts
          </Link>
          <Link to="/profile" className="font-medium">
            Profile
          </Link>
        </div>
        <div>
          <div class="relative">
            <input
              type="search"
              class="w-[270px] pl-8 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Find Friend"
            />

            <i class="fa-solid fa-magnifying-glass  leading-0 absolute  text-xl top-2 left-2 text-gray-400 focus:outline-none  transition-colors"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
