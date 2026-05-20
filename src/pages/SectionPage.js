import React from 'react';
import Footer from '../components/footer/Footer';
import './SectionPage.css';

const SectionPage = ({
  eyebrow,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="section-page">
      <main className="section-page__main">
        <section className="section-page__hero">
          <div className="container section-page__hero-wrap">
            <div className="section-page__hero-content">
              {eyebrow && <p className="section-page__eyebrow">{eyebrow}</p>}
              {title && <h1 className="section-page__title">{title}</h1>}
              {subtitle && <p className="section-page__subtitle">{subtitle}</p>}
            </div>
          </div>
        </section>
        <div className="section-page__content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default SectionPage;
