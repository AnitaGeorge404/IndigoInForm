import api from '../api/axios';



export const getJobs = async () => {
  const response = await api.get('/jobs');
  return response.data.data; // ← grab the nested data array
};