import React from 'react';

import { PercentageBar } from './';

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
};
