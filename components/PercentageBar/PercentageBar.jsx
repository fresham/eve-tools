import React from 'react';
import PropTypes from 'prop-types';

import './PercentageBar.css';

export const PercentageBar = ({ fillColor, label, max = 100, min = 0, style, value }) => (
  <meter
    className="percentage-bar"
    aria-label={label}
    min={min}
    max={max}
    value={value}
    style={{
      '--fill': fillColor,
      '--label': `'${(value / max) * 100}%'`,
      ...style,
    }}
  ></meter>
);

PercentageBar.defaultProps = {
  fillColor: '#399c00',
  max: 100,
  min: 0,
};

PercentageBar.propTypes = {
  fillColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.number.isRequired,
};
