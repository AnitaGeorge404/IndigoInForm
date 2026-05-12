import api from '../api/axios';

export const submitContact = async (data: any) => {
  const response = await api.post('/contact', data);
  return response.data;
};