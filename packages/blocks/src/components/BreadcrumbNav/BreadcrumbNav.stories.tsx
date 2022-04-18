import React from 'react';
import {
  CaretUpIcon,
  CircleErrorFilledIcon,
  ExternalLinkIcon
} from '@mergestat/icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadcrumbNav } from './BreadcrumbNav';

export default {
  title: 'Atoms/BreadcrumbNav',
  component: BreadcrumbNav,
  argTypes: {},
} as ComponentMeta<typeof BreadcrumbNav >;

const Template: ComponentStory<typeof BreadcrumbNav> = (args) => <BreadcrumbNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { text: "Repos" },
    {
      startIcon: <div className="t-black-white"><CaretUpIcon className="t-icon" /></div>,
      text: "vercel/next.js",
      endIcon: <ExternalLinkIcon className="t-icon t-gray" />
    },
    {
      startIcon: <CircleErrorFilledIcon className="t-icon t-red" />,
      text: "Pull requests",
      onClick: ()=>console.log("hi")
    }
  ]
}
