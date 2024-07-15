import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./db/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
          setError(error.message);
        }, 500);
      });
  };

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full text-lg flex justify-center items-center">
          Loading...
        </div>
      )}
      <div
        className={`h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 transition-all ${
          loading && "opacity-20"
        }`}
      >
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

            <button className="w-full  bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              Log in
            </button>

            <span className="flex justify-center">
              <Link
                to={"/restore-password"}
                className="text-sm mt-2 font-medium hover:text-blue-600 transition-all"
              >
                Forgot password?
              </Link>
            </span>

            <hr className="mt-2 border-2 rounded-md" />

            <span className="flex items-center justify-center text-lg my-2">
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
        {error && (
          <div className="absolute top-5 bg-red-500 text-md font-medium mx-auto p-4">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
