import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger } from './tooltip';

const meta: Meta = {
  title: 'Untitled UI/Base/Tooltip',
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="This is a tooltip">
        <TooltipTrigger>Hover me</TooltipTrigger>
      </Tooltip>
    </div>
  ),
};

export const WithDescription: StoryObj = {
  render: () => (
    <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="Tooltip title" description="Supporting description text.">
        <TooltipTrigger>With description</TooltipTrigger>
      </Tooltip>
    </div>
  ),
};

export const Placements: StoryObj = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => (
        <Tooltip key={placement} title={`Tooltip ${placement}`} placement={placement}>
          <TooltipTrigger>{placement}</TooltipTrigger>
        </Tooltip>
      ))}
    </div>
  ),
};
