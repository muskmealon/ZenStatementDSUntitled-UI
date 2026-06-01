import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const options = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
];

const meta: Meta<typeof Select> = {
  title: 'Untitled UI/Base/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { items: options, placeholder: 'Select an option', label: 'Label' },
};

export const WithDefaultValue: Story = {
  args: { items: options, defaultSelectedKey: '2', label: 'Label' },
};

export const Disabled: Story = {
  args: { items: options, placeholder: 'Select an option', label: 'Label', isDisabled: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <Select items={options} placeholder="Small" size="sm" />
      <Select items={options} placeholder="Medium" size="md" />
      <Select items={options} placeholder="Large" size="lg" />
    </div>
  ),
};
