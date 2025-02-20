import "./App.css";
import AllArticles from "./components/AllArticles";
import { Routes, Route } from "react-router";
import SingleArticle from "./components/SingleArticle";
import ListComments from "./components/ListComments";

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
      </Routes>
    </>
  );
}

export default App;
