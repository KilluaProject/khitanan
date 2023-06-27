import React from 'react';

const Comment = ({ name, comment }) => {
  return (
    <div className="comment-container">
      <p className="name">{name}</p>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Comment;
