import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedIcon } from './featured-icon';
import { Star01, Check, AlertCircle, InfoCircle } from '@untitledui/icons';

const meta: Meta<typeof FeaturedIcon> = {
  title: 'Untitled UI/Foundations/FeaturedIcon',
  component: FeaturedIcon,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FeaturedIcon>;

export const Default: Story = {
  args: { icon: Star01, color: 'brand', size: 'md' },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <FeaturedIcon icon={Star01} color="brand" />
      <FeaturedIcon icon={Check} color="success" />
      <FeaturedIcon icon={AlertCircle} color="error" />
      <FeaturedIcon icon={InfoCircle} color="warning" />
      <FeaturedIcon icon={InfoCircle} color="gray" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <FeaturedIcon icon={Star01} color="brand" size="sm" />
      <FeaturedIcon icon={Star01} color="brand" size="md" />
      <FeaturedIcon icon={Star01} color="brand" size="lg" />
      <FeaturedIcon icon={Star01} color="brand" size="xl" />
    </div>
  ),
};
