
import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anom',
      service: 'DevOps',
      rating: 5,
      text: 'Working with Mihai was a great experience. He is always on time and ready to help'
    },
    {
      name: 'Anom',
      service: 'NextServices',
      rating: 5,
      text: 'This dude is a beast. He is very good at what he is doing I would recommend him to anyone who needs a website.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xs sm:text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl">💭</span>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white">Testimonials</h2>
          <p className="text-gray-400 text-xs sm:text-sm">What my clients say about me</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-700 rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs sm:text-sm font-bold text-white">{testimonial.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{testimonial.service}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">{testimonial.text}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 sm:py-3 rounded-xl font-medium transition-colors text-sm sm:text-base">
        ⭐ View All Testimonials
      </button>
    </div>
  );
};
