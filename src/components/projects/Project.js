import './Project.css';
import IMG1 from '../../assets/Treatise.jpg';
import IMG2 from '../../assets/CNN.jpg';
import IMG3 from '../../assets/NLP.jpg';
import IMG4 from '../../assets/Fittonesu.jpg';
import IMG5 from '../../assets/Fembizz.jpg';

const PROJECTS = [
  {
    title: 'Animal Detection AI model using CNN',
    description:
      'Built a flask website for animal detection using Convolutional Neural Network. Realtime message alert on the mobile phone.',
    image: IMG2,
    tags: ['CNN', 'Flask', 'Python'],
    year: '2022',
    links: [
      { label: 'GitHub', href: 'https://github.com/vatsal259/WildHacks' },
      { label: 'YouTube', href: 'https://youtu.be/3u3mKcQML2Y' },
    ],
  },
  {
    title: 'Text Summarizer',
    description:
      'Built a flask website for text summarization using Natural Language Programming. Algorithm used: LexRank. Tech stack: Python, NLTK library, Flask, HTML and CSS.',
    image: IMG3,
    tags: ['NLP', 'LexRank', 'Flask'],
    year: '2022',
    links: [
      { label: 'GitHub', href: 'https://github.com/vatsal259/Text-summarizer' },
      { label: 'YouTube', href: 'https://youtu.be/cmAQBTECa40' },
    ],
  },
  {
    title: 'Treatise',
    description:
      'Designed a Figma UI prototype for an app that gives a platform for bibliophiles to find jobs. It was exclusively for android mobile phones.',
    image: IMG1,
    tags: ['Figma', 'Mobile UI'],
    year: '2021',
    links: [{ label: 'Behance', href: 'https://www.behance.net/gallery/134863603/Treatise' }],
  },
  {
    title: 'Fittonesu',
    description:
      'Designed Figma UI prototype for website and app and developed the website that helps in fitness tracking in Devspace Hackathon.',
    image: IMG4,
    tags: ['Figma', 'Hackathon'],
    year: '2021',
    links: [{ label: 'Behance', href: 'https://www.behance.net/gallery/128055989/Fittonesu' }],
  },
  {
    title: 'Fembizz',
    description:
      'Designed a Figma UI prototype for an app that gives a platform to women and helps in women empowerment in Access Denied Hackathon. Won the special track prize.',
    image: IMG5,
    tags: ['Figma', 'Hackathon'],
    year: '2021',
    links: [{ label: 'Behance', href: 'https://www.behance.net/gallery/137139355/Fembizz' }],
  },
];

const Project = () => {
  return (
    <section id="projects" className="work-block">
      <div className="container work-block__head">
        <p className="work-block__eyebrow">01 — Work</p>
        <h2 className="work-block__title">Selected Projects</h2>
      </div>

      <div className="container projects__container">
        <ol className="projects__list">
          {PROJECTS.map((project) => (
            <li className="projects__item" key={project.title}>
              <div className="projects__media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects__copy">
                <p className="projects__meta">
                  {project.year} · {project.tags.join(' · ')}
                </p>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__text">{project.description}</p>
                <div className="projects__links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="projects__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Project;
