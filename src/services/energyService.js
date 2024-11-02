import apiClient from './api';

export const getEnergyData = async (building, dateRange) => {
  const response = await apiClient.get(`/energy/${building}`, {
    params: {
      start: dateRange.start.toISOString(),
      end: dateRange.end.toISOString(),
    },
  });
  return response.data;
};