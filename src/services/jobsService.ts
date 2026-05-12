import api from '../api/axios';

export const getJobs = async () => {
  const response = await api.get('/job/jobs');
  return response.data;
};