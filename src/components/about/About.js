import React from 'react';
import './About.css';
import { resumeUrl } from '../../blog/blogConfig';

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
  },
  {
    label: 'The Camera',
    title: 'Light, framed',
    description:
      'Birds mid-flight, a perfect patch of light, a single leafless tree that feels too real to ignore. Mostly slow and patient, occasionally lucky.',
  },
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
    period: 'Aug 2023 — Present',
    role: 'Software Developer',
    company: 'Amdocs',
    location: 'India',
  },
  {
    period: 'Aug 2021 — Feb 2022',
    role: 'AI/ML Research Intern',
    company: 'Indian Institute of Technology (IIT-BHU)',
    location: 'Varanasi, India',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
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
            Want to know more about me?{' '}
            <a
              href={resumeUrl}
              className="about__work-resume-link"
              target="_blank"
              rel="noreferrer"
            >
              View my resume
            </a>
            .
          </p>
        </div>

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
              <article className="about__obsession" key={item.label}>
                <span className="about__obsession-label">{item.label}</span>
                <h3 className="about__obsession-title">{item.title}</h3>
                <p className="about__obsession-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
