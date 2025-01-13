import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos?_limit=10", 
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export default api;
