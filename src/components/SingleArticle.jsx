import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../api";

function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();
  console.log(article_id);

  useEffect(() => {
    fetchArticleById(article_id).then((data) => {
      console.log(article);
      setArticle(data.article);
      console.log(data);
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
      <img src={article.img_url} />
    </div>
  );
}
export default SingleArticle;
