/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaBehance, FaGithub, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import { resumeUrl } from '../../blog/blogConfig';
import { LEETCODE_PROFILE_URL } from '../../seo/siteConfig';
import { EASTER_EGGS, markEggFound } from '../../easterEggs/easterEggs';
import { pickRandomFact } from '../../easterEggs/easterFacts';

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Work & Life', to: '/work' },
  { label: 'Blog', to: '/blog' },
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Resume', href: resumeUrl },
  { label: 'Say Hi', to: '/contact' },
];

const FOOTER_SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vatsalverma999/',
    icon: <BsLinkedin />,
    color: '#0A66C2',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/vatsalastav',
    icon: <BsInstagram />,
    color: '#E4405F',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/vatsalverma',
    icon: <FaBehance />,
    color: '#1769FF',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vatsal259',
    icon: <FaGithub />,
    neutral: true,
  },
  {
    label: 'LeetCode',
    href: LEETCODE_PROFILE_URL,
    icon: <SiLeetcode />,
    color: '#FFA116',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@walkinthecraziestway',
    icon: <FaYoutube />,
    color: '#FF0000',
  },
  {
    label: 'X',
    href: 'https://x.com/ellipsecircle',
    icon: <RiTwitterXFill />,
    neutral: true,
  },
];

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [fact, setFact] = useState(() => pickRandomFact());

  const toggleEgg = () => {
    setOpen((wasOpen) => {
      if (!wasOpen) {
        setFact(pickRandomFact());
        markEggFound(EASTER_EGGS.caffeine);
      }
      return !wasOpen;
    });
  };
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <footer>
      <div className="footer__brand">
        <Link to="/" className="footer__name">
          Vatsal Verma
        </Link>
        <p className="footer__tagline">Code · Rides · Frames · Notes</p>
      </div>

      <div className="footer__links">
        {FOOTER_LINKS.map((item) => {
          if (item.to) {
            return (
              <Link to={item.to} key={item.label}>
                {item.label}
              </Link>
            );
          }

          const isExternal = /^https?:/i.test(item.href);
          return (
            <a
              key={item.label}
              href={item.href}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {item.label}
            </a>
          );
        })}
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
              rel="noopener noreferrer me"
              aria-label={item.label}
              className={`footer__social-pill${item.neutral ? ' footer__social-pill--neutral' : ''}`}
              style={item.color ? { color: item.color } : undefined}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`footer__easter${open ? ' is-open' : ''}`}
        role="region"
        aria-label="Footer surprise"
        aria-hidden={!open}
      >
        <div className="footer__easter-inner">
          <p className="footer__easter-label">What you found</p>
          <p className="footer__easter-congrats">
            Congratulations, you found the easter egg.
          </p>
          <p className="footer__easter-label footer__easter-label--fact">
            Random fact
          </p>
          <p className="footer__easter-fact">{fact}</p>
          <button
            type="button"
            className="footer__easter-refresh"
            onClick={() => setFact(pickRandomFact())}
          >
            Another fact
          </button>
        </div>
      </div>

      <button
        type="button"
        className="footer__copyright footer__easter-trigger"
        onClick={toggleEgg}
        aria-expanded={open}
        aria-label="Assembled with love, caffeine, and questionable CSS by Vatsal"
      >
        Assembled with ❤️, caffeine, and questionable CSS by Vatsal
      </button>
    </footer>
  );
};

export default Footer;
