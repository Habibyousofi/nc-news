import "./App.css";
import AllArticles from "./components/AllArticles";
import { Routes, Route } from "react-router";
import ArticleCards from "./components/ArticleCards";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
