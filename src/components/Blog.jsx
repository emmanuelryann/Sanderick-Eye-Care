import '../styles/Blog.css';

const blogPosts = [
  {
    image:
      'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=600&h=550&q=80',
    title: '5 Tips to Protect Your Eyes from Digital Strain',
  },
  {
    image:
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&h=550&q=80',
    title: 'Understanding Common Vision Problems',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=550&q=80',
    title: 'The Importance of Regular Eye Exams for All Ages',
  },
  {
    image:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&h=550&q=80',
    title: 'Choosing the Right Glasses or Contact Lenses for Your Lifestyle',
  },
];

const Blog = () => {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="blog__header">
          <h2 className="blog__title">Insights for healthy vision</h2>
          <p className="blog__subtitle">
            Dive into expert-driven content that keeps you informed about the latest technologies, best practices, and strategies in software development.
          </p>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <article className="blog__card" key={index}>
              <div className="blog__image-wrapper">
                <img src={post.image} alt={post.title} className="blog__img" />
              </div>
              <div className="blog__content">
                <h3 className="blog__card-title">{post.title}</h3>
                <a href="#blog" className="blog__read-more">
                  <span>Read More</span>
                  <span className="blog__arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__footer">
          <button className="blog__explore-btn" type="button">
            Explore more articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
