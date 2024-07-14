import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./db/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Add a state for error message

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setError(error.message); // Update the error state with the error message
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="max-w-md w-full lg:w-1/2 xl:w-1/3 p-4 bg-white rounded shadow-md mx-8">
        <form onSubmit={handleLogin}>
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

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <button className="w-full  bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Log in
          </button>

          <hr className="mt-4 border-2 rounded-md" />

          <span className="flex items-center justify-center text-lg my-4">
            don't have account?
          </span>
        </form>

        <span className="flex justify-center">
          <Link to={"/register"}>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Get started
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}
