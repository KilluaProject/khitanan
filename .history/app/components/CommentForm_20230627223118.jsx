import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || comment.trim() === '') return;
    addComment({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <br />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here"
        required
      ></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
