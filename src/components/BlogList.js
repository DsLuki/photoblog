import React from "react";

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center gap-8">
        {posts.map((post) => (
          <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-md p-4 border-orange-500 border-2">
              <h1 className="text-lg font-bold mb-2">{post.title}</h1>
              <div className="flex justify-between mb-4">
                <p className="text-sm text-gray-600">
                  Created by {post.author}
                </p>
              </div>
              <p className="text-lg mb-4">{post.description}</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
