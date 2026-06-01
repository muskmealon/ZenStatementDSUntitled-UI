import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from './qr-code';

const meta: Meta<typeof QRCode> = {
  title: 'Untitled UI/Shared Assets/QRCode',
  component: QRCode,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: { value: 'https://untitledui.com', size: 'md' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <QRCode value="https://untitledui.com" size="sm" />
      <QRCode value="https://untitledui.com" size="md" />
      <QRCode value="https://untitledui.com" size="lg" />
    </div>
  ),
};
