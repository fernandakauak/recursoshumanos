import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 8000,                                 
  headers: { 'Content-Type': 'application/json' }
});