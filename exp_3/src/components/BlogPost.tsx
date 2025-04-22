import React from 'react';

interface BlogPostProps {
  title: string;
  author: string;
  content: string;
  date: string;
  onDelete: () => void;
}

function BlogPost({ title, author, content, date, onDelete }: BlogPostProps) {
  return (
    <div className="blog-post">
      <button className="delete-button" onClick={onDelete}>Delete</button>
      <h2>{title}</h2>
      <div className="author">By {author}</div>
      <div className="date">{date}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export default BlogPost;