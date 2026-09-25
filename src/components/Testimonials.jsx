import '../styles/Testimonials.css';

const testimonials = [
  {
    quote:
      "I've been a patient at OptiClear for over five years, and I couldn't be more satisfied. The staff is incredibly professional, and the technology they use is truly state-of-the-art. My vision has never been better!",
    name: 'Sarah Johnson',
    role: 'Patient since 2019',
    avatar: 'SJ',
  },
  {
    quote:
      "The team at OptiClear made my LASIK experience seamless and stress-free. From the initial consultation to the follow-up care, every step was handled with genuine care and professionalism.",
    name: 'Michael Chen',
    role: 'LASIK patient',
    avatar: 'MC',
  },
  {
    quote:
      "As a parent, finding the right eye care for my children was a priority. OptiClear's pediatric team is outstanding — they made my kids feel comfortable and confident during every visit.",
    name: 'Emily Rodriguez',
    role: 'Parent of two patients',
    avatar: 'ER',
  },
];

const Testimonials = () => {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2>See what our patients say</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <div className="testimonials__card" key={index}>
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{item.avatar}</div>
                <div>
                  <div className="testimonials__name">{item.name}</div>
                  <div className="testimonials__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
