import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from './Toggle';

export default {
  title: 'Molecules/Toggle',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle >;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  onChange: (e: any) => {
    console.log(e);
  }
}
