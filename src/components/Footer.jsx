import '../styles/Footer.css';

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <svg
                className="footer__logo-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" stroke="#1a1f71" strokeWidth="2" fill="#e8edff" />
                <circle cx="16" cy="16" r="7" fill="#1a1f71" />
                <circle cx="16" cy="16" r="3" fill="#e8edff" />
              </svg>
              <span>OptiClear</span>
            </a>
            <p className="footer__tagline">
              Your trusted partner for comprehensive eye care and vision solutions.
            </p>
          </div>

          <div className="footer__links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Eye Exams</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>LASIK</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#home">Privacy Policy</a></li>
              <li><a href="#home">Terms of Service</a></li>
              <li><a href="#home">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; Copyright 2026 OptiClear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
