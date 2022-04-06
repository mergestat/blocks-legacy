import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'Molecules/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const columns = [
  {
    title: 'Column',
    dataIndex: 'column',
    className: 'col',
    key: 'column',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'col',
    key: 'type',
  },
];

const dataSource = [
  { column: 'message', type: 'Text' },
  { column: 'summary', type: 'Text' },
  { column: 'author_name', type: 'Text' },
  { column: 'author_email', type: 'Text' },
  { column: 'author_when', type: 'DATETIME' },
  { column: 'committer_name', type: 'Text' },
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200
}
