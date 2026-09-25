import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__info">
            <h2>Let&rsquo;s talk about your vision</h2>
            <p className="contact__subtitle">
              Ready to take the first step towards clearer vision? Reach out to us
              and our team will be happy to assist you.
            </p>

            <div className="contact__details">
              <div className="contact__detail-group">
                <h3>Contact</h3>
                <div className="contact__detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (555) 234-5678</span>
                </div>
                <div className="contact__detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@opticlear.com</span>
                </div>
              </div>

              <div className="contact__detail-group">
                <h3>Our Office</h3>
                <div className="contact__detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    123 Vision Lane, Suite 200
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Map showing OptiClear office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
