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
        <Dropdown.Trigger>
          <Button size="sm" color="secondary">Open menu</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  ),
};
