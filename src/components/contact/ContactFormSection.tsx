/** @jsxImportSource react */
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-32 md:-mt-48 pb-20 container mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Left Image */}
        <div className="lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Customer Support Team" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 p-10 md:p-14 bg-white relative">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-primary-royal px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4 fill-primary-royal text-blue-50" />
            <span>Get in Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F204C] mb-8 font-poppins">
            We're here to help
          </h2>

          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#FAFAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-royal/30 focus:border-primary-royal outline-none text-gray-800 transition-all font-medium placeholder-[#A3A8B7]"
              />
              <input 
                type="email" 
                placeholder="E-Mail" 
                className="w-full bg-[#FAFAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-royal/30 focus:border-primary-royal outline-none text-gray-800 transition-all font-medium placeholder-[#A3A8B7]"
              />
            </div>
            
            <div className="relative">
              <select className="w-full bg-[#FAFAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-royal/30 focus:border-primary-royal outline-none text-[#A3A8B7] transition-all font-medium appearance-none cursor-pointer">
                <option value="" disabled selected hidden>Select Service</option>
                <option value="consulting">Consulting</option>
                <option value="gis">GIS & Spatial Services</option>
                <option value="cloud">Cloud Computing</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            <textarea 
              placeholder="Write Message" 
              rows="5"
              className="w-full bg-[#FAFAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-royal/30 focus:border-primary-royal outline-none text-gray-800 resize-none transition-all font-medium placeholder-[#A3A8B7]"
            ></textarea>

            <button className="w-full bg-primary-royal hover:bg-blue-600 text-white font-semibold rounded-xl py-4 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.01] hover:shadow-lg mt-4">
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactFormSection;