import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
