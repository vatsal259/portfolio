import React from 'react';
import Project from '../components/projects/Project';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import SectionPage from './SectionPage';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <SectionPage
      eyebrow="Portfolio"
      title="Projects, Experiments, and Life Outside Code"
      subtitle="A mix of technical builds and personal pursuits that shape how I think, build, and stay grounded."
    >
      <div className="work-page">
        <Project />
        <Portfolio />
        <Testimonials />
      </div>
    </SectionPage>
  );
};

export default WorkPage;
