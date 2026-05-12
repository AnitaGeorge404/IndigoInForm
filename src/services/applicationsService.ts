import api from '../api/axios';

export const submitApplication = async (data: any) => {
  try {
    console.log("SENDING APPLICATION DATA:", data);

    const response = await api.post('/application/submit', data);

    console.log("APPLICATION SUCCESS:", response.data);

    return response.data;
  } catch (error: any) {
    console.error(
      "APPLICATION ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};