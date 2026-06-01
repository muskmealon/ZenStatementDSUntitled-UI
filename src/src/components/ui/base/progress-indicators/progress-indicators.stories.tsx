import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './progress-indicators';

const meta: Meta<typeof ProgressBar> = {
  title: 'Untitled UI/Base/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => <ProgressBar value={60} />,
};

export const WithLabel: StoryObj = {
  render: () => <ProgressBar value={75} labelPosition="top-floating" />,
};

export const WithBottomLabel: StoryObj = {
  render: () => <ProgressBar value={45} labelPosition="bottom" />,
};

export const AllValues: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  ),
};
