import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-xenx.onrender.com",
});
export const getAllArticles = () => {
  return ncNewsApi.get("/api/articles").then(({ data }) => {
    console.log(data);

    return data;
  });
};
export const fetchArticleById = (article_id) => {
  return ncNewsApi
    .get(`/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      console.error("Error fetching article:", error);
      throw error;
    });
};
