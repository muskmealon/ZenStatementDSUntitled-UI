import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioButton } from './radio-buttons';

const meta: Meta<typeof RadioGroup> = {
  title: 'Untitled UI/Base/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioButton value="option1" label="Option 1" />
      <RadioButton value="option2" label="Option 2" />
      <RadioButton value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithHints: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      <RadioButton value="monthly" label="Monthly" hint="$12/month" />
      <RadioButton value="annual" label="Annual" hint="$99/year — save 30%" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" isDisabled>
      <RadioButton value="option1" label="Option 1" />
      <RadioButton value="option2" label="Option 2" />
    </RadioGroup>
  ),
};
