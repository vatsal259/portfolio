import './Services.css';

const EXPERTISE_AREAS = [
  {
    title: 'Backend Engineering',
    summary:
      'Build and maintain resilient microservices using Spring Boot, Kafka, and REST APIs with production-focused reliability.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'REST APIs', 'Couchbase'],
  },
  {
    title: 'AI / ML Exploration',
    summary:
      'Experiment with practical machine learning approaches across CNNs, NLP, and GenAI-driven problem solving.',
    stack: ['Python', 'CNN', 'NLP', 'GenAI', 'Research mindset'],
  },
  {
    title: 'System Design Mindset',
    summary:
      'Approach architecture with scalability, clear abstractions, maintainability, and long-term product impact in mind.',
    stack: ['Clean architecture', 'Modular design', 'Reliability', 'Scalability'],
  },
  {
    title: 'Delivery & DevOps',
    summary:
      'Accelerate releases through CI/CD automation, OpenShift deployments, and quality gates around security and stability.',
    stack: ['OpenShift', 'Jenkins', 'Bitbucket', 'JIRA', 'Confluence'],
  },
  {
    title: 'Product-Focused UI/UX',
    summary:
      'Translate requirements into intuitive interfaces and user journeys that are minimal, useful, and human centered.',
    stack: ['Figma', 'UI structure', 'UX thinking', 'Design systems'],
  },
  {
    title: 'Collaboration & Ownership',
    summary:
      'Work closely with teams in agile environments, communicate clearly, and own outcomes from ideation to deployment.',
    stack: ['Agile', 'Cross-team sync', 'Documentation', 'Execution'],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h2>Core Expertise</h2>
      <p className="services__intro container">
        A practical blend of engineering depth, product thinking, and execution discipline.
      </p>
      <div className="container services__container">
        {EXPERTISE_AREAS.map((area) => (
          <article className="service" key={area.title}>
            <h3>{area.title}</h3>
            <p className="service__text">{area.summary}</p>
            <div className="service__meta">
              {area.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;