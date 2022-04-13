import React from 'react';
import { RepositoryIcon } from '@mergestat/icons';
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
  title: "Repository Name",
  subline: "Subline",
  startIcon: <RepositoryIcon className="t-icon"/>,
}
