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
  { column: 'message', type: 'Text', exp_data: 'This is message expanded data' },
  { column: 'summary', type: 'Text', exp_data: 'This is summary expanded data' },
  { column: 'author_name', type: 'Text', exp_data: 'This is auth name expanded data' },
  { column: 'author_email', type: 'Text', exp_data: 'This is auth email expanded data' },
  { column: 'author_when', type: 'DATETIME', exp_data: 'This is auth date expanded data' },
  { column: 'committer_name', type: 'Text', exp_data: 'This is committer name data' },
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200
}

export const ChekableTable = Template.bind({});
ChekableTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200,
  checkable: true,
  hasSelectAll: true,
  onSelectedChange: (rows: any[]) => console.log(rows),
}

export const SortableTable = Template.bind({});
SortableTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200,
  checkable: true,
  sortable: true,
}

export const CollapsibleTable = Template.bind({});
CollapsibleTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 400,
  collapsible: true,
}
