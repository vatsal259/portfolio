import React from 'react';
import './Contact.css';
import { EMAIL, LEETCODE_PROFILE_URL } from '../../seo/siteConfig';

const INSTAGRAM_URL = 'https://instagram.com/vatsalastav';

const COLLABORATIONS = [
  {
    label: 'Building',
    value:
      'I love making products and systems. If you are working on something interesting, I am always up for a conversation.',
  },
  {
    label: 'Photography',
    value: 'Mostly birds, but I shoot other things too. Down to go out with a camera anytime.',
  },
  {
    label: 'Rides',
    value: 'Looking for a riding partner? Count me in.',
  },
  {
    label: 'Anything else',
    value: 'If you think I can help with something, just ask. Happy to collaborate.',
  },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vatsalverma999/',
  },
  {
    label: 'Instagram',
    href: INSTAGRAM_URL,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/vatsalverma',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vatsal259',
  },
  {
    label: 'LeetCode',
    href: LEETCODE_PROFILE_URL,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@walkinthecraziestway',
  },
  {
    label: 'X',
    href: 'https://x.com/ellipsecircle',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-page__inner">
        <div className="contact-page__collab">
          <p className="contact-page__section-label">Collaborations</p>
          <ul className="contact-page__points">
            {COLLABORATIONS.map((item) => (
              <li className="contact-page__point" key={item.label}>
                <span className="contact-page__point-label">{item.label}</span>
                <span className="contact-page__point-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="contact-page__list">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="contact-page__channel"
              rel="noopener noreferrer"
            >
              <div className="contact-page__channel-meta">
                <span>Direct</span>
              </div>
              <h2 className="contact-page__channel-title">Email</h2>
              <p className="contact-page__channel-text">
                Best way to reach me.
              </p>
              <span className="contact-page__channel-address">{EMAIL}</span>
              <span className="contact-page__channel-cta">
                Send a message
                <span className="contact-page__channel-cta-arrow" aria-hidden>
                  →
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={INSTAGRAM_URL}
              className="contact-page__channel"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <div className="contact-page__channel-meta">
                <span>Photos</span>
              </div>
              <h2 className="contact-page__channel-title">Instagram</h2>
              <p className="contact-page__channel-text">
                Photos I&apos;ve taken that&apos;s where they live.
              </p>
              <span className="contact-page__channel-address">@vatsalastav</span>
              <span className="contact-page__channel-cta">
                View on Instagram
                <span className="contact-page__channel-cta-arrow" aria-hidden>
                  →
                </span>
              </span>
            </a>
          </li>
        </ul>

        <div className="contact-page__elsewhere">
          <div className="contact-page__elsewhere-head">
            <p className="contact-page__elsewhere-eyebrow">Elsewhere</p>
            <h2 className="contact-page__elsewhere-title">Find me online</h2>
            <p className="contact-page__elsewhere-subtitle">
              Code, rides, frames, and notes same person, different platforms.
            </p>
          </div>
          <div className="contact-page__links">
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                key={link.label}
                className="contact-page__link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
