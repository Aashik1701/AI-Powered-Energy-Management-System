import React from 'react';
import Card from '../shared/Card.jsx';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsList, TabsTrigger } from '../shared/Tabs.jsx';
import Button from '../shared/Button.jsx';
import { TrendingUp, TrendingDown, AlertTriangle, Clock } from 'lucide-react';

const PredictiveAnalytics = () => {
  const [timeframe, setTimeframe] = React.useState('24h');

  const predictiveData = [
    { time: '00:00', actual: 150, predicted: 155, optimized: 140 },
    { time: '04:00', actual: 160, predicted: 165, optimized: 150 },
    { time: '08:00', actual: 200, predicted: 210, optimized: 185 },
    { time: '12:00', actual: 220, predicted: 225, optimized: 200 },
    { time: '16:00', actual: 190, predicted: 195, optimized: 175 },
    { time: '20:00', actual: 170, predicted: 175, optimized: 160 },
  ];

  const insights = [
    {
      title: 'Peak Load Prediction',
      value: '225 kW',
      time: '12:00 PM',
      trend: 'up',
      change: '+5%'
    },
    {
      title: 'Potential Savings',
      value: '45 kWh',
      time: 'Next 24h',
      trend: 'down',
      change: '-15%'
    },
    {
      title: 'Anomaly Risk',
      value: 'Medium',
      time: '16:00 PM',
      trend: 'warning',
      description: 'Possible HVAC overload'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Predictive Analytics</h3>
        <Tabs value={timeframe} onValueChange={setTimeframe}>
          <TabsList>
            <TabsTrigger value="24h">24h</TabsTrigger>
            <TabsTrigger value="7d">7d</TabsTrigger>
            <TabsTrigger value="30d">30d</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{insight.title}</p>
                <p className="text-2xl font-bold">{insight.value}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{insight.time}</span>
                </div>
              </div>
              <div className="flex items-center">
                {insight.trend === 'up' && (
                  <TrendingUp className="h-5 w-5 text-red-500" />
                )}
                {insight.trend === 'down' && (
                  <TrendingDown className="h-5 w-5 text-green-500" />
                )}
                {insight.trend === 'warning' && (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
              </div>
            </div>
            {insight.change && (
              <p className={`text-sm mt-2 ${
                insight.trend === 'up' ? 'text-red-500' : 'text-green-500'
              }`}>
                {insight.change} vs previous period
              </p>
            )}
          </Card>
        ))}
      </div>

      {/* Prediction Chart */}
      <Card className="p-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictiveData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#2563eb" name="Actual" strokeWidth={2} />
              <Line type="monotone" dataKey="predicted" stroke="#059669" name="Predicted" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="optimized" stroke="#9ca3af" name="Optimized" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="p-4">
        <h4 className="font-medium mb-4">AI Recommendations</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-blue-500 mt-1" />
            <div>
              <p className="font-medium">Optimize HVAC Schedule</p>
              <p className="text-sm text-gray-600">Predicted low occupancy suggests adjusting HVAC start time to 7:30 AM instead of 6:00 AM</p>
              <Button variant="outline" size="sm" className="mt-2">
                Apply Recommendation
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

import PropTypes from 'prop-types';

PredictiveAnalytics.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default PredictiveAnalytics;