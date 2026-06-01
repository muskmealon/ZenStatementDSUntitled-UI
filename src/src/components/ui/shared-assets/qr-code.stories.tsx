import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from './qr-code';

const meta: Meta<typeof QRCode> = {
  title: 'Untitled UI/Shared Assets/QRCode',
  component: QRCode,
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => <QRCode value="https://untitledui.com" size="md" />,
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <QRCode value="https://untitledui.com" size="md" />
      <QRCode value="https://untitledui.com" size="lg" />
    </div>
  ),
};
