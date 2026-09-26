import '../styles/Services.css';

const servicesData = [
  {
    name: 'Routine eye exams',
    description: 'Keep your vision in check with regular eye health evaluations.',
  },
  {
    name: 'Pediatric eye care',
    description: 'Special care for our young patients, ensuring healthy vision development.',
  },
  {
    name: 'Contact lens fitting',
    description: 'Expert guidance for a perfect fit and comfortable wear.',
  },
  {
    name: 'Cataract treatment',
    description: 'State-of-the-art technology to correct vision problems.',
  },
  {
    name: 'Glaucoma management',
    description: 'Advanced solutions for restoring clear vision.',
  },
  {
    name: 'Laser eye surgery',
    description: 'Early detection and effective treatments to preserve eyesight.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">
            Comprehensive eye
            <br />
            care services
          </h2>
          <p className="services__subtitle">
            From routine check-ups to advanced procedures, we provide comprehensive solutions for your eye health.
          </p>
        </div>
        <div className="services__list">
          {servicesData.map((service, index) => (
            <div className="services__item" key={index}>
              <span className="services__name">{service.name}</span>
              <span className="services__desc">{service.description}</span>
              <div className="services__action">
                <div className="services__arrow-btn" aria-hidden="true">
                  <svg
                    className="services__arrow-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
