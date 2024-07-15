import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Page from "./Page";
import { auth } from "./components/db/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Create from "./components/Create";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      setLoading(false);
    });
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setLoggedOut(true);
      setTimeout(() => {
        setAuthUser(null);
        setLoggedOut(false);
      }, 700);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return;

  if (loggedOut) {
    return (
      <div className="absolute top-0 left-0 w-full h-full text-lg flex justify-center items-center">
        Logging out
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <Page authUser={authUser} logout={logout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/create"
          element={
            authUser ? <Create authUser={authUser} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!authUser ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
