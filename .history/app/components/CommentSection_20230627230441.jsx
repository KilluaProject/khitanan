import React, { useState } from 'react';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = {
        id: Date.now(),
        name: name,
        comment: comment,
      };

      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div>
      <h1>Comment Section</h1>

      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <br />
        <textarea
          placeholder="Write your comment here"
          value={comment}
          onChange={handleCommentChange}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
