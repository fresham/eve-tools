import React from 'react';
import PropTypes from 'prop-types';

export const ResistProfileHeader = ({ image, label }) => (
  <img className="resist-profile__icon" src={image} alt={label} />
);

ResistProfileHeader.defaultProps = {};

ResistProfileHeader.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
