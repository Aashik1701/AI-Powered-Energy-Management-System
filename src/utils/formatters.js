import { formatDate } from './dateUtils';

export const formatEnergyData = (data) => {
    return data.map(item => ({
      date: formatDate(new Date(item.timestamp)),
      consumption: item.consumption.toFixed(2), // Assuming consumption is a number
      cost: item.cost.toFixed(2),
    }));
  };
  
  export const formatSensorData = (data) => {
    return {
      temperature: data.temperature.toFixed(1),
      humidity: data.humidity.toFixed(1),
      occupancy: data.occupancy,
      co2Level: data.co2Level.toFixed(0),
    };
  };