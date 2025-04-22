import React, { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

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

  const handleNewPost = (title: string, author: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      author,
      content,
      date: new Date().toLocaleDateString()
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id: number) => {
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