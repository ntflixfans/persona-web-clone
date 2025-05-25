
import React from 'react';

export const Services = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🛠️</span>
        <div>
          <h2 className="text-xl font-bold text-white">Services</h2>
          <p className="text-gray-400 text-sm">My services are tailored to your needs and budget</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2">Web Development</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2">Web Design</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2">Web Development</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2">Web Design</h3>
        </div>
      </div>
    </div>
  );
};
