import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
// Create the Energy Context
export const EnergyContext = createContext();

// Provider component
export const EnergyProvider = ({ children }) => {
  const [selectedBuilding, setSelectedBuilding] = useState('main-campus');
  const [dateRange, setDateRange] = useState({
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Default to last week
    end: new Date(), // Default to today
  });

  const contextValue = {
    selectedBuilding,
    setSelectedBuilding,
    dateRange,
    setDateRange,
  };
  EnergyProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <EnergyContext.Provider value={contextValue}>
      {children}
    </EnergyContext.Provider>
  );
};

export default EnergyContext;