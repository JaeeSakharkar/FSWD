import React from 'react';

function BlogPost({ title, author, content, date, onDelete }) {
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