import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionPage from './SectionPage';
import Seo from '../components/seo/Seo';
import './NotFoundPage.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work & Life' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Seo
        title="Page not found"
        description="This page does not exist on vatsalverma.in. Head home, or browse about, work, and the blog."
        path={pathname}
        noindex
      />
      <SectionPage
        eyebrow="404"
        title="This page is not here"
        subtitle="The URL may be mistyped, or the page moved. Try one of these instead."
      >
        <section className="not-found">
          <div className="container not-found__links">
            {LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="not-found__link">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </SectionPage>
    </>
  );
};

export default NotFoundPage;
