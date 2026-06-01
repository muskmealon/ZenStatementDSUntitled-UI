import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Untitled UI/Base/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: 'Enable notifications' },
};

export const WithHint: Story = {
  args: { label: 'Dark mode', hint: 'Switch between light and dark theme' },
};

export const Selected: Story = {
  args: { label: 'Active', defaultSelected: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled', isDisabled: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Toggle size="sm" label="Small" />
      <Toggle size="md" label="Medium" />
    </div>
  ),
};
