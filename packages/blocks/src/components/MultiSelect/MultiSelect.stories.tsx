import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

export default {
  title: 'Organisms/MultiSelect',
  component: MultiSelect,
  argTypes: {},
} as ComponentMeta<typeof MultiSelect >;

const Template: ComponentStory<typeof MultiSelect> = (args) => <MultiSelect {...args} />;

export const ExampleMultiselect = Template.bind({});
ExampleMultiselect.args = {
  set_state:[
    { title: "next-js", checked: true },
    { title: "cli", checked: true },
    { title: "open-source", checked: true },
    { title: "custom", checked: false },
    { title: "organization-b", checked: true },
    { title: "components", checked: false },
  ],
  get_state (state)  {
    console.log(state);        
  }
}
