// src/components/shared/Tabs.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Handle tab switching
  const handleTabClick = (index) => setActiveIndex(index);

  // Render tabs and content
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeIndex, index, handleTabClick })
      )}
    </div>
  );
};

export const TabsList = ({ children }) => (
  <div className="tabs-list flex space-x-4 border-b-2 mb-4">
    {children}
  </div>
);

export const TabsTrigger = ({ index, activeIndex, handleTabClick, children }) => (
  <button
    className={`tabs-trigger px-4 py-2 ${
      activeIndex === index ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'
    }`}
    onClick={() => handleTabClick(index)}
  >
    {children}
  </button>
);

export const TabsContent = ({ index, activeIndex, children }) => (
  activeIndex === index ? <div className="tabs-content mt-4">{children}</div> : null
);

// Prop Types
Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
};

TabsTrigger.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleTabClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

TabsContent.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
