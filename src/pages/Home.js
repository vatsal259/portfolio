import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Seo from '../components/seo/Seo';
import { PAGE_SEO, buildHomeJsonLd } from '../seo/siteConfig';
import './Home.css';

const FEATURED_PATHS = [
  {
    title: 'About Me',
    to: '/about',
    copy: 'Who I am when the laptop is open and when it is not.',
  },
  {
    title: 'Work & Life',
    to: '/work',
    copy: 'Things I have shipped, rides I have taken, frames I have kept.',
  },
  {
    title: 'Read the blog',
    to: '/blog',
    copy: 'Notes from building real systems the parts that actually mattered.',
  },
  {
    title: 'Say Hi',
    to: '/contact',
    copy: 'Got something interesting? I am always up for a conversation.',
  },
];

const Home = () => {
  return (
    <div className="page-shell">
      <Seo
        fullTitle={PAGE_SEO.home.fullTitle}
        description={PAGE_SEO.home.description}
        path={PAGE_SEO.home.path}
        jsonLd={buildHomeJsonLd()}
      />
      <main className="page-shell__main" id="main-content">
        <Header />

        <section className="home__section">
          <div className="container home__intro">
            <p className="home__eyebrow">Start here</p>
            <h2 className="home__title">Running four main threads on a single core.</h2>
            <p className="home__subtitle">
              code · rides · frames · notes
            </p>
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
