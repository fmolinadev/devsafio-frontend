import apiClient from '../services/api.service';

export const postContactCompany = async (values) => {
  try {
    const { data } = await apiClient.post('/contact-company', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
