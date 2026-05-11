import React from 'react';
import { Mail, Phone, PinIcon } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0b134d] pt-32 pb-8 text-white relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-3xl font-bold font-poppins">Indigo</span>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between w-full max-w-[200px]">
                <div>
                    <span className="text-xs text-gray-400 font-semibold block mb-1 uppercase">FREE CONVERSATION</span>
                    <a href="mailto:example@gmail.com" className="flex items-center text-sm hover:text-blue-300 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      example@gmail.com
                    </a>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-semibold block mb-1 uppercase">CALL US :</span>
                <a href="tel:+918064569491" className="flex items-center text-sm hover:text-blue-300 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 80645 69491
                </a>
              </div>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-royal transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-royal transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-royal transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-royal transition-colors">
                <PinIcon className="w-4 h-4" /> {/* Closer to Pinterest pin */}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">GIS & Spatial Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Document Scanning</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Property Tax Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Solution Sahaya</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Integrated Diseases Surveillance<br/>Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Road Infrastructure Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Asset Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Who We Are</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm text-shadow-sm leading-relaxed">Clients & Partners</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>© 2026 Indigo Information Systems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;