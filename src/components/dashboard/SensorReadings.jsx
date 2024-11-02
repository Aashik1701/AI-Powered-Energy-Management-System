import React, { useState, useEffect } from 'react';
import Card from '../shared/Card.jsx';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Gauge,
  Sun,
  AlertCircle
} from 'lucide-react';
import PropTypes from 'prop-types';

const SensorReadings = ({ initialData }) => {
  const [sensorData, setSensorData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      // Replace this with actual API call
      const newData = await mockFetchSensorData();
      setSensorData(newData);
    };

    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    const statusColors = {
      normal: 'text-green-500',
      warning: 'text-yellow-500',
      alert: 'text-red-500',
      good: 'text-green-500',
      poor: 'text-red-500'
    };
    return statusColors[status] || 'text-gray-500';
  };

  const SensorCard = React.memo(({ title, value, unit, status, trend, icon: Icon }) => {
    if (value === undefined || value === null) return null;

    return (
      <Card className="p-4" role="region" aria-label={`${title} sensor reading`}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${getStatusColor(status)}`} />
            <div>
              <p className="text-sm text-gray-500">{title}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{Number(value).toFixed(1)}</span>
                <span className="text-sm text-gray-500">{unit}</span>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <span className={trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {trend}
            </span>
          </div>
        </div>
      </Card>
    );
  });

  SensorCard.displayName = 'SensorCard';

  SensorCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number,
    unit: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    trend: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired
  };

  const renderAlerts = () => {
    const alerts = sensorData.alerts || [];

    if (alerts.length === 0) {
      return <p className="text-gray-500">No active alerts</p>;
    }

    return alerts.map((alert, index) => (
      <div 
        key={`alert-${index}-${alert.time}`} 
        className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg"
      >
        <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
        <div>
          <p className="font-medium">{alert.message}</p>
          <p className="text-sm text-gray-500">{alert.time}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Sensor Readings</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SensorCard
          title="Temperature"
          icon={Thermometer}
          {...sensorData.temperature}
        />
        <SensorCard
          title="Humidity"
          icon={Droplets}
          {...sensorData.humidity}
        />
        <SensorCard
          title="Air Quality"
          icon={Wind}
          {...sensorData.airQuality}
        />
        <SensorCard
          title="CO2 Level"
          icon={Gauge}
          {...sensorData.co2}
        />
        <SensorCard
          title="Pressure"
          icon={Gauge}
          {...sensorData.pressure}
        />
        <SensorCard
          title="Light Level"
          icon={Sun}
          {...sensorData.light}
        />
      </div>

      <Card className="p-4">
        <h4 className="font-medium mb-4">Sensor Alerts</h4>
        <div className="space-y-3">
          {renderAlerts()}
        </div>
      </Card>
    </div>
  );
};

SensorReadings.propTypes = {
  initialData: PropTypes.shape({
    temperature: PropTypes.object,
    humidity: PropTypes.object,
    airQuality: PropTypes.object,
    co2: PropTypes.object,
    pressure: PropTypes.object,
    light: PropTypes.object,
    alerts: PropTypes.array
  }).isRequired
};

// Mock function to simulate data fetching
const mockFetchSensorData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: { value: 23.5, unit: '°C', status: 'normal', trend: '+1.0' },
        humidity: { value: 47, unit: '%', status: 'normal', trend: '+2' },
        airQuality: { value: 80, unit: 'AQI', status: 'good', trend: '-5' },
        co2: { value: 700, unit: 'ppm', status: 'normal', trend: '+50' },
        pressure: { value: 1015, unit: 'hPa', status: 'normal', trend: '+2' },
        light: { value: 500, unit: 'lux', status: 'normal', trend: '+50' },
        alerts: [
          { type: 'warning', message: 'CO2 levels rising in Zone 2', time: '2 min ago' }
        ]
      });
    }, 1000);
  });
};

export default SensorReadings;