import api from '../api/axios';

export const submitApplication = async (data: any) => {
  const response = await api.post('/applications', data);
  return response.data;
};