import React from 'react';
import '../styles/blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/path-to-wooden-utensils-image.jpg',
      date: 'July 18, 2021',
      title: 'Sed magna dui, dignissim id felis vitae, consectetur',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
    {
      id: 2,
      image: '/path-to-papers-image.jpg',
      date: 'July 18, 2021',
      title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
    {
      id: 3,
      image: '/path-to-plant-image.jpg',
      date: 'July 18, 2021',
      title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
    {
      id: 4,
      image: '/path-to-clock-image.jpg',
      date: 'July 18, 2021',
      title: 'Nam pharetra fringilla justo, et commodo lacus molestie ut',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
    {
      id: 5,
      image: '/path-to-coffee-image.jpg',
      date: 'July 18, 2021',
      title: 'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
    {
      id: 6,
      image: '/path-to-building-image.jpg',
      date: 'July 18, 2021',
      title: 'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    },
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;