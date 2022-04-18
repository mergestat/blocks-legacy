import React from 'react';
import { GithubIcon } from '@mergestat/icons';
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
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  isSelected:false
}

export const Selected = Template.bind({});
Selected.args = {
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  isSelected: true
}
