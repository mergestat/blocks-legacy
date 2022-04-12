import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InlineBanner } from './InlineBanner';

export default {
  title: 'Atoms/InlineBanner',
  component: InlineBanner,
  argTypes: {},
} as ComponentMeta <typeof InlineBanner>;

const Template: ComponentStory<typeof InlineBanner> = (args) => <InlineBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log("HI");
  },
}
