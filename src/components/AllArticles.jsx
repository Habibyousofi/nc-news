import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCards from "./ArticleCards";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div className="article-list">
      {articles.map((article) => {
        return <ArticleCards key={article.id} article={article} />;
      })}
    </div>
  );
}

export default AllArticles;
