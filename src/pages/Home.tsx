import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import CareersSection from '../components/home/CareersSection';
import AboutSection from '../components/home/AboutSection';
import NewsletterBanner from '../components/layout/NewsletterBanner';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins selection:bg-primary-royal selection:text-white">
      <Navbar />
      <HeroSection />
      <CareersSection />
      <AboutSection />
      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default Home;