import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setWeatherLoading(true);
        const data = await getWeatherData();
        setWeatherData(data);
      } catch (err) {
        setError(err);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return { weatherData, weatherLoading, error };
};