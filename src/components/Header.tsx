import React from 'react';
import { Github } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gray-700 flex-shrink-0">
          <img 
            src="/lovable-uploads/b35525c4-5ecf-4b14-8db1-6f53ded978af.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-xs sm:text-sm">Available To Work</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">Mihai</h1>
          <p className="text-sm sm:text-base text-gray-300">I'm a Full Stack Developer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">🇬🇧</span>
          <span className="text-xs sm:text-sm text-gray-300">English & Romanian</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-400">📍</span>
          <span className="text-xs sm:text-sm text-gray-300">Romania</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">⏰</span>
          <span className="text-xs sm:text-sm text-gray-300">UTC+3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-brown-400">☕</span>
          <span className="text-xs sm:text-sm text-gray-300">Coffee Addict</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">💼</span>
          <span className="text-xs sm:text-sm text-gray-300">Freelancer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-400">🎮</span>
          <span className="text-xs sm:text-sm text-gray-300">17y/o</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
          <span>💼</span>
          Hire Me
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center sm:w-auto">
          <Github className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
