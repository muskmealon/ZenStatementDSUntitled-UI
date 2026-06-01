import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Untitled UI/Base/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link-color', 'link-gray', 'primary-destructive', 'secondary-destructive', 'tertiary-destructive', 'link-destructive'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { color: 'primary', size: 'md', children: 'Button' },
};

export const Secondary: Story = {
  args: { color: 'secondary', size: 'md', children: 'Button' },
};

export const Tertiary: Story = {
  args: { color: 'tertiary', size: 'md', children: 'Button' },
};

export const Destructive: Story = {
  args: { color: 'primary-destructive', size: 'md', children: 'Delete' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button color="primary" size="xs">XSmall</Button>
      <Button color="primary" size="sm">Small</Button>
      <Button color="primary" size="md">Medium</Button>
      <Button color="primary" size="lg">Large</Button>
      <Button color="primary" size="xl">XLarge</Button>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="primary-destructive">Destructive</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { color: 'primary', size: 'md', children: 'Saving...', isLoading: true },
};
