// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import EnergyConsumption from './components/dashboard/EnergyConsumption';
import HVACControl from './components/dashboard/HVACControl';
import OccupancyChart from './components/dashboard/OccupancyChart';
import PredictiveAnalytics from './components/dashboard/PredictiveAnalytics';
import SensorReadings from './components/dashboard/SensorReadings';
import WeatherWidget from './components/dashboard/WeatherWidget';
//import EnergyRecommendations from './components/dashboard/EnergyRecommendations';
import { EnergyProvider } from './context/EnergyContext';
import './styles/tailwind.css';

const App = () => {
  return (
    <EnergyProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <Header />

            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<EnergyConsumption />} />
                <Route path="/hvac" element={<HVACControl />} />
                <Route path="/occupancy" element={<OccupancyChart />} />
                <Route path="/analytics" element={<PredictiveAnalytics />} />
                <Route path="/sensor-readings" element={<SensorReadings />} />
                <Route path="/weather" element={<WeatherWidget />} />
                
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Router>
    </EnergyProvider>
  );
};

export default App;
