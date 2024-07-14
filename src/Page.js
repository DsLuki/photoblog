import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import { getPosts } from "./components/db/Firebase";

function Page({ logout }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  console.log(posts);

  return (
    <>
      <Navbar logout={logout} />
      <BlogList posts={posts} />
    </>
  );
}

export default Page;
