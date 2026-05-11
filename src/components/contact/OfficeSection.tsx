import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { officesData } from '../../data/offices';
import OfficeMap from './OfficeMap';
import { OfficeLocation } from '../../types';

const OfficeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(officesData[0].id);

  const activeOffice = officesData.find(office => office.id === activeTab) as OfficeLocation;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Map Container */}
        <div className="lg:w-[55%] w-full relative z-10">
          <OfficeMap offices={officesData} activeOffice={activeOffice} />
        </div>

        {/* Right Side: Office Locations */}
        <div className="lg:w-[45%] w-full">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 space-x-6">
            {officesData.map((office) => (
              <button 
                key={office.id}
                className={`pb-4 px-2 font-semibold text-[15px] transition-all relative ${activeTab === office.id ? 'text-primary-royal' : 'text-gray-500 hover:text-gray-800'}`}
                onClick={() => setActiveTab(office.id)}
              >
                {office.name}
                {activeTab === office.id && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-royal" />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {officesData.map((office) => (
              <div 
                key={office.id}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${activeTab === office.id ? 'border-primary-royal border-2 bg-white shadow-sm' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                onClick={() => setActiveTab(office.id)}
              >
                <h4 className="text-xl font-bold font-poppins text-gray-900 mb-3">{office.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  {office.address}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeSection;