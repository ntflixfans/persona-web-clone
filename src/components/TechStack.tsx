
import React from 'react';

export const TechStack = () => {
  const techItems = [
    { name: 'Next.JS', version: 'Version 15+', icon: '⚡' },
    { name: 'Tailwind CSS', version: '', icon: '🎨' },
    { name: 'ShadCN/UI', version: '', icon: '🧩' },
    { name: 'Node.JS', version: 'Version 20 LTS', icon: '🟢' },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl">📊</span>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white">My Tech Stack</h2>
          <p className="text-gray-400 text-xs sm:text-sm">My favorite tech stack I use on my projects</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-700 rounded-xl hover:bg-gray-650 transition-colors">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="text-lg sm:text-xl">{tech.icon}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-white text-sm sm:text-base">{tech.name}</h3>
                {tech.version && (
                  <p className="text-xs sm:text-sm text-gray-400 truncate">{tech.version}</p>
                )}
              </div>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
