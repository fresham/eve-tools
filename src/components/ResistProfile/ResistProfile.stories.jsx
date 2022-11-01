import React from 'react';

import { ResistProfile } from './';

export default {
  title: 'Fitting/Resist Profile',
  component: ResistProfile,
};

const Template = args => <ResistProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
      kinetic: 20,
      explosive: 10,
    },
    shield: {
      em: 0,
      thermal: 20,
      kinetic: 40,
      explosive: 50,
    },
  },
};
