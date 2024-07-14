import React from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";

function Page({ authUser, logout }) {

  console.log(authUser)

  return (
    <>    
      <Navbar logout={logout} />
      <BlogList />
    </>

  );
}

export default Page;

