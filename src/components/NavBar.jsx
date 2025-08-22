import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DownImg from "../assets/down.png";
import UpImg from "../assets/up.png";
import MSGImg from "../assets/msg.png";
import AlertImg from "../assets/alert.png";
import UserImg from "../assets/user.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  useEffect(() => {
    toggleDark();
  }, [dark]);
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#030C1B]">
      {/* Apply margin-left only on large screens */}
      <div className="ml-0 sm:ml-60">
        <div className="max-w-screen-xl flex items-end justify-between p-4 space-x-6">
          {/* Left: Revenue Info */}
          <div className="ml-3">
            <h1 className="text-md font-semibold whitespace-nowrap dark:text-white">
              Total Revenue
            </h1>

            {/* Stack on small screens, row on medium+ screens */}
            <div className="flex flex-row sm:space-x-4 sm:items-center gap-2 sm:gap-1">
              <span className="text-2xl sm:text-3xl font-semibold dark:text-white">
                $32,2323
              </span>

              {/* Down arrow */}
              <div className="flex items-center gap-1">
                <img src={DownImg} alt="down" className="w-2.5 h-2" />
                <p className="text-xs font-semibold dark:text-[#FF4588] text-[#f85591]">
                  $1.32
                </p>
              </div>

              {/* Up arrow */}
              <div className="flex items-center gap-1">
                <img src={UpImg} alt="up" className="w-2.5 h-2" />
                <p className="text-xs font-semibold dark:text-[#19C332] text-[#24ce3d]">
                  $1.32
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Search bar */}
          <div className="flex-1 max-w-md">
            <form className="relative block w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg 
                bg-gray-50 focus:ring-gray-500 focus:border-gray-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </form>
          </div>

          {/* Right: Icons & User */}
          <div className="flex items-center gap-3 sm:gap-6 relative">
            {/* Messages */}
            <button
              type="button"
              className="hover:opacity-80 transition"
              aria-label="Messages"
            >
              <img src={MSGImg} alt="Messages" className="w-4 sm:w-5" />
            </button>

            {/* Alerts */}
            <button
              type="button"
              className="hover:opacity-80 transition"
              aria-label="Alerts"
            >
              <img src={AlertImg} alt="Alerts" className="w-4 sm:w-5" />
            </button>

            {/* User menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center justify-center bg-gray-800 rounded-full 
               focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 
               hover:opacity-90 transition"
              id="user-menu-button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                src={UserImg}
                alt="User"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
            </button>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-12 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                <ul>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#settings"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logout"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </a>
                  </li>
                  <li>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={dark}
                        onChange={() => setDark(!dark)}
                      />
                      <div className="ml-3.5 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Dark Mode
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
