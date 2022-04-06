import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const LabelTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

export const Default = LabelTemplate.bind({});
Default.args = {
  children: 'This is an help text',
};
