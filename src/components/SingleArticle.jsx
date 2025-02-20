import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById, getComments } from "../api";
import ListComments from "./ListComments";

function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetchArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article-page">
      <img src={article.article_img_url} />
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <p>{article.body}</p>

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
