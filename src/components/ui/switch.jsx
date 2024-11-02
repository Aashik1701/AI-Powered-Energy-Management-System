// src/components/ui/Switch.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Switch as HeadlessSwitch } from '@headlessui/react';
const Switch = ({ enabled, setEnabled }) => {
  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition`}
      />
    </HeadlessSwitch>
  );
};
Switch.propTypes = {
  enabled: PropTypes.bool.isRequired,
  setEnabled: PropTypes.func.isRequired,
};
export default Switch;