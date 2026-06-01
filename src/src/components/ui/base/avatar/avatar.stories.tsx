import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Untitled UI/Base/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { initials: 'JD', size: 'md' },
};

export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=3', size: 'md' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => (
        <Avatar key={size} size={size} initials="JD" />
      ))}
    </div>
  ),
};
