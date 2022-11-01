import React from 'react';

import { PercentageBar } from './PercentageBar';

export default {
  title: 'General/Percentage Bar',
  component: PercentageBar,
};

const Template = args => <PercentageBar {...args} />;

export const ResistMeter = Template.bind({});
ResistMeter.args = {
  fillColor: '#0096D6',
  value: 50,
  label: 'EM Resist',
  style: {
    height: '2rem',
    width: '4rem',
  },
};
