import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-navy min-h-[90vh] flex items-center">
      {/* Abstract Background - simplified CSS approach */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(46, 99, 245, 0.4) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(46, 99, 245, 0.4) 0%, transparent 50%)'
           }}>
             {/* Lines */}
             <div className="absolute bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDUwIFExMDAsMTAwIDIwMCw1MCBUMzAwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIgaWQ9InBhdGgxIi8+PHVzZSBocmVmPSIjcGF0aDEiIHk9IjIwIi8+PHVzZSBocmVmPSIjcGF0aDEiIHk9IjQwIi8+PC9zdmc+')] inset-0 bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Build the Future with Indigo <br/>
              <span className="text-[#00B4D8]">Information Systems</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Build cutting-edge solutions, grow your skills, and make an impact with a team that values innovation.
            </motion.p>
          </div>

          {/* Right Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full max-w-lg mx-auto"
          >
            {/* Top Image */}
            <div className="absolute top-0 right-10 w-3/4 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-primary-navy">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Team" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 w-3/4 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-primary-navy">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Colleagues collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;