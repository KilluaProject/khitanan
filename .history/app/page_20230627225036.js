"use client"
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';



const Home = () => {
  

  const addComment = (newComment) => {
    setComments([comments, newComment]);
  };

  return (
    <div>
      <h1>Comment System</h1>
      
      <CommentForm addComment={addComment} />
    </div>
  );
};


export default Home;

