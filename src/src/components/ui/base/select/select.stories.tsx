import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';
import { SelectItem } from './select-item';

const options = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
];

const meta: Meta = {
  title: 'Untitled UI/Base/Select',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Select items={options} placeholder="Select an option" label="Label">
      {(item) => <SelectItem key={item.id} id={item.id}>{item.label}</SelectItem>}
    </Select>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <Select items={options} placeholder="Disabled" label="Label" isDisabled>
      {(item) => <SelectItem key={item.id} id={item.id}>{item.label}</SelectItem>}
    </Select>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <Select items={options} placeholder="Small" size="sm">
        {(item) => <SelectItem key={item.id} id={item.id}>{item.label}</SelectItem>}
      </Select>
      <Select items={options} placeholder="Medium" size="md">
        {(item) => <SelectItem key={item.id} id={item.id}>{item.label}</SelectItem>}
      </Select>
      <Select items={options} placeholder="Large" size="lg">
        {(item) => <SelectItem key={item.id} id={item.id}>{item.label}</SelectItem>}
      </Select>
    </div>
  ),
};
