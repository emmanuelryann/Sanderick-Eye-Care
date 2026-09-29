import '../styles/Hero.css';
import heroImage from '../assets/sanderick_hero2.avif';

const reviewAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
  {
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
    alt: 'Sanderick patient'
  },
];

const Hero = () => {
  const handleCta = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
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

  return (
    <section className="hero" id="home">
      <img
        className="hero__bg"
        src={heroImage}
        alt="Sanderick Eye Care"
      />
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__title">
          Experience the clarity of
          <br />
          exceptional eye care
        </h1>
        <p className="hero__subtitle">
          Transform your vision with advanced treatments and compassionate care
          tailored to your needs.
        </p>
        <div className="hero__cta-wrapper">
          <a href="#contact" className="hero__cta" onClick={handleCta}>
            Book a schedule
          </a>
        </div>

        {/* <div className="hero__reviews">
          <div className="hero__avatars">
            {reviewAvatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.src}
                alt={avatar.alt}
                className="hero__avatar-img"
              />
            ))}
          </div>
          <div className="hero__rating-info">
            <div className="hero__rating-top">
              <span className="hero__stars">★★★★★</span>
              <span className="hero__score">4.8</span>
            </div>
            <span className="hero__reviews-count">From 1500+ reviews</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
