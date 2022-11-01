import { shape, number } from 'prop-types';

export const resistsType = shape({
  em: number.isRequired,
  thermal: number.isRequired,
  kinetic: number.isRequired,
  explosive: number.isRequired,
});
