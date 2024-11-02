import { useState, useEffect } from 'react';
import { getEnergyData } from '../services/energyService';

export const useEnergyData = (building, dateRange) => {
  const [energyData, setEnergyData] = useState(null);
  const [energyLoading, setEnergyLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        setEnergyLoading(true);
        const data = await getEnergyData(building, dateRange);
        setEnergyData(data);
      } catch (err) {
        setError(err);
      } finally {
        setEnergyLoading(false);
      }
    };

    if (building && dateRange) {
      fetchEnergyData();
    }
  }, [building, dateRange]);

  return { energyData, energyLoading, error };
};