import axios from "axios";

export const getPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
