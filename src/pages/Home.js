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
    <>
      <Header />

      <section className="home__section">
        <div className="container home__intro">
          <p className="home__eyebrow">All in one</p>
          <h2>A simple home for what I build and what I love.</h2>
        </div>

        <div className="container home__links">
          {FEATURED_PATHS.map(({ title, to, copy }) => (
            <article className="home__link-item" key={title}>
              <Link to={to} className="home__section-title">
                {title}
              </Link>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
