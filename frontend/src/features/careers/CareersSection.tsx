import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { JobPosition } from '../../types';
import { getJobs } from '../../services/jobsService';
import { submitApplication } from '../../services/applicationsService';

interface JobCardProps {
  job: JobPosition;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => (
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

const CareersSection: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
        // Fallback to empty array if backend is down
        setJobs([]);
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitApplication(formData);
      setStatus('success');
      setFormData({ name: '', email: '', position: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
          <div className="lg:w-2/3">
            {loadingJobs ? (
              <p className="text-center text-gray-500">Loading open positions...</p>
            ) : jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                  <JobCard key={job._id || index} job={job} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No open positions at the moment. Please check back later.</p>
            )}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-3xl p-8 pb-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 h-full">
              <button 
                type="button"
                className="w-full bg-[#1e2336] text-white font-semibold rounded-2xl py-4 text-lg mb-8 transition-colors hover:bg-gray-800"
              >
                Join our team
              </button>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-lg mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2"/> Application Sent!</h3>
                  <p className="text-sm">Thank you for your interest. We will review your application and get back to you.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-green-700 underline"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name*" 
                    className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email*" 
                    className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                  />
                  <input 
                    type="text" 
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    placeholder="Your Position*" 
                    className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 transition-shadow"
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message" 
                    rows={4}
                    className="w-full bg-[#f4f4f5] border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary-royal outline-none text-gray-800 resize-none transition-shadow"
                  ></textarea>
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium mt-2">Failed to submit application. Try again.</p>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-primary-royal hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded-xl py-4 transition-all duration-300 mt-4"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;