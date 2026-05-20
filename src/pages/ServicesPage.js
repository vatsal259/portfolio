import React from 'react';
import Services from '../components/services/Services';
import SectionPage from './SectionPage';

const ServicesPage = () => {
  return (
    <SectionPage
      eyebrow="Capabilities"
      title="Core Expertise"
      subtitle="Architecture, delivery discipline, AI curiosity, and product thinking blended into practical engineering execution."
    >
      <Services />
    </SectionPage>
  );
};

export default ServicesPage;
