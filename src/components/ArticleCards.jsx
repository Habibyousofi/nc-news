import { Link } from "react-router";

function ArticleCards({ article }) {
  console.log(article.id);

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p className="author">{article.author}</p>
      <p className="body">{article.body}</p>
      <Link to={`/articles/${article.article_id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
}

export default ArticleCards;
