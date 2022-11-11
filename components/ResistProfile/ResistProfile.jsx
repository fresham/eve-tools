import React, { useState } from 'react';
import { hpsType, resistsType } from '../../util/types';
import { PercentageBar } from '../PercentageBar';
import { ResistProfileHeader } from './ResistProfileHeader';

import './ResistProfile.css';

const EMResistanceMeter = ({ value }) => (
  <PercentageBar value={value} label="EM Resistance" fillColor="#0096d6" />
);

const ThermalResistanceMeter = ({ value }) => (
  <PercentageBar value={value} label="Thermal Resistance" fillColor="#e32012" />
);

const KineticResistanceMeter = ({ value }) => (
  <PercentageBar value={value} label="Kinetic Resistance" fillColor="#b3b3b3" />
);

const ExplosiveResistanceMeter = ({ value }) => (
  <PercentageBar value={value} label="Explosive Resistance" fillColor="#d99800" />
);

const DISPLAY_TYPES = { EHP: 'EHP', HP: 'HP' };

const getEHP = (hp, resists) => {
  const averageResists = Object.values(resists).reduce((a, b) => a + b, 0) / 4;
  return hp * (1 / (1 - (averageResists + Number.EPSILON) / 100));
};

export const ResistProfile = ({ hp, resists }) => {
  const [displayType, setDisplayType] = useState(DISPLAY_TYPES.EHP);

  const structureEHP = getEHP(hp.structure, resists.structure);
  const armorEHP = getEHP(hp.armor, resists.armor);
  const shieldEHP = getEHP(hp.shield, resists.shield);
  const totalEHP = structureEHP + armorEHP + shieldEHP;
  const totalRawHP = hp.structure + hp.armor + hp.shield;
  const hpLabel =
    displayType === DISPLAY_TYPES.EHP
      ? `Effective HP: ${totalEHP.toFixed()}`
      : `Raw HP: ${totalRawHP.toFixed()}`;

  const toggleDisplayType = () => {
    if (displayType === DISPLAY_TYPES.EHP) {
      setDisplayType(DISPLAY_TYPES.HP);
    } else {
      setDisplayType(DISPLAY_TYPES.EHP);
    }
  };

  return (
    <table className="resist-profile">
      <caption className="resist-profile__table-caption">
        Resistances <span className="resist-profile__detail">({hpLabel})</span>
      </caption>
      <thead>
        <tr>
          <td></td>
          <th scope="col">
            <ResistProfileHeader label="EM" image="icons/em.png" />
          </th>
          <th scope="col">
            <ResistProfileHeader label="Thermal" image="icons/thermal.png" />
          </th>
          <th scope="col">
            <ResistProfileHeader label="Kinetic" image="icons/kinetic.png" />
          </th>
          <th scope="col">
            <ResistProfileHeader label="Explosive" image="icons/explosive.png" />
          </th>
          <th scope="col">
            <button className="resist-profile__hp-display-toggle" onClick={toggleDisplayType}>
              {displayType === DISPLAY_TYPES.EHP ? DISPLAY_TYPES.EHP : DISPLAY_TYPES.HP}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Shield" image="icons/shield.png" />
          </th>
          <th>
            <EMResistanceMeter value={resists.shield.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={resists.shield.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={resists.shield.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={resists.shield.explosive} />
          </th>
          <th className="resist-profile__detail">
            {displayType === DISPLAY_TYPES.EHP ? shieldEHP.toFixed() : hp.shield}
          </th>
        </tr>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Armor" image="icons/armor.png" />
          </th>
          <th>
            <EMResistanceMeter value={resists.armor.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={resists.armor.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={resists.armor.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={resists.armor.explosive} />
          </th>
          <th className="resist-profile__detail">
            {displayType === DISPLAY_TYPES.EHP ? armorEHP.toFixed() : hp.armor}
          </th>
        </tr>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Structure" image="icons/structure.png" />
          </th>
          <th>
            <EMResistanceMeter value={resists.structure.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={resists.structure.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={resists.structure.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={resists.structure.explosive} />
          </th>
          <th className="resist-profile__detail">
            {displayType === DISPLAY_TYPES.EHP ? structureEHP.toFixed() : hp.structure}
          </th>
        </tr>
      </tbody>
    </table>
  );
};

ResistProfile.defaultProps = {};

ResistProfile.propTypes = {
  hp: hpsType,
  resists: resistsType,
};
