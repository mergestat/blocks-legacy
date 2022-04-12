import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioCard } from './RadioCard';

export default {
  title: 'Atoms/RadioCard',
  component: RadioCard,
  argTypes: {},
} as ComponentMeta<typeof RadioCard >;

const Template: ComponentStory<typeof RadioCard> = (args) => <RadioCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Option",
  isSelected:false
}

export const Selected = Template.bind({});
Selected.args = {
  label: "Option",
  isSelected: true
}
