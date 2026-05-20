import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Home.css';

const FEATURED_PATHS = [
  {
    title: 'Know me',
    to: '/about',
    copy: 'Who I am beyond roles, resumes, and job titles.',
  },
  {
    title: 'See the work',
    to: '/work',
    copy: 'Projects, experiments, and technical work I am proud to show.',
  },
  {
    title: 'Read the blog',
    to: '/blog',
    copy: 'Unfiltered notes on engineering, product, and lessons from doing.',
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
