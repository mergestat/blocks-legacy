import React from 'react';
import { AutoImportIcon, CogIcon } from '@mergestat/icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SplitButton } from './SplitButton';

export default {
  title: 'Atoms/SplitButton',
  component: SplitButton,
  argTypes: {},
} as ComponentMeta<typeof SplitButton >;

const Template: ComponentStory<typeof SplitButton> = (args) => <SplitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Create Auto Import",
  menuContainerClassName: 'z-20',
  startIcon: <AutoImportIcon className="t-icon" />,
  items: [
    {
      text: "Manage auto imports",
      icon: <CogIcon className="t-icon" />
    }
  ],
  onButtonClick: () => console.log("button click"),
  onItemClick: (index: number) => console.log("item click: " + index)
}
