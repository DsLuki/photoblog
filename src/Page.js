import React from "react";
import Navbar from "./components/Navbar";

function Page({ authUser, logout }) {
  return (
    <Navbar logout={logout} />
  );
}

export default Page;

