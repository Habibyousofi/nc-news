import "./App.css";
import AllArticles from "./components/AllArticles";
import { Routes, Route } from "react-router";
import SingleArticle from "./components/SingleArticle";
import ListComments from "./components/ListComments";
import VoteArticles from "./components/VoteArticles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ListComments />}
        />
        <Route path="/articles/:article_id" element={<VoteArticles/>}/>
      </Routes>
    </>
  );
}

export default App;
