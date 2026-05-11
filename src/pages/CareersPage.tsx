import React from 'react';
import HeroSection from '../features/careers/HeroSection';
import CareersSection from '../features/careers/CareersSection';
import AboutSection from '../features/careers/AboutSection';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins selection:bg-primary-royal selection:text-white">
      <HeroSection />
      <CareersSection />
      <AboutSection />
    </div>
  );
};

export default CareersPage;