import React from "react";

export default function Navbar({ logout }) {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">
          <span className="text-orange-500">Photo</span>blog
        </h2>
        <input
          type="search"
          placeholder="Search..."
          className="ml-4 pl-2 py-1 border-2 rounded-md outline-none"
        />
      </div>
      <ul className="flex items-center gap-4">
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">
          Home
        </li>
        <li className="text-gray-600 hover:text-gray-900 cursor-pointer text-lg">
          Create
        </li>
        <li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => logout()}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
