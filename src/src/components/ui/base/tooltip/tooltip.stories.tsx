import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger } from './tooltip';
import { Button } from '../buttons/button';

const meta: Meta = {
  title: 'Untitled UI/Base/Tooltip',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
      <TooltipTrigger>
        <Button size="sm" color="secondary">Hover me</Button>
        <Tooltip>This is a tooltip</Tooltip>
      </TooltipTrigger>
    </div>
  ),
};

export const Placements: StoryObj = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => (
        <TooltipTrigger key={placement}>
          <Button size="sm" color="secondary">{placement}</Button>
          <Tooltip placement={placement}>Tooltip {placement}</Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  ),
};
