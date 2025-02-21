import { Link } from "react-router";

function ArticleCards({ article }) {

  return (
    <div className="article-card">
      <img src={article.article_img_url} />
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
