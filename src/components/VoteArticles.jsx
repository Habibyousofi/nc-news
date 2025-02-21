import React, { useState } from 'react';

const VoteArticles = ({ articleId, currentVotes }) => {
  const [votes, setVotes] = useState(currentVotes);

  const handleVote = (action) => {
    if (action === 'upvote') {
      setVotes(votes + 1);
    } else {
      setVotes(votes - 1);
    }
  };

  return (
    <div className="vote-section">
      <p>Likes {votes}</p>
      <button onClick={() => handleVote('upvote')}>Like</button>
      <button onClick={() => handleVote('downvote')}>Deslike</button>
    </div>
  );
};

export default VoteArticles; 
