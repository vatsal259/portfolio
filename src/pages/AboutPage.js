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
      subtitle="My life is a balance of writing brilliant code, while my paychecks are immediately funneled into my two obsessions, a bike and a camera."
    >
      <About />
    </SectionPage>
    </>
  );
};

export default AboutPage;
