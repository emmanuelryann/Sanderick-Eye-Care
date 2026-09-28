import '../styles/Footer.css';

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Blog', id: 'blog' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <a
            href="#home"
            className="footer__logo"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <svg
              className="footer__logo-icon"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="var(--color-primary)" />
              <path
                d="M18 10C12 10 7.5 15 6 18C7.5 21 12 26 18 26C24 26 28.5 21 30 18C28.5 15 24 10 18 10ZM18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C20.76 13 23 15.24 23 18C23 20.76 20.76 23 18 23Z"
                fill="#ffffff"
              />
              <circle cx="18" cy="18" r="3" fill="var(--color-primary)" />
            </svg>
            <span className="footer__logo-text">OptiClear</span>
          </a>

          <p className="footer__tagline">
            OptiClear is dedicated to providing exceptional eye care for patients of all ages.
          </p>

          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            &copy; Landingplay 2024. All right reserved.
          </span>
          <div className="footer__legal">
            <a href="#home">Privacy Policy</a>
            <span className="footer__legal-dot">&bull;</span>
            <a href="#home">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
