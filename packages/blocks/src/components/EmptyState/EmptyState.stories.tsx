import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyState } from './EmptyState';

export default {
  title: 'Atoms/EmptyState',
  component: EmptyState,
  argTypes: {},
} as ComponentMeta<typeof EmptyState >;

const Template: ComponentStory<typeof EmptyState> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});

Default.args = {

}
