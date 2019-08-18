import axios from 'axios'

export const http = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_BASE_URL
  });
