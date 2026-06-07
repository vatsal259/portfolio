import React from 'react';
import About from '../components/about/About';
import SectionPage from './SectionPage';
import Seo from '../components/seo/Seo';
import { PAGE_SEO } from '../seo/siteConfig';

const AboutPage = () => {
  return (
    <>
    <Seo
      title={PAGE_SEO.about.title}
      description={PAGE_SEO.about.description}
      path={PAGE_SEO.about.path}
    />
    <SectionPage
      eyebrow="Profile"
      title="This Is Me, In Full"
      subtitle="Code that pays the bills, a bike that clears my head, and a camera that makes me notice the world."
    >
      <About />
    </SectionPage>
    </>
  );
};

export default AboutPage;
