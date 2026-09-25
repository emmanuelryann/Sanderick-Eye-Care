import '../styles/Hero.css';

const Hero = () => {
  const handleCta = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <img
        className="hero__bg"
        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1920&q=80"
        alt="Close up of human eyes"
      />
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          Experience the clarity of exceptional eye care
        </h1>
        <p className="hero__subtitle">
          Advanced technology meets compassionate care. Our expert ophthalmologists
          provide personalized treatment plans for your complete eye health.
        </p>
        <a href="#contact" className="hero__cta" onClick={handleCta}>
          Book a consultation
        </a>
      </div>

      <div className="hero__trust">
        <div className="hero__trust-item">
          <span className="hero__trust-stars">★★★★★</span>
          <span>Rated 4.9/5</span>
        </div>
        <div className="hero__trust-divider"></div>
        <div className="hero__trust-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>TRUSTED PROVIDER</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
