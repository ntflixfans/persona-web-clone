
import React from 'react';

export const WorkProcess = () => {
  const steps = [
    {
      number: '#1',
      title: 'Project Brief',
      description: 'We will discuss your project and its goals.',
      icon: '👥'
    },
    {
      number: '#2',
      title: 'Design & Develop',
      description: 'I will design and develop your website according to your needs.',
      icon: '💻'
    },
    {
      number: '#3',
      title: 'Testing & Review',
      description: 'I will let you test the website and make any changes if needed.',
      icon: '🛡️'
    },
    {
      number: '#4',
      title: 'Launch',
      description: 'I will give you the source code and help you with the launch.',
      icon: '🚀'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl">⚙️</span>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white">Work Process</h2>
          <p className="text-gray-400 text-xs sm:text-sm">The work process explained in 4 simple steps</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-700 rounded-xl hover:bg-gray-650 transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl">{step.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                <h3 className="font-medium text-white text-sm sm:text-base">{step.title}</h3>
                <span className="text-xs sm:text-sm text-purple-400 font-medium">{step.number}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
