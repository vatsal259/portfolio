import React from 'react';
import Experience from '../components/experience/Experience';
import SectionPage from './SectionPage';

const ExperiencePage = () => {
  return (
    <SectionPage
      eyebrow="Career"
      title="Work That Ships and Scales"
      subtitle="From production-grade microservices to AI/ML research, the focus is always reliability, learning, and outcomes."
    >
      <Experience />
    </SectionPage>
  );
};

export default ExperiencePage;
