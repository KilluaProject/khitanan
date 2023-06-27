import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div id="comments">
      {comments?.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};

export default CommentList;
