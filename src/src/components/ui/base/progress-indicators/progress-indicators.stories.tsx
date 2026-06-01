import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './progress-indicators';

const meta: Meta<typeof ProgressBar> = {
  title: 'Untitled UI/Base/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { value: 60 },
};

export const WithLabel: Story = {
  args: { value: 75, labelPosition: 'top' },
};

export const AllValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  ),
};
