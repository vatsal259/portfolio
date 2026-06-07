import React from 'react';
import Contact from '../components/contact/Contact';
import SectionPage from './SectionPage';
import Seo from '../components/seo/Seo';
import { PAGE_SEO } from '../seo/siteConfig';

const ContactPage = () => {
  return (
    <>
    <Seo
      title={PAGE_SEO.contact.title}
      description={PAGE_SEO.contact.description}
      path={PAGE_SEO.contact.path}
    />
    <SectionPage
      eyebrow="Say Hi"
      title="Let's Build Something Meaningful"
      subtitle="Open to collaborations, interesting systems, and thoughtful conversations around software, product, and growth."
    >
      <Contact />
    </SectionPage>
    </>
  );
};

export default ContactPage;
