import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // O endereço do seu backend
  withCredentials: true, // Importante para os cookies funcionarem
});

export default api;