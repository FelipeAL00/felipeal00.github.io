import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com/repos/felipeal00' });

export default api;