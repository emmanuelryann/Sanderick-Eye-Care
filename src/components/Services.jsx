import '../styles/Services.css';

const servicesData = [
  {
    name: 'Routine eye exams',
    description:
      'Complete vision and eye health evaluations with state-of-the-art diagnostic equipment.',
  },
  {
    name: 'Pediatric eye care',
    description:
      'Specialized eye care for children, ensuring healthy visual development from an early age.',
  },
  {
    name: 'Contact lens fitting',
    description:
      'Expert fitting and prescription for all types of contact lenses, including specialty lenses.',
  },
  {
    name: 'Cataract treatment',
    description:
      'Advanced cataract surgery with premium intraocular lens options for optimal visual outcomes.',
  },
  {
    name: 'Glaucoma management',
    description:
      'Comprehensive glaucoma detection, monitoring, and treatment to preserve your vision.',
  },
  {
    name: 'Laser eye surgery',
    description:
      'State-of-the-art LASIK and PRK procedures for freedom from glasses and contacts.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__header">
          <h2>Comprehensive eye care services</h2>
          <p>
            From preventive care to advanced surgical treatments, our expert team
            provides a full spectrum of eye care services.
          </p>
        </div>
        <div className="services__list">
          {servicesData.map((service, index) => (
            <div className="services__item" key={index}>
              <span className="services__name">{service.name}</span>
              <span className="services__desc">{service.description}</span>
              <span className="services__arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
