import { useRef } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    quote:
      '"I\'ve never felt more comfortable during an eye exam! The team was incredibly professional and caring, taking the time to explain everything in detail. My new glasses are perfect, and I can see so much more clearly now. Highly recommend this clinic to everyone!"',
    name: 'Sarah Lindsay',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"The laser eye surgery I had here was life-changing. The entire process was seamless, and the staff ensured I felt at ease every step of the way. It\'s amazing to wake up every morning with crystal-clear vision—thank you for giving me my freedom back!"',
    name: 'David Port',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"My child was nervous about their first eye exam, but the pediatric care team was so kind and patient. They turned what could have been a stressful experience into a positive one. Now, my little one loves wearing their new glasses and feels confident at school."',
    name: 'Amina Hasyem',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"Outstanding service from the moment you step through the door. Dr. Miller was thorough, gentle, and answered all my questions about cataract treatment. My vision is 20/20 again!"',
    name: 'Marcus Vance',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      '"I have been wearing specialty contacts for over ten years, and this is the best fitting I have ever received. No more dry eyes or discomfort during long work hours."',
    name: 'Elena Rostova',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector('.testimonials__card')?.clientWidth || 320;
      const scrollDistance = cardWidth * 1.1;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">See what our patients say</h2>
          <p className="testimonials__subtitle">
            Real stories from patients whose lives have been transformed by our care.
          </p>
        </div>

        <div className="testimonials__carousel-container">
          <button
            className="testimonials__nav-arrow testimonials__nav-arrow--left"
            onClick={() => handleScroll('left')}
            aria-label="Previous testimonials"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="testimonials__track" ref={trackRef}>
            {testimonialsData.map((item, index) => (
              <div className="testimonials__card" key={index}>
                <p className="testimonials__quote">{item.quote}</p>
                <div className="testimonials__author">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="testimonials__avatar-img"
                  />
                  <span className="testimonials__name">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="testimonials__nav-arrow testimonials__nav-arrow--right"
            onClick={() => handleScroll('right')}
            aria-label="Next testimonials"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
