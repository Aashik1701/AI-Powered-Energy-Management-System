/* eslint-disable react/jsx-no-undef */
// src/components/ui/Slider.jsx
import PropTypes from 'prop-types';

const Slider = ({ value, onChange, min, max }) => {
  return (
    <div className="flex flex-col">
      <HeadlessSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className="w-full"
      >
        {({ getTrackProps, getThumbProps }) => (
          <>
            <div {...getTrackProps()} className="bg-gray-300 rounded h-2">
              <div className="bg-blue-600 h-full rounded" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
            </div>
            <div {...getThumbProps()} className="bg-white border-2 border-blue-600 rounded-full w-6 h-6" />
          </>
        )}
      </HeadlessSlider>
      <span className="mt-2 text-center">{value}</span>
    </div>
  );
};
Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Slider;