import api from './api';

const balanceAPI = {
  async get() {
    try {
      const res = await api.get('/api/balance');

      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  async credit(amount) {
    try {
      const res = await api.put('/api/balance/credit', {
        body: { amount },
      });

      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },

  async debit(amount) {
    try {
      const res = await api.put('/api/balance/debit', {
        body: { amount },
      });

      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },
};

export default balanceAPI;
