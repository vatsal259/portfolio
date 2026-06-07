import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Seo from '../components/seo/Seo';
import {
  PAGE_SEO,
  PERSON_SCHEMA,
  WEBSITE_SCHEMA,
} from '../seo/siteConfig';
import './Home.css';

const FEATURED_PATHS = [
  {
    title: 'Know me',
    to: '/about',
    copy: 'The story, the obsessions, and the work history when you need it.',
  },
  {
    title: 'Work & Life',
    to: '/work',
    copy: 'Student builds, life outside code, and stories from the road.',
  },
  {
    title: 'Read the blog',
    to: '/blog',
    copy: 'Technical notes on engineering, systems, and building in production.',
  },
  {
    title: 'Say hi',
    to: '/contact',
    copy: 'Collaborations, ideas, or just a thoughtful conversation.',
  },
];

const Home = () => {
  return (
    <div className="page-shell">
      <Seo
        fullTitle={PAGE_SEO.home.fullTitle}
        description={PAGE_SEO.home.description}
        path={PAGE_SEO.home.path}
        jsonLd={[PERSON_SCHEMA, WEBSITE_SCHEMA]}
      />
      <div className="page-shell__main">
        <Header />

        <section className="home__section">
          <div className="container home__intro">
            <p className="home__eyebrow">All in one</p>
            <h2>A simple home for what I build and what I love.</h2>
          </div>

          <div className="container home__links">
            {FEATURED_PATHS.map(({ title, to, copy }) => (
              <Link to={to} className="home__link-card" key={title}>
                <h3 className="home__link-card-title">{title}</h3>
                <p className="home__link-card-copy">{copy}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
