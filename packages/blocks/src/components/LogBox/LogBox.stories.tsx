import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogBox } from './LogBox';

export default {
  title: 'Atoms/LogBox',
  component: LogBox,
  argTypes: {},
} as ComponentMeta<typeof LogBox>;

const Template: ComponentStory<typeof LogBox> = (args) => <LogBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { massage: "This is a log line ..." },
    { massage: "This is a log line ..." }
  ]
}

export const WithNodes = Template.bind({});
WithNodes.args = {
  data: [
    { massage: <div className="flex gap-8"><p>2021/06/09 02:21</p> <p>This is a log line ... </p> </div>},
    { massage: <div className="flex gap-8"><p>2021/06/09 02:21</p> <p>This is a log line ... </p> </div>}
  ],
  onClick:(e: any) => {
    console.log(e);
  }
}
