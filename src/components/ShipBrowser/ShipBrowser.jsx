import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hpsType, resistsType } from '../../util/types';
import { ResistProfile } from '../ResistProfile';

import './ShipBrowser.css';

export const ShipBrowser = ({ ships }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedShip = ships[selectedIndex];

  const handleChange = event => setSelectedIndex(event.target.selectedIndex);

  return (
    <div className="ship-browser">
      <select
        className="ship-browser__ship-select"
        name="ship"
        value={ships[selectedIndex].id}
        onChange={handleChange}>
        {ships.map(ship => (
          <option key={`${ship.id}-option`} value={ship.id}>
            {ship.name}
          </option>
        ))}
      </select>
      <img
        className="ship-browser__ship-image"
        src={`ships/${selectedShip.id}.png`}
        alt={selectedShip.name}
      />
      <ResistProfile hp={selectedShip.hp} resists={selectedShip.resists} />
    </div>
  );
};

ShipBrowser.defaultProps = {};

ShipBrowser.propTypes = {
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hp: hpsType,
      resists: resistsType,
    })
  ),
};
