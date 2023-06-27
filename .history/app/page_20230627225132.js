"use client"

import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';


const Home = () => {
  const [comments, setComments] = useState('');

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Comment System</h1>
      <CommentForm addComment={addComment} />
    </div>
  );
};


export default Home;

