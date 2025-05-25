
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
    <div className="bg-gray-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">⚙️</span>
        <div>
          <h2 className="text-xl font-bold text-white">Work Process</h2>
          <p className="text-gray-400 text-sm">The work process explained in 4 simple steps</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-650 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-xl">{step.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-white">{step.title}</h3>
                <span className="text-sm text-purple-400 font-medium">{step.number}</span>
              </div>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
