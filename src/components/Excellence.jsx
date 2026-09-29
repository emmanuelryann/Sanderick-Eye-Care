import '../styles/Excellence.css';

const features = [
  {
    icon: (
      <svg className="excellence__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Trusted professionals with years of expertise.',
  },
  {
    icon: (
      <svg className="excellence__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
        <path d="M18.5 15.5L19.3 18.2L22 19L19.3 19.8L18.5 22.5L17.7 19.8L15 19L17.7 18.2L18.5 15.5Z" />
      </svg>
    ),
    title: 'Advanced Technology',
    description: 'Cutting-edge diagnostic and treatment equipment.',
  },
  {
    icon: (
      <svg className="excellence__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M12 12.5C8.41 12.5 5.5 15.19 5.5 18.5V19.5H18.5V18.5C18.5 15.19 15.59 12.5 12 12.5Z" />
      </svg>
    ),
    title: 'Patient-Centered Care',
    description: 'We listen, understand, and provide tailored solutions.',
  },
  {
    icon: (
      <svg className="excellence__icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: 'Convenient Location',
    description: 'Easily accessible with ample parking space.',
  },
];

const Excellence = () => {
  return (
    <section className="section excellence" id="excellence">
      <div className="container">
        <div className="excellence__content">
          <div className="excellence__text-col">
            <h2 className="excellence__title">Excellence in eye care</h2>
            <p className="excellence__description">
              Discover what makes us the trusted choice for thousands of patients seeking exceptional eye care.
            </p>
            <a
              href="#services"
              className="excellence__cta"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('services');
                if (section) {
                  section.classList.remove('reveal-visible');
                  setTimeout(() => {
                    section.classList.add('reveal-visible');
                  }, 150);

                  const navbar = document.querySelector('.navbar');
                  const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
                  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
                  const extraGap = 1.5 * rootFontSize;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: Math.max(0, sectionTop - navHeight - extraGap),
                    behavior: 'smooth',
                  });
                }
              }}
            >
              Learn more
            </a>
          </div>

          <div className="excellence__cards-col">
            {features.map((feature, index) => (
              <div className="excellence__card" key={index}>
                <div className="excellence__icon-box">
                  {feature.icon}
                </div>
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
