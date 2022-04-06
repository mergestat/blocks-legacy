import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { PencilIcon } from '@mergestat/icons';

import { Button } from '../../';
import { Toolbar } from './Toolbar';

export default {
  title: 'Molecules/Toolbar',
  component: Toolbar,
  argTypes: {},
} as ComponentMeta<typeof Toolbar>;

export const ExamplePanel: React.FC = () => {
  return (
    <Toolbar>
      <Toolbar.Left>
        <Toolbar.Item>
          <Button skin="secondary" type="button">
            Button label
          </Button>
        </Toolbar.Item>
        <Toolbar.Item>
          <Button skin="secondary" type="button">
            Button label
          </Button>
        </Toolbar.Item>
      </Toolbar.Left>
      <Toolbar.Right>
        <Toolbar.Item>
          <Button
            skin="secondary"
            type="button"
            startIcon={
              <PencilIcon className="t-icon t-icon-heroicons-pencil" />
            }
          >
            Button label
          </Button>
        </Toolbar.Item>
        <Toolbar.Item>
          <Button skin="primary" type="button">
            Button label
          </Button>
        </Toolbar.Item>
      </Toolbar.Right>
    </Toolbar>
  );
}
