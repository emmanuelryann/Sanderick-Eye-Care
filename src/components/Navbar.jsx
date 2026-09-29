import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/sec_logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = (e) => {
    if (e) e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling while the mobile sidebar is open without jumping to the top
  useEffect(() => {
    if (!isOpen) return;

    const preventScroll = (e) => {
      const sidebar = document.querySelector('.navbar__sidebar');
      if (sidebar && sidebar.contains(e.target)) {
        return; // Allow scrolling inside the sidebar itself
      }
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
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
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
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
          {/* <svg
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
          </svg> */}
          <img src={logo} className="navbar__logo-icon"/>
          {/* <span className="navbar__logo-text">Sanderick</span> */}
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
            type="button"
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
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      ></div>

      {/* Mobile Side Navbar */}
      <aside className={`navbar__sidebar ${isOpen ? 'active' : ''}`} aria-label="Mobile Navigation">
        <div className="navbar__sidebar-header">
          <div className="navbar__sidebar-title-group">
            <span className="navbar__sidebar-title">Sanderick Eye Care</span>
          </div>
          <button
            type="button"
            className="navbar__sidebar-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg
              className="navbar__sidebar-close-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="navbar__sidebar-nav">
          <ul className="navbar__sidebar-links">
            {allNavLinks.map((link) => (
              <li key={link.id} className="navbar__sidebar-item">
                <a
                  href={`#${link.id}`}
                  className="navbar__sidebar-link"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__sidebar-footer">
          <div className="navbar__sidebar-info">
            <div className="navbar__sidebar-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 234 567 890</span>
            </div>
            <div className="navbar__sidebar-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon - Fri: 10AM - 10PM</span>
            </div>
          </div>

          <a
            href="#contact"
            className="navbar__cta navbar__cta--sidebar"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>Book a schedule</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
