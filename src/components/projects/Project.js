import './Project.css';
import IMG1 from '../../assets/Treatise.jpg';
import IMG2 from '../../assets/CNN.jpg';
import IMG3 from '../../assets/NLP.jpg';
import IMG4 from '../../assets/Fittonesu.jpg';
import IMG5 from '../../assets/Fembizz.jpg';

const PROJECTS = [
  {
    title: 'AI-Powered Animal Detection and Alert System',
    description:
      'Built an end-to-end deep learning inference pipeline with CNNs (TensorFlow/Keras) and OpenCV for real-time animal detection (92.68% accuracy), with preprocessing and data augmentation for robustness across lighting conditions. Delivered low-latency event notifications via Twilio REST API — recognized at WildHacks 2021 for the most creative API integration.',
    image: IMG2,
    tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    year: '2021',
    links: [
      { label: 'GitHub', href: 'https://github.com/vatsal259/WildHacks' },
      { label: 'YouTube', href: 'https://youtu.be/3u3mKcQML2Y' },
    ],
  },
  {
    title: 'NLP Document Summarization Service',
    description:
      'Developed a Spring Boot REST microservice with an NLP pipeline (tokenization, stopword removal, sentence segmentation) and LexRank extractive summarization, validated against reference summaries at 85%+ accuracy. Designed modular ingestion and ranking stages exposed via HTTP APIs using layered controllers, a service layer, and REST DTOs.',
    image: IMG3,
    tags: ['Java', 'Spring Boot', 'NLP', 'LexRank'],
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
