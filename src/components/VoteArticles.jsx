import React, { useEffect, useState } from 'react';
import { decrementVotes, incrementVotes } from '../api';


const VoteArticles = ({ articleId, currentVotes, setVotes}) => {
    const [localVotes, setLocalVotes] = useState(currentVotes)
;

  const handleUpvote = () => {
    const updatedVotes = localVotes +1;
    setLocalVotes(updatedVotes);
    setVotes(updatedVotes);

    incrementVotes(articleId).then(() => {
    
    });
  }

  const handleDownvote = () => {
    const updatedVotes= localVotes -1
    setLocalVotes(updatedVotes);
    setVotes(updatedVotes);

    decrementVotes(articleId).then(() => {
   
    });
  };

  return (
    <div className="vote-section">
      <button onClick={handleUpvote}>Like</button>
      <button onClick={handleDownvote}>Deslike</button>
    </div>
  );
};

export default VoteArticles; 

