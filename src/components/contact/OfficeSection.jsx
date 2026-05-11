import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MapPlaceholder = () => (
  <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg relative bg-[#e5e7eb]">
    {/* Map Image Placeholder mimicking OpenStreetMap style */}
    <img 
      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
      alt="Map view" 
      className="w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-white/20"></div>

    {/* Map Pin */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
      <svg className="w-10 h-10 text-primary-royal" fill="currentColor" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    </div>

    {/* Zoom Controls */}
    <div className="absolute top-4 left-4 bg-white rounded flex flex-col shadow-sm border border-gray-200">
      <button className="w-8 h-8 flex items-center justify-center font-bold text-gray-700 hover:bg-gray-50 border-b border-gray-200">+</button>
      <button className="w-8 h-8 flex items-center justify-center font-bold text-gray-700 hover:bg-gray-50">-</button>
    </div>
    
    <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm text-[10px] px-2 py-1 text-gray-600 font-medium">
      Leaflet | © OpenStreetMap contributors
    </div>
  </div>
);

const OfficeSection = () => {
  const [activeTab, setActiveTab] = useState('india');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Map Container */}
        <div className="lg:w-[55%] w-full">
          <MapPlaceholder />
        </div>

        {/* Right Side: Office Locations */}
        <div className="lg:w-[45%] w-full">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 space-x-6">
            <button 
              className={`pb-4 px-2 font-semibold text-[15px] transition-all relative ${activeTab === 'india' ? 'text-primary-royal' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setActiveTab('india')}
            >
              India Office
              {activeTab === 'india' && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-royal" />
              )}
            </button>
            <button 
              className={`pb-4 px-2 font-semibold text-[15px] transition-all relative ${activeTab === 'us' ? 'text-primary-royal' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setActiveTab('us')}
            >
              US Office
              {activeTab === 'us' && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-royal" />
              )}
            </button>
          </div>

          <div className="space-y-4">
            {/* India Office Card */}
            <div 
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${activeTab === 'india' ? 'border-primary-royal border-2 bg-white shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'}`}
              onClick={() => setActiveTab('india')}
            >
              <h4 className="text-xl font-bold font-poppins text-gray-900 mb-3">India Office</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                3rd Floor, Jinka Avenue, 713, Modi Hospital Rd, West of Chord Road 2nd Stage, 4th B Main, Stage 2, Mahalakshmipuram, Bengaluru, Karnataka 560086, India
              </p>
            </div>

            {/* US Office Card */}
            <div 
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${activeTab === 'us' ? 'border-primary-royal border-2 bg-white shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'}`}
              onClick={() => setActiveTab('us')}
            >
              <h4 className="text-xl font-bold font-poppins text-gray-900 mb-3">US Office</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                2088 US-130 #106, Monmouth Junction, NJ 08852
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeSection;