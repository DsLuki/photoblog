import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./db/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="max-w-md w-full lg:w-1/2 xl:w-1/3 p-4 bg-white rounded shadow-md mx-8">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700 border-2 border-gray-300 rounded focus:outline-orange-500"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700 border-2 border-gray-300 rounded focus:outline-orange-500"
              placeholder="password"
            />
          </div>

          <button className="w-full  bg-orange-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Create account
          </button>

          <hr className="my-4 border-2 rounded-md" />
        </form>
        <Link to={"/login"}>
          <span className="text-lg cursor-pointer px-1 text-gray-700 hover:border-b-2">
            Back to login
          </span>
        </Link>
      </div>
    </div>
  );
}
