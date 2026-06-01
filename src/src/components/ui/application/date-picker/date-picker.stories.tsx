import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';

const meta: Meta = {
  title: 'Untitled UI/Application/DatePicker',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => <DatePicker aria-label="Date picker" />,
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '240px' }}>
      <DatePicker size="sm" aria-label="Small date picker" />
      <DatePicker size="md" aria-label="Medium date picker" />
      <DatePicker size="lg" aria-label="Large date picker" />
    </div>
  ),
};
