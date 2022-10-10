import React from 'react';

import PersonaInput from '../components/PersonaInput';

export default {
  title: 'Example/PersonaInput',
  component: PersonaInput,
};

const Template = (args) => <PersonaInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Jane Doe',
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  name: 'Jane Doe',
  primary: true,
};
