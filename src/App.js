import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Page from "./Page";
import { auth } from "./components/auth/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setAuthUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return;
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
