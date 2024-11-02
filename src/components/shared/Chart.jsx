// src/components/shared/Chart.jsx

import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from 'prop-types';

const Chart = ({ type, data, options }) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} />;
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'pie':
        return <Pie data={data} options={options} />;
      default:
        return <p>Invalid chart type</p>;
    }
  };

  return (
    <div className="chart-container">
      {data ? renderChart() : <p>Loading chart data...</p>}
    </div>
  );
};
Chart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object
};

export default Chart;
