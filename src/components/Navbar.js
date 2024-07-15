import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logout }) {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-bold text-gray-800 flex items-center"
        >
          <span className="text-orange-500 ml-2">Photo</span>blog
        </Link>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="w-48 pl-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <ul className="flex items-center ml-4">
            <li className="mr-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/create"
                className="text-gray-600 hover:text-gray-900 transition duration-300"
              >
                Create
              </Link>
            </li>
            <li>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                onClick={() => logout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
