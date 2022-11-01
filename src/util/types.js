import { shape, number } from 'prop-types';

export const resistLayerType = shape({
  em: number.isRequired,
  thermal: number.isRequired,
  kinetic: number.isRequired,
  explosive: number.isRequired,
});

export const hpsType = shape({
  structure: number.isRequired,
  armor: number.isRequired,
  shield: number.isRequired,
});

export const resistsType = shape({
  structure: resistLayerType.isRequired,
  armor: resistLayerType.isRequired,
  shield: resistLayerType.isRequired,
});
