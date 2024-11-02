// src/components/shared/Card.jsx
import PropTypes from 'prop-types';

const Card = ({ title, children, className }) => {
  return (
    <div className={`p-4 shadow-lg rounded-lg bg-white ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
    );
  };

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;

