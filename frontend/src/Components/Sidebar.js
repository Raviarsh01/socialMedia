import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [tabs, setTabs] = useState(1);
  const { pathname } = useLocation();
  return (
    <div className="flex">
      <div
        class={`px-3 h-screen ${
          (tabs == 1 || tabs == 3 || tabs == 5) && "w-full"
        }`}
      >
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
          <h2
            className={`text-gray-800 text-xl font-semibold ms-2 ${
              (tabs == 2 || tabs == 4) && "hideElement"
            }`}
          >
            Social Connect
          </h2>
          <hr className="text-gray-800" />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <Link
            to="/home"
            onClick={() => setTabs(1)}
            className={`flex items-center hover:bg-gray-100 py-1 px-2 ${
              pathname == "/home" && tabs == 1 && "bg-gray-100"
            }`}
          >
            <i class="icon22-sidebar fa-regular fa-house"></i>
            <p
              className={`font-medium ms-2 ${
                (tabs == 2 || tabs == 4) && "hideElement"
              }`}
            >
              Home
            </p>
          </Link>

          <button
            onClick={() => setTabs(2)}
            className={`flex items-center hover:bg-gray-100 py-1 px-2 ${
              tabs == 2 && "bg-gray-100"
            }`}
          >
            <i class="icon22-sidebar fa-regular fa-magnifying-glass"></i>
            <p
              className={`font-medium ms-2 ${
                (tabs == 2 || tabs == 4) && "hideElement"
              }`}
            >
              Search
            </p>
          </button>

          <Link
            to="/messages"
            onClick={() => setTabs(3)}
            className={`flex items-center hover:bg-gray-100 py-1 px-2 ${
              pathname == "/messages" && tabs == 3 && "bg-gray-100"
            }`}
          >
            <i class="icon22-sidebar fa-regular fa-message"></i>
            <p
              className={`font-medium ms-2 ${
                (tabs == 2 || tabs == 4) && "hideElement"
              }`}
            >
              Messages
            </p>
          </Link>

          <button
            onClick={() => setTabs(4)}
            className={`flex items-center hover:bg-gray-100 py-1 px-2 ${
              tabs == 4 && "bg-gray-100"
            }`}
          >
            <i class="icon22-sidebar fa-regular fa-bell"></i>
            <p
              className={`font-medium ms-2 ${
                (tabs == 2 || tabs == 4) && "hideElement"
              }`}
            >
              Notifications
            </p>
          </button>

          <Link
            to="/profile"
            onClick={() => setTabs(5)}
            className={`flex items-center hover:bg-gray-100 py-1 px-2 ${
              pathname == "/profile" && tabs == 5 && "bg-gray-100"
            }`}
          >
            <i class="icon22-sidebar fa-regular fa-user"></i>
            <p
              className={`font-medium ms-2 ${
                (tabs == 2 || tabs == 4) && "hideElement"
              }`}
            >
              Profile
            </p>
          </Link>
        </div>
      </div>

      {tabs == 2 && (
        <div className="bg-red-100 w-full">
          <div class="relative">
            <input
              type="search"
              class="w-[270px] pl-8 py-[3px] border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none  transition-colors"
              placeholder="Find Friends, Groups, People"
            />

            <i class="fa-solid fa-magnifying-glass leading-0 absolute  text top-2 left-2 text-gray-400 focus:outline-none  transition-colors"></i>
          </div>
        </div>
      )}
      {tabs == 4 && <div className="bg-red-100 w-full">Notofications</div>}
    </div>
  );
};

export default Sidebar;
