import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import { Tabs } from '../shared/Tabs';
import { TabsList, TabsTrigger } from '../shared/Tabs';

const EnergyConsumption = ({ data }) => {
  const [view, setView] = React.useState('daily');
  
  const chartData = React.useMemo(() => {
    // Sample data structure - replace with actual data processing
    return [
      { name: '00:00', consumption: 140, prediction: 150, baseline: 145 },
      { name: '04:00', consumption: 180, prediction: 170, baseline: 165 },
      { name: '08:00', consumption: 250, prediction: 240, baseline: 235 },
      { name: '12:00', consumption: 280, prediction: 260, baseline: 270 },
      { name: '16:00', consumption: 220, prediction: 230, baseline: 225 },
      { name: '20:00', consumption: 170, prediction: 180, baseline: 175 },
    ];
  }, [data, view]);

  const stats = [
    { label: 'Total Consumption', value: '2,847 kWh' },
    { label: 'Peak Usage', value: '280 kWh' },
    { label: 'Savings', value: '15%' },
    { label: 'Carbon Reduced', value: '1.2 tons' },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Energy Consumption</h2>
          <Tabs defaultValue="daily" onValueChange={setView}>
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumption" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="prediction" stroke="#059669" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="baseline" stroke="#9ca3af" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};
EnergyConsumption.propTypes = {
  data: PropTypes.array.isRequired,
};
export default EnergyConsumption;