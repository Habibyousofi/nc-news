import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../api";

function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    console.log(article_id);
    fetchArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, [article_id]);

  if (!article) {
    return <p>Loading...</p>;
  }
  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <p>{article.body}</p>
    </div>
  );
}
export default SingleArticle;
