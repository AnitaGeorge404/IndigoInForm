import React from 'react';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-[#0A1149]">
      {/* Background Curves */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(46, 99, 245, 0.5) 0%, transparent 70%)'
           }}>
             <div className="absolute bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDUwIFExMDAsMTAwIDIwMCw1MCBUMzAwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIiBpZD0icGF0aDEiLz48dXNlIGhyZWY9IiNwYXRoMSIgeT0iMjAiLz48dXNlIGhyZWY9IiNwYXRoMSIgeT0iNDAiLz48dXNlIGhyZWY9IiNwYXRoMSIgeT0iNjAiLz48dXNlIGhyZWY9IiNwYXRoMSIgeT0iODAiLz48L3N2Zz4=')] inset-0 bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins text-shadow-sm"
        >
          Contact Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Have a question or need expert guidance? Our team is ready to help you find the right IT solutions for your business.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;