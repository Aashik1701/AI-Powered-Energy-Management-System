import { useState, useEffect } from 'react';
import { getSensorData } from '../services/sensorService';

export const useSensorData = (building) => {
  const [sensorData, setSensorData] = useState(null);
  const [sensorLoading, setSensorLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        setSensorLoading(true);
        const data = await getSensorData(building);
        setSensorData(data);
      } catch (err) {
        setError(err);
      } finally {
        setSensorLoading(false);
      }
    };

    if (building) {
      fetchSensorData();
    }
  }, [building]);

  return { sensorData, sensorLoading, error };
};