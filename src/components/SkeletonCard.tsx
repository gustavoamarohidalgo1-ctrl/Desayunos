'use client';
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 animate-pulse">
      <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6"></div>
      <div className="flex justify-between mb-4">
        <div className="w-1/2 h-6 bg-gray-200 rounded-full"></div>
        <div className="w-1/4 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full mb-2"></div>
      <div className="w-2/3 h-4 bg-gray-200 rounded-full mb-8"></div>
      <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
    </div>
  );
};

export default SkeletonCard;
