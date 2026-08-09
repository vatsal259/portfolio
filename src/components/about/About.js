import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { resumeUrl } from '../../blog/blogConfig';
import { EASTER_EGGS, canAccessSecrets, foundSecretsKeyCount, markEggFound } from '../../easterEggs/easterEggs';
import { useTripleTap } from '../../easterEggs/useTripleTap';

const OBSESSIONS = [
  {
    label: 'Code',
    title: 'Architecture in flow',
    description:
      'Microservices, distributed systems, and the quiet joy of a CI pipeline that just works. Java, Spring, Kafka, and a soft spot for clean, well-tested architecture.',
  },
  {
    label: 'The Bike',
    title: 'Royal Enfield Hunter',
    description:
      'Open roads, blind curves, and the kind of silence you only find before sunrise on an empty highway. Riding is how I reset, every paycheck one tank closer to the next horizon.',
    easterEgg: true,
  },
  {
    label: 'The Camera',
    title: 'Light, framed',
    description:
      'Birds mid-flight, a perfect patch of light, a single leafless tree that feels too real to ignore. Mostly slow and patient, occasionally lucky.',
  },
];

const RIDE_STATS = [
  { label: 'Machine', value: 'Royal Enfield Hunter 350' },
  { label: 'Best hour', value: 'The one before sunrise' },
  { label: 'Favorite stretch', value: 'Empty highway, no fixed destination' },
  { label: 'Ritual', value: 'Keys → helmet → ride until the head clears' },
  { label: 'Fuel philosophy', value: 'Half a tank of petrol, a full tank of thoughts' },
];

const QUICK_FACTS = [
  { label: 'Based in', value: 'India' },
  { label: 'Currently', value: 'Software Developer @ Amdocs' },
  { label: 'Education', value: 'B.Tech, VIT Vellore' },
  { label: 'Stack', value: 'Java · Spring · Kafka · React' },
  { label: 'Exploring', value: 'AI/ML, system design at scale' },
  { label: 'Ride', value: 'Royal Enfield Hunter 350' },
];

const WORK_HISTORY = [
  {
    period: 'Aug 2023 - Present',
    role: 'Software Developer',
    company: 'Amdocs',
    location: 'India',
  },
  {
    period: 'Aug 2021 - Feb 2022',
    role: 'AI/ML Research Intern',
    company: 'Indian Institute of Technology (IIT-BHU)',
    location: 'Varanasi, India',
  },
];

function PlainObsessionCard({ item }) {
  return (
    <article className="about__obsession">
      <span className="about__obsession-label">{item.label}</span>
      <h3 className="about__obsession-title">{item.title}</h3>
      <p className="about__obsession-desc">{item.description}</p>
    </article>
  );
}

function BikeObsessionCard({ item }) {
  const overlayId = 'bike-easter-egg';
  const [open, setOpen] = useState(false);
  const [secretsReady, setSecretsReady] = useState(() => canAccessSecrets());
  const [secretsKeys, setSecretsKeys] = useState(() => foundSecretsKeyCount());

  const toggleEgg = useTripleTap(() => {
    setOpen((wasOpen) => {
      if (!wasOpen) {
        markEggFound(EASTER_EGGS.bike);
        setSecretsKeys(foundSecretsKeyCount());
        setSecretsReady(canAccessSecrets());
      }
      return !wasOpen;
    });
  });

  useEffect(() => {
    const sync = () => {
      setSecretsReady(canAccessSecrets());
      setSecretsKeys(foundSecretsKeyCount());
    };
    sync();
    window.addEventListener('easter-egg-found', sync);
    return () => window.removeEventListener('easter-egg-found', sync);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const onTitleClick = (event) => {
    event.preventDefault();
    toggleEgg();
  };

  const onTitleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggleEgg();
  };

  return (
    <article
      className={[
        'about__obsession',
        'about__obsession--bike',
        open ? 'is-egg-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="about__obsession-label">{item.label}</span>
      <h3 className="about__obsession-title">
        <button
          type="button"
          className="about__obsession-title-trigger"
          onClick={onTitleClick}
          onKeyDown={onTitleKeyDown}
          aria-expanded={open}
          aria-controls={overlayId}
          aria-label={item.title}
        >
          {item.title}
        </button>
      </h3>
      <p className="about__obsession-desc">{item.description}</p>

      <div
        id={overlayId}
        className={`about__obsession-reveal${open ? ' is-open' : ''}`}
        role="region"
        aria-label="Ride log surprise"
        aria-hidden={!open}
      >
        <div className="about__obsession-reveal-inner">
          <p className="about__egg-label">What you found</p>
          <p className="about__egg-congrats">
            {secretsKeys >= 2
              ? 'You found 2 of 2.'
              : `You found ${Math.max(secretsKeys, 1)} of 2.`}
          </p>
          <p className="about__egg-label about__egg-label--stats">Ride log</p>
          <dl className="about__ride-stats">
            {RIDE_STATS.map((stat) => (
              <div className="about__ride-stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="about__egg-clue">
            {secretsReady ? (
              <>
                Both found. The door is at{' '}
                <Link to="/secrets" className="about__egg-link">
                  secrets
                </Link>
                .
              </>
            ) : (
              <>
                Blog tucks the other key behind a pinned ribbon.
              </>
            )}
          </p>
          <button
            type="button"
            className="about__egg-close"
            onClick={() => setOpen(false)}
          >
            Tuck it away
          </button>
        </div>
      </div>
    </article>
  );
}

function ObsessionCard({ item }) {
  if (item.easterEgg) {
    return <BikeObsessionCard item={item} />;
  }
  return <PlainObsessionCard item={item} />;
}

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__identity">
          <p className="about__identity-label">Code, Roads, Frames</p>
          <div className="about__story">
            <p>
              I&apos;m a software engineer who quietly believes the best code reads a lot
              like a well-worn road, predictable in the right places, surprising in the
              right ways.
            </p>
            <p>
              By day, I build microservices and APIs at Amdocs, where I get to obsess over
              distributed systems, deployment pipelines, and the elegant geometry of a healthy
              architecture. I came up through AI/ML research at IIT-BHU, and that curiosity,
              for models, for problems, for why things work, never really left.
            </p>
            <p>
              Off the clock, the ritual is simple: keys, helmet, camera. The bike takes me
              places a screen never can; the camera makes sure I remember them. Somewhere
              between a quiet curve on a Sunday morning and the way light falls on a
              stranger&apos;s face is where I do my best thinking, and most of my favorite
              living.
            </p>
          </div>

          <div className="about__obsessions">
            {OBSESSIONS.map((item) => (
              <ObsessionCard item={item} key={item.label} />
            ))}
          </div>
        </div>

        <div className="about__facts">
          {QUICK_FACTS.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <span className="about__fact-label">{fact.label}</span>
              <span className="about__fact-value">{fact.value}</span>
            </div>
          ))}
        </div>

        <div className="about__work">
          <div className="about__work-header">
            <h3 className="about__work-title">Where I&apos;ve worked</h3>
            <p className="about__work-subtitle">
              A short and honest log of the places that have shaped how I build.
            </p>
          </div>

          <div className="about__work-table-wrap">
            <table className="about__work-table">
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Role</th>
                  <th scope="col">Company</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {WORK_HISTORY.map((job) => (
                  <tr key={`${job.company}-${job.role}`}>
                    <td data-label="Period" className="about__work-period">
                      {job.period}
                    </td>
                    <td data-label="Role" className="about__work-role">
                      {job.role}
                    </td>
                    <td data-label="Company" className="about__work-company">
                      {job.company}
                    </td>
                    <td data-label="Location" className="about__work-location">
                      {job.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="about__work-resume-note">
            For the full résumé - roles, projects, and skills -{' '}
            <a
              href={resumeUrl}
              className="about__work-resume-link"
              target="_blank"
              rel="noreferrer"
            >
              see my resume
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
