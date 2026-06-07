import './Testimonials.css';
import ReactPlayer from 'react-player';

const Testimonials = () => {
  return (
    <section id="testimonials" className="work-block">
      <div className="container work-block__head">
        <p className="work-block__eyebrow">03 - Watch</p>
        <h2 className="work-block__title">YouTube Stories</h2>
      </div>

      <div className="container testimonials__container">
        <div className="testimonials__layout">
          <div className="testimonials__player">
            <ReactPlayer
              className="videoplayer"
              controls
              width="100%"
              height="100%"
              url="https://youtu.be/DUflrV2Nlzk?si=4DE9LkMJvIagw4q2"
            />
          </div>

          <aside className="testimonials__aside">
            <p className="testimonials__aside-label">Featured</p>
            <h3 className="testimonials__aside-title">Rides, moments, and field notes.</h3>
            <p className="testimonials__aside-text">
              Short films from the road, open highways, quiet hills, and the kind of stillness
              that only shows up when you are moving.
            </p>
            <dl className="testimonials__meta">
              <div>
                <dt>Channel</dt>
                <dd>@walkinthecraziestway</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Short films & vlogs</dd>
              </div>
            </dl>
            <a
              className="testimonials__link"
              href="https://www.youtube.com/@walkinthecraziestway"
              target="_blank"
              rel="noreferrer"
            >
              More on YouTube
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
