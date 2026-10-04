import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Moves between pages of a long list or table. The numbers version always keeps the first, last and current pages, with ellipses for the rest. Use `compact` where space is tight.',
      },
    },
  },
  args: { pageCount: 10, defaultPage: 1, variant: 'numbers', size: 'md' },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** In the middle of a long range. */
export const Middle: Story = { args: { pageCount: 20, defaultPage: 9 } };

/** "Page 1 of 10" between arrows. */
export const Compact: Story = { args: { variant: 'compact' } };

/** Small size, used in table footers. */
export const Small: Story = { args: { size: 'sm' } };
