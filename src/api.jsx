import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-xenx.onrender.com",
  headers: { "X-Custom-Header": "footer" },
});
export const getAllArticles = () => {
  return ncNewsApi.get("/api/articles").then(({ data }) => {
    return data;
  });
};
export const fetchArticleById = (article_id) => {
  return ncNewsApi.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};
export const getComments = (article_id) => {
  return ncNewsApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });}
  

export const viewVotes = (article_id) => {
  return ncNewsApi
  .get(`/api/articles/${article_id}/votes`)
  .then(({data})=> data)
  .catch((error) => {
      console.error("Error fetching votes", error);
      throw error;
  })
  }

