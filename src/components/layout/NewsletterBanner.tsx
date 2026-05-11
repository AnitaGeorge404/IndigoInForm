import React from 'react';
import { Send } from 'lucide-react';

const NewsletterBanner: React.FC = () => {
  return (
    <div className="relative -mb-16 z-20 container mx-auto px-6 md:px-12">
      <div className="bg-gradient-to-r from-[#173cb2] to-[#2e68f5] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-40 overflow-hidden relative">
        
        {/* Background Accent (Optional: matches the curve style) */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}></div>

        {/* Left Image Component */}
        <div className="md:w-1/4 hidden lg:flex mt-[-2rem] justify-start relative z-10 self-end">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=clamp&w=300&h=300&q=80" 
              alt="Person working" 
              className="h-44 object-cover object-top mask-image-bottom"
              style={{ clipPath: 'inset(0% 0% 10% 0%)' }} // rough crop to sit on baseline
            />
        </div>

        {/* Middle Text */}
        <div className="lg:w-1/2 flex items-center gap-4 relative z-10 text-center md:text-left">
          <div className="hidden md:flex text-white p-1 bg-white/20 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white italic font-poppins text-shadow-sm">
            Subscribe Our Newsletter <br/> For Latest Updates
          </h3>
        </div>

        {/* Right Input */}
        <div className="w-full lg:w-1/3 relative z-10">
          <div className="relative flex items-center">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white rounded-full py-4 pl-6 pr-16 text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-white shadow-inner"
            />
            <button className="absolute right-2 bg-primary-royal hover:bg-blue-600 text-white rounded-full p-2.5 transition-colors shadow-sm">
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsletterBanner;