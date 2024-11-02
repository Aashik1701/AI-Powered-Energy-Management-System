import apiClient from './api';

export const getWeatherData = async () => {
  const response = await apiClient.get('/weather/current');
  return response.data;
};