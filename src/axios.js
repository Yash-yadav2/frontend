import axios from 'axios';

// Set the base URL for all requests
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// Enable sending credentials (cookies, authentication headers, etc.)
axios.defaults.withCredentials = true;

// Optionally set default headers (e.g., for JSON requests)
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
