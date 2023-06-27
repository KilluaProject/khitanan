"use client"

import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

const commentsData = [
  { name: 'John', comment: 'This is the first comment.' },
  { name: 'Jane', comment: 'Here is another comment.' },
];

const Home = () => {
  const [comments, setComments] = useState(commentsData);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Comment System</h1>
      <CommentList comments={comments} />
      <CommentForm addComment={addComment} />
    </div>
  );
};


export default Home;

