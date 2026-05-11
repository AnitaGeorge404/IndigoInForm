import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Mobile Apps vs. Mobile Websites: Which Is Right for IoT Solutions?",
    answer: "Professionally reintermediate technically sound supply chains it extensive Credibly pontificate turnkey inprocesses whereas marketplace compelling relationships rather parallel communities."
  },
  {
    question: "How do you choose the indigo technology for my project?",
    answer: "We carefully evaluate your project requirements, scalability needs, and budget to select the most appropriate technology stack from our extensive portfolio of enterprise solutions."
  },
  {
    question: "Why is Indigo among the top iot companies in Kochi, Kerala?",
    answer: "Our commitment to innovation, experienced engineering team, and track record of delivering successful enterprise solutions worldwide positions us as industry leaders."
  },
  {
    question: "How are the resources assigned to a new lot project?",
    answer: "Resources are allocated based on expertise required, project timeline, and current team availability, ensuring dedicated and skilled professionals for every phase."
  }
];

const FAQAccordion = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'bg-primary-royal shadow-lg' : 'bg-white'}`}>
      <button 
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className={`font-medium ${isOpen ? 'text-white' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-primary-royal' : 'bg-primary-royal text-white'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-6"
          >
            <p className="text-white/90 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#F4F5F8]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: FAQs */}
        <div className="lg:w-1/2 w-full">
          <div className="inline-flex items-center space-x-2 border border-primary-royal text-primary-royal px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4 fill-primary-royal text-[#F4F5F8]" />
            <span>Faq's</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F204C] mb-10 font-poppins">
            Frequently Asked Question
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)} 
              />
            ))}
          </div>
        </div>

        {/* Right Side: Image and Stats */}
        <div className="lg:w-1/2 w-full relative">
           {/* Decorative Dotted Pattern */}
           <div className="absolute top-10 right-0 lg:-right-10 w-24 h-48 bg-[radial-gradient(circle,#2E63F5_2px,transparent_2px)] [background-size:16px_16px] opacity-40"></div>
          
           <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mr-8">
             <img 
               src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Technical Support" 
               className="w-full h-auto object-cover object-center relative z-10"
             />
           </div>

           {/* Stats Card */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="absolute -bottom-10 right-0 lg:-right-4 bg-gradient-to-br from-blue-600 to-[#0A1149] rounded-3xl p-8 shadow-2xl max-w-[240px] z-20"
           >
             <h3 className="text-white text-5xl font-bold font-poppins mb-2 tracking-tight">10 K<span className="text-2xl font-semibold align-top">+</span></h3>
             <p className="text-blue-100 text-sm leading-relaxed font-medium">Trusted Happy Customers of Worldwide</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;