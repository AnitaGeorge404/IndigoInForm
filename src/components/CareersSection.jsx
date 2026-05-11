import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const jobs = [
  {
    title: 'GIS Engineer',
    type: 'Full Time',
    description: 'Design, develop, and optimize geospatial solutions using open-source GIS platforms and spatial analytics tools.',
    location: 'Bengaluru, India / Hybrid'
  },
  {
    title: 'Cloud Engineer',
    type: 'Full Time',
    description: 'Design, develop, and optimize geospatial solutions using open-source GIS platforms and spatial analytics tools.',
    location: 'Bengaluru, India / Hybrid'
  },
  {
    title: 'Full Stack Developer',
    type: 'Full Time',
    description: 'Design, develop, and optimize geospatial solutions using open-source GIS platforms and spatial analytics tools.',
    location: 'Bengaluru, India / Hybrid'
  },
  {
    title: 'Business Analyst',
    type: 'Full Time',
    description: 'Design, develop, and optimize geospatial solutions using open-source GIS platforms and spatial analytics tools.',
    location: 'Bengaluru, India / Hybrid'
  }
];

const JobCard = ({ job, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(46,99,245,0.1)] transition-all duration-300 relative border border-gray-100 group flex flex-col h-full"
  >
    <div className="absolute top-8 right-8 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white group-hover:bg-primary-royal transition-colors">
      <ArrowUpRight className="w-5 h-5" />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
    <p className="text-sm text-gray-500 font-medium mb-4">{job.type}</p>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{job.description}</p>
    
    <div className="flex items-center text-gray-700 text-sm font-medium mb-6">
      <MapPin className="w-4 h-4 mr-2 text-gray-800" />
      {job.location}
    </div>

    <button className="bg-primary-royal hover:bg-blue-600 text-white font-medium rounded-full px-8 py-2.5 w-max transition-colors text-sm">
      Apply now
    </button>
  </motion.div>
);

const CareersSection = () => {
  return (
    <section className="py-24 bg-light-gray" id="careers">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-poppins"
        >
          Currently Open Positions
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Jobs Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} index={index} />
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-3xl p-8 pb-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 h-full">
              <button className="w-full bg-[#1e2336] text-white font-semibold rounded-2xl py-4 text-lg mb-8 transition-colors hover:bg-gray-800">
                Join our team
              </button>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name*" 
                  className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                />
                <input 
                  type="email" 
                  placeholder="Your Email*" 
                  className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                />
                <input 
                  type="text" 
                  placeholder="Your Position*" 
                  className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                />
                <textarea 
                  placeholder="Enter your message" 
                  rows="4"
                  className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 resize-none transition-shadow"
                ></textarea>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;