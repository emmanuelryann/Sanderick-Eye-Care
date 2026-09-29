import '../styles/Blog.css';
import blog1 from '../assets/blog1.avif';
import blog2 from '../assets/blog2.avif';
import blog3 from '../assets/blog3.avif';
import blog4 from '../assets/blog4.avif';

const blogPosts = [
  {
    image: blog1,
    title: '5 Tips to Protect Your Eyes from Digital Strain',
  },
  {
    image: blog2,
    title: 'Understanding Common Vision Problems',
  },
  {
    image: blog3,
    title: 'The Importance of Regular Eye Exams for All Ages',
  },
  {
    image: blog4,
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
