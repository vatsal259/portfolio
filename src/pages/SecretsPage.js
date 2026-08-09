import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionPage from './SectionPage';
import Seo from '../components/seo/Seo';
import { canAccessSecrets, foundSecretsKeyCount } from '../easterEggs/easterEggs';
import './SecretsPage.css';

const QUOTE = {
  text: 'Loyalty is a two-way street. If I\'m asking for it from you, then you\'re getting it from me.',
  attribution: 'Harvey Specter, Suits',
};

const CHAPTERS = [
  {
    label: 'Life',
    title: 'How I hold my life',
    body: [
      'I am a software engineer, but that is only one room in the house. I ride. I take photographs. I care about craft in code, on the road, through a lens. This site exists because I needed one place for all of it: what I build at work, and what keeps me alive outside of it.',
      'I do not want to be flattened into a résumé. Code, rides, frames, notes that mix is closer to who I am than any job title. So I built this myself. No template. Just my life, held in one URL.',
    ],
  },
  {
    label: 'Curiosity',
    title: 'A small habit of mine',
    body: [
      'I like hiding little things for people who look closely. In college I made a Figma UI treatise and tucked a surprise behind a ribbon you had to pull. Same idea lives on the blog bookmark here. Curiosity is part of how I move through the world I notice details, and I leave a few for whoever notices back.',
    ],
  },
  {
    label: 'Film',
    title: 'Cinema',
    body: [
      'Film is a big part of who I am, even though I barely mention it on the homepage. Growing up, movies were never just something playing in the background they were how I spent evenings, how I discovered other worlds, and how I learned to feel things I did not always know how to say. I watch from everywhere I can find: Bollywood, South Indian cinema, Hollywood, French, Italian, Russian, Hong Kong, Chinese, and whatever else finds me. Subtitles never put me off. If the story feels real and the people on screen feel alive, I am in.',
      'It is not just entertainment for me. I love movies because I often see pieces of my own life in them and I catch myself comparing where I am with what is on screen. Some films stay with me long after they end.',
      'If I had to name a favourite director, it would be Quentin Tarantino. His films have a rhythm I keep coming back to and Pulp Fiction is the one I rewatch most. Wong Kar-wai\'s In the Mood for Love sits in a different place for me. It is quieter, slower, and somehow it has stayed with me longer than most films I have ever seen.',
      'The past year and a half has been heavy. I have not watched nearly as many films as I would like not because I stopped loving cinema, but because life asked for attention elsewhere. Once things settle, I am coming back to it. There is still too much I want to see, and too much of myself I find in watching. And one day, I would love to direct a movie of my own.',
    ],
  },
];

const SecretsPage = () => {
  const [unlocked, setUnlocked] = useState(() => canAccessSecrets());
  const [foundCount, setFoundCount] = useState(() => foundSecretsKeyCount());

  useEffect(() => {
    const sync = () => {
      setUnlocked(canAccessSecrets());
      setFoundCount(foundSecretsKeyCount());
    };

    sync();
    window.addEventListener('easter-egg-found', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('easter-egg-found', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return (
    <>
      <Seo
        title="Secrets"
        description="A quieter page about who Vatsal Verma is beyond the portfolio."
        path="/secrets"
        noindex
      />
      <SectionPage
        eyebrow="Personal"
        title={unlocked ? 'Secrets' : 'Locked'}
        subtitle={
          unlocked
            ? 'Who I am beyond the résumé the person behind the work.'
            : 'This page opens for people who went looking.'
        }
      >
        <section className="secrets-page">
          <div className="container secrets-page__inner">
            {!unlocked ? (
              <div className="secrets-locked">
                <p className="secrets-locked__label">Not yet</p>
                <p className="secrets-locked__message">
                  The door stays shut until you have found what came before.
                </p>
                <p className="secrets-locked__meta">
                  {foundCount} of 2 keys found
                </p>
                <p className="secrets-locked__hint">
                  One hides behind a ribbon on the blog. One waits where the road
                  meets the frame.
                </p>
                <Link to="/" className="secrets-page__link">
                  Back home
                </Link>
              </div>
            ) : (
              <>
                <div className="secrets-identity">
                  <p className="secrets-identity__label">A line I live by</p>
                  <div className="secrets-story">
                    <p className="secrets-story__quote">
                      &ldquo;{QUOTE.text}&rdquo;
                    </p>
                    <p className="secrets-story__cite">{QUOTE.attribution}</p>
                  </div>
                </div>

                <div className="secrets-chapters">
                  {CHAPTERS.map((chapter) => (
                    <article className="secrets-chapter" key={chapter.title}>
                      <span className="secrets-chapter__label">{chapter.label}</span>
                      <h3 className="secrets-chapter__title">{chapter.title}</h3>
                      <div className="secrets-chapter__body">
                        {chapter.body.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="secrets-connect">
                  <div className="secrets-connect__header">
                    <h3 className="secrets-connect__title">Want to know me better?</h3>
                    <p className="secrets-connect__subtitle">
                      If this felt like a real person and not just a portfolio, I
                      would like to hear from you work, films, the bike, or
                      nothing in particular.
                    </p>
                  </div>
                  <Link to="/contact" className="secrets-connect__cta">
                    Message me
                    <span className="secrets-connect__cta-arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </SectionPage>
    </>
  );
};

export default SecretsPage;
