'use client';

import { useState } from "react";

const AdminHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-6 sm:p-8 lg:p-10">
        <h1 className="text-yellow-400 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Dash</h1>

        <div className="relative">
          <div className="flex">
            <button className="w-12 h-12 mr-3 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center shadow-lg focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </button>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 448 512"
                stroke="currentColor"
              >
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z"
                />
              </svg>
            </button>
          </div>

          {dropdownOpen && (
            <div className="p-20 absolute bg-white right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-20"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
