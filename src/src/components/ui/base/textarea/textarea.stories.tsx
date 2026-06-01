import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta: Meta = {
  title: 'Untitled UI/Base/Textarea',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => <TextArea label="Description" placeholder="Write something..." />,
};

export const WithHint: StoryObj = {
  render: () => <TextArea label="Bio" placeholder="Tell us about yourself" hint="Max 280 characters" />,
};

export const Invalid: StoryObj = {
  render: () => <TextArea label="Message" placeholder="Enter message" isInvalid errorMessage="This field is required." />,
};

export const Disabled: StoryObj = {
  render: () => <TextArea label="Notes" placeholder="Disabled" isDisabled />,
};
