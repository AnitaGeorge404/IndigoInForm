import api from '../api/axios';

export const submitApplication = async (data: any) => {
  try {
    console.log("SENDING APPLICATION DATA:", data);

    const payload = {
      name: data.name,
      email: data.email,
      position: data.position,
      description: data.message
    };

    const response = await api.post('/application', payload);

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