import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SplitButton } from './SplitButton';

export default {
  title: 'Atoms/SplitButton',
  component: SplitButton,
  argTypes: {},
} as ComponentMeta<typeof SplitButton >;

const Template: ComponentStory<typeof SplitButton> = (args) => <SplitButton {...args} />;

export const Default = Template.bind({});
Default.args = {}
