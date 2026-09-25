import '../styles/About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__image-col">
            <img
              className="about__img"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85"
              alt="Woman with sunlight shadows on her face and eyes"
            />
          </div>
          <div className="about__text-col">
            <h2 className="about__title">
              Your trusted partner
              <br />
              in eye health
            </h2>
            <p className="about__description">
              Our state-of-the-art eye clinic offers personalized care for all ages. From routine eye
              exams to advanced surgical procedures, our team of experienced ophthalmologists and
              optometrists is here to ensure your vision stays sharp and healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
