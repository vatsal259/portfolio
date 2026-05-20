import React from 'react';
import './Experience.css';

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

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="experience__header">
          <h2 className="experience__title">Where I&apos;ve worked</h2>
          <p className="experience__subtitle">
            A short and honest log of the places that have shaped how I build.
          </p>
        </div>

        <div className="experience__table-wrap">
          <table className="experience__table">
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
                  <td data-label="Period" className="experience__period">
                    {job.period}
                  </td>
                  <td data-label="Role" className="experience__role">
                    {job.role}
                  </td>
                  <td data-label="Company" className="experience__company">
                    {job.company}
                  </td>
                  <td data-label="Location" className="experience__location">
                    {job.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Experience;