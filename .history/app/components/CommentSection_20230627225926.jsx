import React from 'react'
import { useState } from 'react';

export default function CommentSection() {

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

    // Create a new comment object
    const newComment = {
      name: name,
      comment: comment
    };

    // Add the new comment to the existing comments array
    setComments([...comments, newComment]);

    // Clear the input fields
    setName('');
    setComment('');
  };
  return (
    <div>CommentSection</div>
  )
}
