import React from 'react';
import Contact from '../components/contact/Contact';
import SectionPage from './SectionPage';

const ContactPage = () => {
  return (
    <SectionPage
      eyebrow="Say Hi"
      title="Let's Build Something Meaningful"
      subtitle="Open to collaborations, interesting systems, and thoughtful conversations around software, product, and growth."
    >
      <Contact />
    </SectionPage>
  );
};

export default ContactPage;
