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
    onSortChange: (e: 'asc' | 'desc' | undefined) => {console.log(e)}
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'col',
    key: 'type',
  },
];

const dataSource = [
  {
    column: 'message',
    type: 'Text',
    collaspedComponent: 'This is message expanded data'
  },
  {
    column: 'summary',
    type: 'Text',
    collaspedComponent: 'This is summary expanded data'
  },
  {
    column: 'author_name',
    type: 'Text',
    collaspedComponent: 'This is auth name expanded data'
  },
  {
    column: 'author_email',
    type: 'Text',
    collaspedComponent: 'This is auth email expanded data'
  },
  {
    column: 'author_when',
    type: 'DATETIME',
    collaspedComponent: 'This is auth date expanded data'
  },
  {
    column: 'committer_name',
    type: 'Text',
    collaspedComponent: 'This is committer name data'
  },
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
  onSelectedChange: (rows: any[]) => console.log(rows),
}

export const CollapsibleTable = Template.bind({});
CollapsibleTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 400,
  collapsible: true,
}

export const CollapsibleCheckableTable = Template.bind({});
CollapsibleCheckableTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 400,
  collapsible: true,
  checkable: true,
  hasSelectAll: false,
}
