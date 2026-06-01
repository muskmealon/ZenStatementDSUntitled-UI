import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'Untitled UI/Application/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: { label: 'Date', placeholder: 'MM/DD/YYYY' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <DatePicker size="sm" label="Small" />
      <DatePicker size="md" label="Medium" />
      <DatePicker size="lg" label="Large" />
    </div>
  ),
};
