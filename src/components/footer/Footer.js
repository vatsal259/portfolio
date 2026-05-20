/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaBehance, FaGithub, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { resumeUrl } from '../../blog/blogConfig';

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work & Life', to: '/work' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resume', href: resumeUrl },
  { label: 'Say Hi', to: '/contact' },
];

const FOOTER_SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vatsalverma999/',
    icon: <BsLinkedin />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/vatsalastav',
    icon: <BsInstagram />,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/vatsalverma',
    icon: <FaBehance />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vatsal259',
    icon: <FaGithub />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@walkinthecraziestway',
    icon: <FaYoutube />,
  },
  {
    label: 'X',
    href: 'https://x.com/ellipsecircle',
    icon: <RiTwitterXFill />,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer__brand">
        <Link to="/" className="footer__name">
          Vatsal Verma
        </Link>
        <p className="footer__tagline">Code · Rides · Frames · Notes</p>
      </div>

      <div className="footer__links">
        {FOOTER_LINKS.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link to={item.to} key={item.label}>
              {item.label}
            </Link>
          )
        )}
      </div>

      <p className="footer__message">
        One place for what I build and what keeps me alive outside work.
      </p>

      <div className="footer__socials">
        <div className="footer__social-strip">
          {FOOTER_SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="footer__social-pill"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="footer__copyright">
        Assembled with ❤️, caffeine, and questionable CSS by Vatsal
      </p>
    </footer>
  );
};

export default Footer;
