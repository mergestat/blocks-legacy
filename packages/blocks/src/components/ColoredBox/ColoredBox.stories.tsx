import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClockIcon } from '@mergestat/icons';
import { ColoredBox } from './ColoredBox';

export default {
  title: `Atoms/ColoredBox`,
  component: ColoredBox,
  parameters: {},
} as ComponentMeta<typeof ColoredBox>;

const Template: ComponentStory<typeof ColoredBox> = (args) => (
  <ColoredBox {...args} />
);

export const ColoredBoxIcon = Template.bind({});
ColoredBoxIcon.args = {
  size: '16',
  skin: 'purple',
  children: <ClockIcon width="24" />,
};

export const ColoredBoxText = Template.bind({});
ColoredBoxText.args = {
  size: '16',
  skin: 'blue',
  children: <span>JD</span>,
};

export const ColoredBoxCircle = Template.bind({});
ColoredBoxCircle.args = {
  size: '10',
  skin: 'indigo',
  className: 'rounded-full',
  children:  <span>JD</span>
};

export const ColoredBoxCustomSize = Template.bind({});
ColoredBoxCustomSize.args = {
  size: '8',
  skin: 'yellow',
  className: 'rounded-full',
  children:  <span>JD</span>
};
