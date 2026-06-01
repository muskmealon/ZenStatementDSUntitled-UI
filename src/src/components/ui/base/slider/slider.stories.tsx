import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Untitled UI/Base/Slider',
  component: Slider,
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => <Slider defaultValue={[40]} label="Volume" />,
};

export const Range: StoryObj = {
  render: () => <Slider defaultValue={[20, 80]} label="Price range" />,
};

export const WithSteps: StoryObj = {
  render: () => <Slider defaultValue={[50]} step={10} label="Step by 10" />,
};

export const Disabled: StoryObj = {
  render: () => <Slider defaultValue={[60]} label="Disabled" isDisabled />,
};
