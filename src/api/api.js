import axios from 'axios';

const api = {
  get(url) {
    return axios.get(url);
  },
  post(url, payload = {}) {
    return axios.post(url, payload.body);
  },
};

export default api;
