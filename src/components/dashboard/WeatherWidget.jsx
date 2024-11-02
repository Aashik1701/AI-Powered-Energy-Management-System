import React from 'react';
import Card from '../shared/Card.jsx';
import PropTypes from 'prop-types';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Wind, 
  Thermometer,
  Droplets,
  Sunrise,
  Sunset
} from 'lucide-react';
const WeatherWidget = () => {
  // Sample weather data - replace with actual API data
  const weatherData = {
    current: {
      temp: 24,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      icon: Cloud,
      feelsLike: 26
    },
    forecast: [
      { time: '12 PM', temp: 25, icon: Sun },
      { time: '3 PM', temp: 26, icon: Cloud },
      { time: '6 PM', temp: 23, icon: CloudRain },
      { time: '9 PM', temp: 21, icon: Cloud }
    ],
    sun: {
      sunrise: '6:45 AM',
      sunset: '7:30 PM'
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Current Weather</h3>
            <p className="text-sm text-gray-500">Building Location</p>
          </div>
          <weatherData.current.icon className="h-10 w-10 text-blue-500" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">{weatherData.current.temp}</span>
              <span className="text-xl">°C</span>
            </div>
            <p className="text-gray-500">{weatherData.current.condition}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-gray-400" />
              <span className="text-sm">Feels like {weatherData.current.feelsLike}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-gray-400" />
              <span className="text-sm">Humidity {weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-400" />
              <span className="text-sm">Wind {weatherData.current.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Hourly Forecast */}
      <Card className="p-4">
        <h4 className="font-medium mb-4">Hourly Forecast</h4>
        <div className="grid grid-cols-4 gap-4">
          {weatherData.forecast.map((hour, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-500">{hour.time}</p>
              <hour.icon className="h-6 w-6 mx-auto my-2 text-blue-500" />
              <p className="font-medium">{hour.temp}°C</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Sun Times */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sunrise className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Sunrise</p>
              <p className="font-medium">{weatherData.sun.sunrise}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sunset className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Sunset</p>
              <p className="font-medium">{weatherData.sun.sunset}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
WeatherWidget.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.shape({
      temp: PropTypes.number,
      condition: PropTypes.string,
      humidity: PropTypes.number,
      windSpeed: PropTypes.number,
      icon: PropTypes.elementType,
      feelsLike: PropTypes.number
    }),
    forecast: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string,
        temp: PropTypes.number,
        icon: PropTypes.elementType
      })
    ),
    sun: PropTypes.shape({
      sunrise: PropTypes.string,
      sunset: PropTypes.string
    })
  })
};
export default WeatherWidget;