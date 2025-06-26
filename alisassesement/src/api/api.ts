import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5173/api', // Change the port if your backend runs on a different one
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;