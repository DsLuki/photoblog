import React from 'react';

const BlogList = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center gap-8">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-md p-4 mx-auto border-orange-500 border-2">
          <h1 className="text-2xl font-bold mb-2">Blog title</h1>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-gray-600">Created by John Doe 2022-01-01</p>
          </div>
          <p className="text-lg mb-4">Blog description</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded outline-none">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;