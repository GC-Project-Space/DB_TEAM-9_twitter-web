import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
    
    // 추가  
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  },
  withCredentials: true,
});