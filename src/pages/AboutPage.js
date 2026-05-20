import React from 'react';
import About from '../components/about/About';
import SectionPage from './SectionPage';

const AboutPage = () => {
  return (
    <SectionPage
      eyebrow="Profile"
      title="This Is Me, In Full"
      subtitle="My life is a balance of writing brilliant code, while my paychecks are immediately funneled into my two obsessions, a bike and a camera."
    >
      <About />
    </SectionPage>
  );
};

export default AboutPage;
