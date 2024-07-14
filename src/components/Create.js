import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Create({ authUser }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    createdBy: authUser.email,
    createdAt: new Date(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-8">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-md p-4 mx-auto border-orange-500 border-2">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold text-orange-500">Create New Post</h2>
            <Link to="/" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Back to home page
            </Link>
          </div>
          <form>
            <label className="block mb-2">
              <span className="text-gray-700">Title:</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 outline-none rounded-sm border-2 focus:border-orange-500"
              />
            </label>
            <br />
            <label className="block mb-2">
              <span className="text-gray-700">Description:</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 outline-none rounded-sm border-2 focus:border-orange-500"
              />
            </label>

            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Create post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}