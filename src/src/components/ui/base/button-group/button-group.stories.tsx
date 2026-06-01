import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, ButtonGroupItem } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Untitled UI/Base/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>Day</ButtonGroupItem>
      <ButtonGroupItem>Week</ButtonGroupItem>
      <ButtonGroupItem>Month</ButtonGroupItem>
    </ButtonGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ButtonGroup size="sm"><ButtonGroupItem>Day</ButtonGroupItem><ButtonGroupItem>Week</ButtonGroupItem><ButtonGroupItem>Month</ButtonGroupItem></ButtonGroup>
      <ButtonGroup size="md"><ButtonGroupItem>Day</ButtonGroupItem><ButtonGroupItem>Week</ButtonGroupItem><ButtonGroupItem>Month</ButtonGroupItem></ButtonGroup>
      <ButtonGroup size="lg"><ButtonGroupItem>Day</ButtonGroupItem><ButtonGroupItem>Week</ButtonGroupItem><ButtonGroupItem>Month</ButtonGroupItem></ButtonGroup>
    </div>
  ),
};
