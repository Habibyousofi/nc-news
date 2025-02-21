import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById, getComments, viewVotes } from "../api";
import ListComments from "./ListComments";
import VoteArticles from "./VoteArticles";

function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [votes, setVotes] = useState(0)

  useEffect(() => {
    fetchArticleById(article_id).then((data) => {
      setArticle(data.article);
      setVotes(data.article.votes)
    });
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
    
  }, [article_id]);
  
  const handleVoteChange = (newVotes) => {
    setVotes(newVotes);
    if (article){
      setArticle((prevArticle)=>({...prevArticle, votes: newVotes}))
    }
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article-page">
      <img src={article.article_img_url} />
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <p>{article.body}</p>
      <p>Likes: {article.votes}</p>

      <VoteArticles 
      articleId={article_id} 
      currentVotes={votes} 
      setVotes={handleVoteChange}
     />

      <button
        className="comment-button"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <div className="comment-list">
          {comments.map((comment) => (
            <ListComments key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
export default SingleArticle;
