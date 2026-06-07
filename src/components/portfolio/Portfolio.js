import './Portfolio.css';
import IMG1 from '../../assets/Bike.jpg';
import IMG2 from '../../assets/Sarus.jpg';
import IMG3 from '../../assets/Bean.jpg';
import IMG4 from '../../assets/Gym.jpg';

const STORIES = [
  {
    label: 'Ride',
    title: 'The Ride That Keeps Me Balanced',
    image: IMG1,
    alt: 'Bike ride in the Western Ghats',
    paragraphs: [
      'Riding through the Western Ghats on my bike is where I feel most like myself. The winding roads, the cool air, the endless green, it’s the kind of peace I can’t find anywhere else.',
      'What I love most is the music of the engine echoing through the hills, loud, raw, and oddly calming. It drowns out everything else: the stress, the noise, the overthinking.',
      'Biking helps me reset. It clears my head, lifts the weight off my shoulders, and reminds me to just breathe, be present, and keep moving forward.',
    ],
    caption: 'In frame: somewhere in the Western Ghats',
  },
  {
    label: 'Camera',
    title: 'How I See the Wild',
    image: IMG2,
    alt: 'Sarus crane in the wild',
    paragraphs: [
      'Photography, for me, is about noticing the things most people miss, especially when it comes to animals and birds. I’ve always been drawn to wildlife. There’s something incredible about capturing a fleeting moment: a bird in mid-flight, a deer looking straight at you, a monkey doing something oddly human.',
      'I don’t chase the perfect shot, I wait for it. Whether it’s deep in the forest or on the side of the road during a ride, I love the quiet challenge of wildlife photography. It teaches patience, observation, and respect for the natural world.',
    ],
    caption: 'In frame: Sarus Crane at Samaspur Bird Sanctuary, Uttar Pradesh',
  },
  {
    label: 'Coffee',
    title: 'Experiments in a Cup',
    image: IMG3,
    alt: 'Experimental coffee setup',
    paragraphs: [
      'Coffee is my playground. I don’t just drink it I mess with it. I’ve got my French press, a steady stash of cold brew, and an ever-growing list of weird combinations that probably shouldn’t work… but sometimes absolutely do.',
      'I’ve mixed cold brew with sparkling water, lime juice, berries, even Hajmola once yeah, it raised some eyebrows. But that’s the fun of it. I like flavors that surprise me, confuse people, or make them say, “wait… that’s actually good?”',
      'Call it a hobby, a habit, or just caffeinated curiosity but for me, coffee is a place to get weird, stay curious, and drink like nobody’s judging.'
    ],
  },
  {
    label: 'Fitness',
    title: 'Strong Body, Clearer Mind',
    image: IMG4,
    alt: 'Fitness journey progress',
    paragraphs: [
      'At the start of 2024, I made a decision that changed my life to take my health seriously. I committed to the gym, followed a strict diet, and stayed consistent even when it was hard.',
      'Since then, I’ve lost over 22 kgs, but what I’ve gained is so much more than what I lost. This journey hasn’t just transformed my body, it’s helped me rebuild my mindset.',
      'I’ve become more focused, more disciplined, and a lot kinder to myself. The routine, the challenge, the progress — it all gave me a sense of control and clarity I didn’t know I needed.',
      'This isn’t a phase. It’s part of who I am now.',
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="work-block">
      <div className="container work-block__head">
        <p className="work-block__eyebrow">02 — Life</p>
        <h2 className="work-block__title">Beyond the Code</h2>
      </div>

      <div className="container portfolio__container">
        <ol className="portfolio__list">
          {STORIES.map((story) => (
            <li className="portfolio__item" key={story.title}>
              <div className="portfolio__media">
                <img src={story.image} alt={story.alt} />
              </div>
              <div className="portfolio__copy">
                <p className="portfolio__label">{story.label}</p>
                <h3 className="portfolio__title">{story.title}</h3>
                {story.paragraphs.map((para, i) => (
                  <p className="portfolio__text" key={i}>
                    {para}
                  </p>
                ))}
                {story.caption && <p className="portfolio__caption">{story.caption}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Portfolio;
