import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MonitorCheck, Target, TrendingUp } from 'lucide-react';

const Feature = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center justify-center space-y-3 text-center w-24">
    <div className="text-primary-royal">
      <Icon className="w-10 h-10 stroke-[1.5]" />
    </div>
    <span className="text-sm font-semibold text-gray-800 leading-tight">
      {label.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
    </span>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 font-poppins"
            >
              <span className="text-primary-navy">Indigo</span> Has Been Powering Intelligent Digital Platforms for Over 20 Years
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-gray-600 leading-relaxed text-base"
            >
              <p>
                INDIGO is seeking entrepreneurial-minded professionals from diverse technology backgrounds who thrive on innovation and challenge.
              </p>
              <p>
                We're looking for dedicated, self-driven individuals who enjoy solving complex technical problems in a fast-paced, rapidly growing, team-oriented environment.
              </p>
              <p>
                These hands-on roles involve designing, developing, and executing advanced technical workflows across a wide range of GIS and web-based projects for diverse GIS clients.
              </p>
              <p>
                To succeed here, you'll need strong technical agility, sharp focus, adaptability, enthusiasm, and a forward-thinking mindset that complements a dynamic work culture.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-8 px-6 border-b-2 border-r-2 border-gray-50 flex justify-between md:justify-around max-w-xl"
            >
              <Feature icon={Lightbulb} label="Smart Innovation" />
              <Feature icon={MonitorCheck} label="Enterprise Digital Solutions" />
              <Feature icon={Target} label="Proven Digital Impact" />
              <Feature icon={TrendingUp} label="Driving Measurable Outcomes" />
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative mt-12 lg:mt-0"
          >
            {/* Blue Background Accent */}
            <div className="absolute top-10 -right-6 lg:-right-10 w-full h-[95%] bg-primary-royal rounded-3xl -z-10"></div>
            
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Global Digital Platform Technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;