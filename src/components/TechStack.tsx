
import React from 'react';

export const TechStack = () => {
  const techItems = [
    { name: 'Next.JS', version: 'Version 15+', icon: '⚡' },
    { name: 'Tailwind CSS', version: '', icon: '🎨' },
    { name: 'ShadCN/UI', version: '', icon: '🧩' },
    { name: 'Node.JS', version: 'Version 20 LTS', icon: '🟢' },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">📊</span>
        <div>
          <h2 className="text-xl font-bold text-white">My Tech Stack</h2>
          <p className="text-gray-400 text-sm">My favorite tech stack I use on my projects</p>
        </div>
      </div>

      <div className="space-y-4">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-650 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">{tech.icon}</span>
              <div>
                <h3 className="font-medium text-white">{tech.name}</h3>
                {tech.version && (
                  <p className="text-sm text-gray-400">{tech.version}</p>
                )}
              </div>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
