import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/felipeal00",
});

export default api;
