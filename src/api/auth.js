import axios from 'axios';

import api from './api';

const authAPI = {
  isLoggedIn() {
    const token = localStorage.getItem('tichnas-token');

    if (!token) return false;

    axios.defaults.headers.common['x-auth-token'] = token;

    return true;
  },

  async login(username, password) {
    try {
      const res = await api.post('/api/auth', {
        body: { username, password },
      });

      const { token } = res.data;

      localStorage.setItem('tichnas-token', token);

      axios.defaults.headers.common['x-auth-token'] = token;

      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  async register(username, password) {
    try {
      const res = await api.post('/api/auth/register', {
        body: { username, password },
      });

      const { token } = res.data;

      localStorage.setItem('tichnas-token', token);

      axios.defaults.headers.common['x-auth-token'] = token;

      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  logout() {
    localStorage.removeItem('tichnas-employee-token');
    delete axios.defaults.headers.common['x-auth-token'];
  },
};

export default authAPI;
