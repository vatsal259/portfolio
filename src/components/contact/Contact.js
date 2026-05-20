import React from 'react';
import './Contact.css';

const EMAIL = 'vatsalverma999@gmail.com';
const INSTAGRAM_URL = 'https://instagram.com/vatsalastav';

const OPEN_TO = [
  { label: 'Collaborations', value: 'Products, systems, and side projects' },
  { label: 'Conversations', value: 'Engineering, product, and growth' },
  { label: 'Response', value: 'Eventually. Maybe. No promises.' },
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
        <div className="contact-page__facts">
          {OPEN_TO.map((item) => (
            <div className="contact-page__fact" key={item.label}>
              <span className="contact-page__fact-label">{item.label}</span>
              <span className="contact-page__fact-value">{item.value}</span>
            </div>
          ))}
        </div>

        <ul className="contact-page__list">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="contact-page__channel"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <div className="contact-page__channel-meta">
                <span>Photos</span>
              </div>
              <h2 className="contact-page__channel-title">Instagram</h2>
              <p className="contact-page__channel-text">
                If you want to see my clicked photos, that&apos;s where they
                live.
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
              Code, rides, frames, and notes - same person, different platforms.
            </p>
          </div>
          <div className="contact-page__links">
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
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
