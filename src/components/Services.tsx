
import React from 'react';

export const Services = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl">🛠️</span>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white">Services</h2>
          <p className="text-gray-400 text-xs sm:text-sm">My services are tailored to your needs and budget</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-gray-700 rounded-xl p-3 sm:p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2 text-sm sm:text-base">Web Development</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-3 sm:p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2 text-sm sm:text-base">Web Design</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-3 sm:p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2 text-sm sm:text-base">API Development</h3>
        </div>
        <div className="bg-gray-700 rounded-xl p-3 sm:p-4 hover:bg-gray-650 transition-colors">
          <h3 className="font-medium text-purple-300 mb-2 text-sm sm:text-base">Consulting</h3>
        </div>
      </div>
    </div>
  );
};
