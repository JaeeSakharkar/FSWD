import React, { useState } from 'react';

interface BlogFormProps {
  onSubmit: (title: string, author: string, content: string) => void;
}

function BlogForm({ onSubmit }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && author.trim() && content.trim()) {
      onSubmit(title, author, content);
      setTitle('');
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog post here"
        />
      </div>
      <button type="submit" className="submit-button">Create Post</button>
    </form>
  );
}

export default BlogForm;