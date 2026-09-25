import '../styles/Excellence.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: 'Advanced Technology',
    description: 'Cutting-edge diagnostic and treatment equipment for precise, effective care.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Patient-Centered Care',
    description: 'Personalized treatment plans designed around your unique needs and lifestyle.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Active Continuity Care',
    description: 'Ongoing monitoring and follow-up to ensure lasting results and eye health.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Convenient Locations',
    description: 'Multiple accessible locations with flexible scheduling to fit your life.',
  },
];

const Excellence = () => {
  return (
    <section className="section excellence" id="excellence">
      <div className="container">
        <div className="excellence__content">
          <div className="excellence__text">
            <h2>Excellence in eye care</h2>
            <p>
              At OptiClear, we are committed to delivering the highest standard of
              eye care through innovation, expertise, and a deeply personal
              approach to every patient.
            </p>
            <a href="#services" className="excellence__cta" onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Learn more
            </a>
          </div>
          <div className="excellence__grid">
            {features.map((feature, index) => (
              <div className="excellence__card" key={index}>
                <div className="excellence__icon">{feature.icon}</div>
                <h3 className="excellence__card-title">{feature.title}</h3>
                <p className="excellence__card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
