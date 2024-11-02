import apiClient from './api';

export const getSensorData = async (building) => {
  const response = await apiClient.get(`/sensors/${building}`);
  return response.data;
};