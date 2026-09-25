import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="navbar__logo"
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <svg
          className="navbar__logo-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14" stroke="#1a1f71" strokeWidth="2" fill="#e8edff" />
          <circle cx="16" cy="16" r="7" fill="#1a1f71" />
          <circle cx="16" cy="16" r="3" fill="#e8edff" />
        </svg>
        <span className="navbar__logo-text">OptiClear</span>
      </a>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="navbar__cta navbar__cta--desktop"
        onClick={(e) => handleNavClick(e, 'contact')}
      >
        Book Appointment
      </a>

      <button
        className={`navbar__hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`navbar__overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      <aside className={`navbar__sidebar ${isOpen ? 'active' : ''}`}>
        <button className="navbar__sidebar-close" onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>
        <ul className="navbar__sidebar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="navbar__cta navbar__cta--sidebar"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Book Appointment
        </a>
      </aside>
    </nav>
  );
};

export default Navbar;
