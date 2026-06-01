import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Untitled UI/Base/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
};

export const WithHint: Story = {
  args: { label: 'Subscribe to newsletter', hint: 'You can unsubscribe at any time.' },
};

export const Checked: Story = {
  args: { label: 'Checked by default', defaultSelected: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled', isDisabled: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
    </div>
  ),
};
