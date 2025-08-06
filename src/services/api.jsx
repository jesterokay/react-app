// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jester-group.onrender.com/api',
  // baseURL: 'http://localhost:8001/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;