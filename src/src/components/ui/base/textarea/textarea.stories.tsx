import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
  title: 'Untitled UI/Base/Textarea',
  component: TextArea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: { label: 'Description', placeholder: 'Write something...' },
};

export const WithHint: Story = {
  args: { label: 'Bio', placeholder: 'Tell us about yourself', hint: 'Max 280 characters' },
};

export const Invalid: Story = {
  args: { label: 'Message', placeholder: 'Enter message', isInvalid: true, errorMessage: 'This field is required.' },
};

export const Disabled: Story = {
  args: { label: 'Notes', placeholder: 'Disabled', isDisabled: true },
};
