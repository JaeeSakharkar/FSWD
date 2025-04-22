import React, { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import './index.css';

function App() {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage when component mounts
  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  const handleNewPost = (title, author, content) => {
    const newPost = {
      id: Date.now(),
      title,
      author,
      content,
      date: new Date().toLocaleDateString()
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>My Simple Blog</h1>
      </header>

      <BlogForm onSubmit={handleNewPost} />

      <div className="blog-list">
        {posts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            author={post.author}
            content={post.content}
            date={post.date}
            onDelete={() => handleDeletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;