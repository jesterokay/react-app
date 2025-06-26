import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jester-group.onrender.com/api', // Adjust to your Laravel API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;