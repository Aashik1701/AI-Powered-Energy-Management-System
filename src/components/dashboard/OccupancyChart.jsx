import React from 'react';
import Card from '../shared/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Badge from '../shared/Badge.jsx';

const OccupancyChart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('today');

  const sampleData = [
    { time: '06:00', occupancy: 10, capacity: 100 },
    { time: '08:00', occupancy: 45, capacity: 100 },
    { time: '10:00', occupancy: 80, capacity: 100 },
    { time: '12:00', occupancy: 75, capacity: 100 },
    { time: '14:00', occupancy: 85, capacity: 100 },
    { time: '16:00', occupancy: 65, capacity: 100 },
    { time: '18:00', occupancy: 30, capacity: 100 },
    { time: '20:00', occupancy: 15, capacity: 100 },
  ];

  const currentOccupancy = 65;
  const maxCapacity = 100;
  const peakTime = '14:00';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Building Occupancy</h3>
          <p className="text-sm text-gray-500">Real-time occupancy tracking</p>
        </div>
        <div className="flex gap-2">
          <Badge variant={selectedTimeframe === 'today' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedTimeframe('today')}>
            Today
          </Badge>
          <Badge variant={selectedTimeframe === 'week' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedTimeframe('week')}>
            Week
          </Badge>
          <Badge variant={selectedTimeframe === 'month' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedTimeframe('month')}>
            Month
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Current Occupancy</p>
          <p className="text-2xl font-bold">{currentOccupancy}%</p>
          <p className="text-xs text-gray-400">of maximum capacity</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Maximum Capacity</p>
          <p className="text-2xl font-bold">{maxCapacity}</p>
          <p className="text-xs text-gray-400">people</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Peak Time</p>
          <p className="text-2xl font-bold">{peakTime}</p>
          <p className="text-xs text-gray-400">highest occupancy</p>
        </Card>
      </div>

      <Card className="p-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sampleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="occupancy"
                stroke="#2563eb"
                fill="#93c5fd"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="capacity"
                stroke="#9ca3af"
                fill="#e5e7eb"
                fillOpacity={0.1}
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-medium mb-4">Zone Occupancy</h4>
        <div className="space-y-4">
          {['Floor 1', 'Floor 2', 'Floor 3'].map((zone, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{zone}</span>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-500">
                {Math.floor(Math.random() * 50)} people
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default OccupancyChart;