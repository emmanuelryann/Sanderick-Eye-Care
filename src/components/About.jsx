import '../styles/About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img
              src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80"
              alt="Eye care professional examining a patient"
            />
          </div>
          <div className="about__text">
            <h2>Your trusted partner in eye health</h2>
            <p>
              With over 15 years of experience, OptiClear has been at the forefront
              of eye care innovation. Our team of board-certified ophthalmologists
              and optometrists combines cutting-edge technology with a patient-first
              approach to deliver exceptional results.
            </p>
            <p>
              We believe everyone deserves clear, comfortable vision. From routine
              check-ups to complex surgical procedures, we provide comprehensive
              care tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
