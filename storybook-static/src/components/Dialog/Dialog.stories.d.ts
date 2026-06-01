import { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
declare const meta: Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof Dialog>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const WithScrollableBody: Story;
export declare const WithoutOverlayClose: Story;
