import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';  // Backend API URL
axios.defaults.withCredentials = true;  // Enable cookies & sessions

export default axios;
