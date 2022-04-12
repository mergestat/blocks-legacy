import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from './ListItem';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem >;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  repositoryName: "Repository Name",
  subline: "Subline",    
}
