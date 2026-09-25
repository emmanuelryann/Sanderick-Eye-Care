import '../styles/Blog.css';

const blogPosts = [
  {
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    title: '5 Tips to Protect Your Eyes from Digital Strain',
    date: 'Sep 10, 2026',
    readTime: '4 min read',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
    title: 'Understanding Common Vision Problems and Solutions',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    title: 'The Importance of Regular Eye Exams at All Ages',
    date: 'Aug 15, 2026',
    readTime: '5 min read',
  },
  {
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    title: 'Choosing the Right Lenses for Your Lifestyle',
    date: 'Jul 30, 2026',
    readTime: '3 min read',
  },
];

const Blog = () => {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="blog__header">
          <h2>Insights for healthy vision</h2>
          <p>
            Stay informed with the latest tips, research, and advice from our eye
            care experts to keep your vision at its best.
          </p>
        </div>
        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <article className="blog__card" key={index}>
              <div className="blog__image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog__card-content">
                <h3 className="blog__card-title">{post.title}</h3>
                <div className="blog__card-meta">
                  <span>{post.date}</span>
                  <span className="blog__meta-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="blog__footer">
          <a href="#blog" className="blog__link">
            Explore more articles →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
