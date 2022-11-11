import React from 'react';

import { ShipBrowser } from '.';

export default {
  title: 'Fitting/Ship Browser',
  component: ShipBrowser,
};

const Template = args => <ShipBrowser {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ships: [
    {
      id: 'caracal',
      name: 'Caracal',
      hp: {
        structure: 1750,
        armor: 1500,
        shield: 2125,
      },
      resists: {
        structure: {
          em: 33,
          thermal: 33,
          kinetic: 33,
          explosive: 33,
        },
        armor: {
          em: 50,
          thermal: 45,
          kinetic: 25,
          explosive: 10,
        },
        shield: {
          em: 0,
          thermal: 20,
          kinetic: 40,
          explosive: 50,
        },
      },
    },
    {
      id: 'omen',
      name: 'Omen',
      hp: {
        structure: 1875,
        armor: 2125,
        shield: 1500,
      },
      resists: {
        structure: {
          em: 33,
          thermal: 33,
          kinetic: 33,
          explosive: 33,
        },
        armor: {
          em: 50,
          thermal: 35,
          kinetic: 25,
          explosive: 20,
        },
        shield: {
          em: 0,
          thermal: 20,
          kinetic: 40,
          explosive: 50,
        },
      },
    },
    {
      id: 'thorax',
      name: 'Thorax',
      hp: {
        structure: 2000,
        armor: 2000,
        shield: 1500,
      },
      resists: {
        structure: {
          em: 33,
          thermal: 33,
          kinetic: 33,
          explosive: 33,
        },
        armor: {
          em: 50,
          thermal: 35,
          kinetic: 35,
          explosive: 10,
        },
        shield: {
          em: 0,
          thermal: 20,
          kinetic: 40,
          explosive: 50,
        },
      },
    },
    {
      id: 'stabber',
      name: 'Stabber',
      hp: {
        structure: 1625,
        armor: 1625,
        shield: 2000,
      },
      resists: {
        structure: {
          em: 33,
          thermal: 33,
          kinetic: 33,
          explosive: 33,
        },
        armor: {
          em: 60,
          thermal: 35,
          kinetic: 25,
          explosive: 10,
        },
        shield: {
          em: 0,
          thermal: 20,
          kinetic: 40,
          explosive: 50,
        },
      },
    },
  ],
};
