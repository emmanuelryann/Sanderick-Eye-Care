import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopNavLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services', hasDropdown: true },
    { label: 'Contact Us', id: 'contact' },
  ];

  const allNavLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Excellence', id: 'excellence' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <svg
            className="navbar__logo-icon"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#ffffff" />
            <path
              d="M18 10C12 10 7.5 15 6 18C7.5 21 12 26 18 26C24 26 28.5 21 30 18C28.5 15 24 10 18 10ZM18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C20.76 13 23 15.24 23 18C23 20.76 20.76 23 18 23Z"
              fill="#111827"
            />
            <circle cx="18" cy="18" r="3" fill="#ffffff" />
          </svg>
          <span className="navbar__logo-text">OptiClear</span>
        </a>

        <ul className="navbar__links">
          {desktopNavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="navbar__dropdown-icon"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href="#contact"
            className="navbar__cta navbar__cta--desktop"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Book a schedule
          </a>

          <button
            className={`navbar__hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`navbar__overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Side Navbar */}
      <aside className={`navbar__sidebar ${isOpen ? 'active' : ''}`}>
        <div className="navbar__sidebar-header">
          <div className="navbar__sidebar-logo">
            <svg
              className="navbar__logo-icon navbar__logo-icon--dark"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="#111827" />
              <path
                d="M18 10C12 10 7.5 15 6 18C7.5 21 12 26 18 26C24 26 28.5 21 30 18C28.5 15 24 10 18 10ZM18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C20.76 13 23 15.24 23 18C23 20.76 20.76 23 18 23Z"
                fill="#ffffff"
              />
              <circle cx="18" cy="18" r="3" fill="#111827" />
            </svg>
            <span className="navbar__sidebar-logo-text">OptiClear</span>
          </div>
          <button
            className="navbar__sidebar-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <ul className="navbar__sidebar-links">
          {allNavLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__sidebar-footer">
          <a
            href="#contact"
            className="navbar__cta navbar__cta--sidebar"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Book a schedule
          </a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
