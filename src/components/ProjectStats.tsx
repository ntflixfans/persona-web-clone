
import React from 'react';
import { Github } from 'lucide-react';

export const ProjectStats = () => {
  const stats = [
    { number: '19+', label: 'Projects', icon: '💼' },
    { number: '9+', label: 'Clients', icon: '👥' },
    { number: '4+', label: 'Yrs Expertise', icon: '⭐' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center">
            <div className="text-xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
            <div className="text-xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Let's Work Together Card */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Let's Work Together</h3>
          <p className="text-purple-100 text-xs sm:text-sm mb-4 sm:mb-6">and make your ideas come to reality</p>
          
          <div className="flex justify-center gap-3 sm:gap-4">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 sm:p-3 rounded-xl transition-colors">
              <span className="text-lg sm:text-xl">📈</span>
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 sm:p-3 rounded-xl transition-colors">
              <span className="text-lg sm:text-xl">✈️</span>
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 sm:p-3 rounded-xl transition-colors">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-purple-200">
          Made with ❤️ by kkkMihai
        </div>
        <div className="absolute bottom-0 sm:bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-purple-200">
          © 2025 All rights reserved
        </div>
      </div>
    </div>
  );
};
