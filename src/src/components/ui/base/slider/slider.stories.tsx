import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Untitled UI/Base/Slider',
  component: Slider,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: [40], label: 'Volume' },
};

export const Range: Story = {
  args: { defaultValue: [20, 80], label: 'Price range' },
};

export const WithSteps: Story = {
  args: { defaultValue: [50], step: 10, label: 'Step by 10' },
};
