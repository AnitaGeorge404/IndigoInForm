import api from '../api/axios';

export const subscribeNewsletter = async (email: string) => {
  const response = await api.post('/subscribe', { email });
  return response.data;
};