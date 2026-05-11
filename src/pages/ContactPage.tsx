import React from 'react';
import ContactHero from '../features/contact/ContactHero';
import ContactFormSection from '../features/contact/ContactFormSection';
import FAQSection from '../features/contact/FAQSection';
import OfficeSection from '../features/contact/OfficeSection';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins selection:bg-primary-royal selection:text-white bg-white">
      <ContactHero />
      <ContactFormSection />
      <FAQSection />
      <OfficeSection />
    </div>
  );
};

export default ContactPage;