import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';
import { Button } from '../buttons/button';

const meta: Meta = {
  title: 'Untitled UI/Base/Dropdown',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Dropdown.Root>
        <Button size="sm" color="secondary">Open menu</Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item label="Profile" />
            <Dropdown.Item label="Settings" />
            <Dropdown.Separator />
            <Dropdown.Item label="Sign out" />
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown.Root>
    </div>
  ),
};

export const WithIcons: StoryObj = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Dropdown.Root>
        <Button size="sm" color="secondary">Actions</Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item label="Edit" />
            <Dropdown.Item label="Duplicate" />
            <Dropdown.Separator />
            <Dropdown.Item label="Delete" />
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown.Root>
    </div>
  ),
};
