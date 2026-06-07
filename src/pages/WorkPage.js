import React from 'react';
import Project from '../components/projects/Project';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import SectionPage from './SectionPage';
import Seo from '../components/seo/Seo';
import { PAGE_SEO } from '../seo/siteConfig';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <>
    <Seo
      title={PAGE_SEO.work.title}
      description={PAGE_SEO.work.description}
      path={PAGE_SEO.work.path}
    />
    <SectionPage
      eyebrow="Work & Life"
      title="Projects, Experiments, and Life Outside Code"
      subtitle="A mix of technical builds and personal pursuits that shape how I think, build, and stay grounded."
    >
      <div className="work-page">
        <Project />
        <Portfolio />
        <Testimonials />
      </div>
    </SectionPage>
    </>
  );
};

export default WorkPage;
