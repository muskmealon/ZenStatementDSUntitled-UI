import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badges';

const meta: Meta<typeof Badge> = {
  title: 'Untitled UI/Base/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'brand', 'error', 'warning', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['filled', 'outlined', 'modern'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Brand: Story = {
  args: { color: 'brand', size: 'md', children: 'Brand' },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge color="brand">Brand</Badge>
      <Badge color="gray">Gray</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge color="brand" size="sm">Small</Badge>
      <Badge color="brand" size="md">Medium</Badge>
      <Badge color="brand" size="lg">Large</Badge>
    </div>
  ),
};
