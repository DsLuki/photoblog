import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logout }) {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link to={"/"} className="text-2xl font-bold">
          <span className="text-orange-500">Photo</span>blog
        </Link>
        <input
          type="search"
          placeholder="Search..."
          className="ml-4 pl-2 py-1 border-2 rounded-md outline-none"
        />
      </div>
      <ul className="flex items-center gap-4">
        <Link to={"/"} className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">
          Home
        </Link>
        <Link to={"/create"} className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">
            Create
        </Link>
        <li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => logout()}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
