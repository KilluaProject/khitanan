

import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';



const Home = () => {
  

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

