import React from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/contact/ContactHero';
import ContactFormSection from '../components/contact/ContactFormSection';
import FAQSection from '../components/contact/FAQSection';
import OfficeSection from '../components/contact/OfficeSection';
import NewsletterBanner from '../components/NewsletterBanner';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen font-poppins selection:bg-primary-royal selection:text-white bg-white">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <FAQSection />
      <OfficeSection />
      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default ContactUs;