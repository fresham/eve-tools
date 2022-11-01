import React from 'react';
import PropTypes from 'prop-types';
import { resistsType } from '../../util/types';
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

export const ResistProfile = ({ resists: { armor, shield, structure } }) => (
  <>
    <table>
      <caption>Resistances</caption>
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Shield" image="icons/shield.png" />
          </th>
          <th>
            <EMResistanceMeter value={shield.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={shield.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={shield.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={shield.explosive} />
          </th>
        </tr>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Armor" image="icons/armor.png" />
          </th>
          <th>
            <EMResistanceMeter value={armor.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={armor.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={armor.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={armor.explosive} />
          </th>
        </tr>
        <tr>
          <th scope="row">
            <ResistProfileHeader label="Structure" image="icons/structure.png" />
          </th>
          <th>
            <EMResistanceMeter value={structure.em} />
          </th>
          <th>
            <ThermalResistanceMeter value={structure.thermal} />
          </th>
          <th>
            <KineticResistanceMeter value={structure.kinetic} />
          </th>
          <th>
            <ExplosiveResistanceMeter value={structure.explosive} />
          </th>
        </tr>
      </tbody>
    </table>
  </>
);

ResistProfile.defaultProps = {};

ResistProfile.propTypes = {
  resists: PropTypes.shape({
    structure: resistsType.isRequired,
    armor: resistsType.isRequired,
    shield: resistsType.isRequired,
  }).isRequired,
};
