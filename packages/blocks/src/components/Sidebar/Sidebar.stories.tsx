import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  TerminalIcon,
  TableIcon,
  DocumentTextIcon,
  DatabaseIcon,
  CogIcon,
} from '@mergestat/icons';
import { Sidebar } from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

export const ExamplePanel: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Item label="Queries" active icon={<TerminalIcon className="t-icon" />} />
      <Sidebar.Item label="Views" icon={<TableIcon className="t-icon" />} />
      <Sidebar.Item
        className="default"
        label="Reports"
        disabled
        icon={(<DocumentTextIcon className="t-icon" />)}
      />
      <Sidebar.Item label="Postgres" icon={<DatabaseIcon className="t-icon" />} />

      <Sidebar.Divider />
      <Sidebar.Item label="Settings" icon={<CogIcon className="t-icon" />} />
    </Sidebar>
  );
}
