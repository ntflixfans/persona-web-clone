
import React from 'react';
import { Header } from '../components/Header';
import { TechStack } from '../components/TechStack';
import { Services } from '../components/Services';
import { ProjectStats } from '../components/ProjectStats';
import { WorkProcess } from '../components/WorkProcess';
import { Testimonials } from '../components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <Header />
            <Services />
            <WorkProcess />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <TechStack />
            <ProjectStats />
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
