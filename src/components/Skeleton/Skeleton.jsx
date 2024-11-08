import React from 'react';

const SkeletonList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-gray-300 rounded-lg shadow-md p-4 animate-pulse">
          <div className="w-full h-48 bg-gray-400 rounded mb-4"></div>
          <div className="h-4 bg-gray-400 rounded mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonList;
