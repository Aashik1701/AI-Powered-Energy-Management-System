// src/components/shared/Badge.jsx
import PropTypes from 'prop-types';

const Badge = ({
  children,
  color = 'blue',
  size = 'md',
  className = '',
}) => {
  // Define color variations for the badge
  const colorStyles = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  // Define size variations for the badge
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${colorStyles[color]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

// Prop Types for validation
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'gray']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Badge;
