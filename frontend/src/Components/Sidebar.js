import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="px-5 h-screen">
        <div className="flex items-center mt-[1rem]">
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
          <hr className="text-gray-800" />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div className="flex items-center hover:bg-gray-100 py-1 px-7">
            <i class="fa-regular fa-house"></i>
            <Link to="/home" className="font-medium ms-2">
              Home
            </Link>
          </div>
          <div className="flex items-center hover:bg-gray-100 py-1 px-7">
            <i class="fa-regular fa-magnifying-glass"></i>
            <Link to="" className="font-medium ms-2">
              Search
            </Link>
          </div>
          <div className="flex items-center hover:bg-gray-100 py-1 px-7">
            <i class="fa-regular fa-message"></i>
            <Link to="/messages" className="font-medium ms-2">
              Messages
            </Link>
          </div>
          <div className="flex items-center hover:bg-gray-100 py-1 px-7">
            <i class="fa-regular fa-user"></i>
            <Link to="/profile" className="font-medium ms-2">
              Profile
            </Link>
          </div>
        </div>
        {/* <div>
          <div class="relative">
            <input
              type="search"
              class="w-[270px] pl-8 py-[3px] border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none  transition-colors"
              placeholder="Find Friend"
            />

            <i class="fa-solid fa-magnifying-glass leading-0 absolute  text top-2 left-2 text-gray-400 focus:outline-none  transition-colors"></i>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
