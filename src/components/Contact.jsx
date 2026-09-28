import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">
              Let&rsquo;s talk about
              <br />
              your vision
            </h2>
            <p className="contact__subtitle">
              Reach out today to start your journey toward better vision.
            </p>

            <div className="contact__details">
              <div className="contact__detail-group">
                <h3 className="contact__group-title">Contact</h3>
                
                <div className="contact__item">
                  <div className="contact__icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="contact__text">+1 234 567 890</span>
                </div>

                <div className="contact__item">
                  <div className="contact__icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="contact__text">contact@youreyeclinic.com</span>
                </div>

                <div className="contact__item contact__item--hours">
                  <div className="contact__icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact__hours-text">
                    <span className="contact__hours-label">Open Hours:</span>
                    <span className="contact__hours-value">Monday - Friday, 10:00 AM - 10:00 PM (GMT)</span>
                  </div>
                </div>
              </div>

              <div className="contact__detail-group">
                <h3 className="contact__group-title">Our Office</h3>
                <div className="contact__item">
                  <div className="contact__icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="contact__text">123 Vision Street, Opticville</span>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <a href="#contact" className="contact__btn contact__btn--primary">
                Book a schedule
              </a>
              <button type="button" className="contact__btn contact__btn--secondary">
                Get direction
              </button>
            </div>
          </div>

          <div className="contact__map-wrapper">
            <svg
              className="contact__map-svg"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Map of Sanderick office location on Eastwood Ave and Ashwood Ave"
            >
              {/* Background Map Canvas */}
              <rect width="600" height="500" fill="#f4f5f7" />

              {/* Urban blocks and residential zones */}
              <path d="M30 40H220V120H30Z" fill="#ebeef2" />
              <path d="M240 40H380V120H240Z" fill="#eaeef3" />
              <path d="M400 30H570V140H400Z" fill="#ebeef2" />

              <path d="M250 140H380V270H250Z" fill="#e7ebf0" rx="4" />
              <path d="M270 290H370V390H270Z" fill="#ebeef2" />

              {/* Residential housing plots */}
              <path d="M30 160H220V230H30Z" fill="#ebeef2" />
              <rect x="30" y="250" width="30" height="40" fill="#e2e7ec" />
              <rect x="70" y="250" width="30" height="40" fill="#e2e7ec" />
              <rect x="110" y="250" width="30" height="40" fill="#e2e7ec" />
              <rect x="150" y="250" width="30" height="40" fill="#e2e7ec" />
              <rect x="190" y="250" width="30" height="40" fill="#e2e7ec" />

              <rect x="30" y="320" width="30" height="40" fill="#e2e7ec" />
              <rect x="70" y="320" width="30" height="40" fill="#e2e7ec" />
              <rect x="110" y="320" width="30" height="40" fill="#e2e7ec" />
              <rect x="150" y="320" width="30" height="40" fill="#e2e7ec" />
              <rect x="190" y="320" width="30" height="40" fill="#e2e7ec" />

              <rect x="30" y="390" width="30" height="40" fill="#e2e7ec" />
              <rect x="70" y="390" width="30" height="40" fill="#e2e7ec" />
              <rect x="110" y="390" width="30" height="40" fill="#e2e7ec" />
              <rect x="150" y="390" width="30" height="40" fill="#e2e7ec" />
              <rect x="190" y="390" width="30" height="40" fill="#e2e7ec" />

              {/* Right column buildings */}
              <path d="M490 160H570V260H490Z" fill="#ebeef2" />
              <path d="M490 280H570V390H490Z" fill="#ebeef2" />

              {/* Major Roads (White Corridors) */}
              <path d="M0 130H600" stroke="#ffffff" strokeWidth="18" />
              <path d="M0 300H600" stroke="#ffffff" strokeWidth="14" />
              <path d="M0 440H600" stroke="#ffffff" strokeWidth="22" />

              {/* Vertical Avenue (Eastwood Ave) */}
              <path d="M440 0V500" stroke="#ffffff" strokeWidth="26" />
              <path d="M230 0V500" stroke="#ffffff" strokeWidth="14" />

              {/* Street Names and Landmarks */}
              <text x="325" y="85" fill="#8892a0" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
                Dickens Parking
              </text>
              <text x="325" y="100" fill="#8892a0" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
                Garage
              </text>

              <text
                x="445"
                y="250"
                fill="#8892a0"
                fontSize="11"
                fontFamily="sans-serif"
                transform="rotate(-90 445 250)"
                textAnchor="middle"
              >
                Eastwood Ave
              </text>

              <text x="510" y="445" fill="#8892a0" fontSize="11" fontFamily="sans-serif">
                Ashwood Ave
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
